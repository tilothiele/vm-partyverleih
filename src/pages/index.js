import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import Img from "gatsby-image"
//import { graphql } from 'gatsby'
import { Card, CardContent, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, CardActionArea } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image"
import "./index.css"

const IndexPage = () => {
//  const {allFile} = data;

  const card_wh = 400

  return (
  <Layout>
    <HeroSection />

    <div>
      <h2>Textblock #1</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum...</p>
        <p>Sie wollen...? Hier sind sie richtig!</p>
        <p>Warum wir?</p>
        <p>Wir bieten...</p>
    </div>

    <div>
      <h2>Unsere Bierwagenflotte</h2>
      <p>Ihnen stehen vier Bierwagen unterschiedlicher Größe und Ausstattung zur Auswahl. Es ist für jeden Anlass das passende dabei:</p>
    </div>

    <div>
      <Grid container spacing={2}>

      <Grid item>
            <Link href="wagen1">
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <StaticImage src="../images/carousel/20210821_143706.jpg" alt="Bierwagen 1"
                    placeholder="blurred"
                    layout="fixed"
                    width={card_wh}
                    height={card_wh}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Bierwagen #1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum ...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>


          <Grid item>
            <Link href="wagen2">
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <StaticImage src="../images/carousel/20220214_150918.jpg" alt="Bierwagen 2"
                    placeholder="blurred"
                    layout="fixed"
                    width={card_wh}
                    height={card_wh}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Bierwagen #2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum ...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item>
            <Link href="wagen2">
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <StaticImage src="../images/carousel/20220625_111737.jpg" alt="Bierwagen 3"
                    placeholder="blurred"
                    layout="fixed"
                    width={card_wh}
                    height={card_wh}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Bierwagen #3
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum ...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item>
            <Link href="wagen4">
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <StaticImage src="../images/carousel/DSC_0031.JPG" alt="Bierwagen 4"
                    placeholder="blurred"
                    layout="fixed"
                    width={card_wh}
                    height={card_wh}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Bierwagen #4
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum ...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

      </Grid>
    </div>

    <div>
      <h2>Textblock #2</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum. S
        tet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>

  </Layout>
)
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

// export const pageQuery = graphql`
//   query IndexQuery {
//     allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
//       edges {
//         node {
//           base,
//           childImageSharp {
//             fixed(height: 300, width: 395) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     }
//   }
//`
