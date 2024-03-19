import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { Typography, Box } from "@mui/material"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <div class="text-content">
            <Typography variant="h1" sx={{marginTop: "1em", marginBottom: "1em", fontSize: "2.3em"}}>
              <Box fontWeight="fontWeightBold">{frontmatter.title}</Box>
            </Typography>
            <div
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`