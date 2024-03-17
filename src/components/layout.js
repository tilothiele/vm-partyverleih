/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react"
import { createTheme } from '@mui/material/styles';

import Header from "./header"
import "./layout.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ff00"
    },
    text: {
      primary: "#ff88dd"
    }
  },
});


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
        }}
      >
        <Box variant="main">{children}</Box>
        <Box variant="footer"
          style={{
            marginTop: `var(--space-4)`,
            marginBottom: `var(--space-4)`,
            fontSize: `var(--font-sm)`,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <a href="/md/impressum/"
            style={{
              marginRight: `var(--space-2)`,
            }}
          >Impressum&Datenschutz</a>
          {/* <a href="/md/preise/"
            style={{
              marginRight: `var(--space-2)`,
            }}
          >Preise</a> */}
          {/* <a href="/md/agb/">AGBs</a> */}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Layout
