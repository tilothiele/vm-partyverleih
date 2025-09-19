import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
//import Img from "gatsby-image"
//import { graphql } from 'gatsby'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image"
import "./index.css"

const IndexPage = () => {
//  const {allFile} = data;

  //const card_wh = 400

  return (
  <Layout>
    <HeroSection />

    <Box sx={{'margin-top': '1em'}} className="text-content">
      <Typography gutterBottom variant="h5">Damit auch Ihr Party-Event ein voller Erfolg wird,</Typography>
      <Typography gutterBottom component="p">
        nutzen Sie unser Angebot und mieten Sie einen unserer professionell ausgestatteten Bierwagen und weiteres Party-Equpipment.</Typography>
        <Typography gutterBottom variant="h5" sx={{'margin-top': '1em'}} >Kontaktieren Sie uns.</Typography>
        <Typography gutterBottom component="p">Rufen Sie uns an:</Typography>
        <Typography gutterBottom component="p">+49 (0)170 723 33 39</Typography>
        <Typography gutterBottom component="p">Sie können uns auch gerne eine Mail zusenden an (bevorzugt):</Typography>
        <Typography gutterBottom component="p">info@vm-partyverleih.de</Typography>
        <Typography gutterBottom component="p">Wir beraten Sie gerne und finden heraus, welches Angebot für Sie am besten passt. Wir freuen uns auf Ihre Nachricht!</Typography>
        </Box>

    <Box className="text-content">
      <Typography gutterBottom variant="h5"  sx={{'margin-top': '1em', 'margin-bottom': '1em'}}>"Im Vier- und Marschland sprechen wir gerne durch die Blume und genießen in geselliger Runde ein kühles Bier."</Typography>
    </Box>

    <Box>
      <StaticImage
          src="../images/vm-partyverleih-blumen.png"
          loading="eager"
          height={300} // adjust as needed
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Kopfbild"
          style={{ width: '100%', height: '100%' }}
        />
    </Box>

    <Box className="text-content" sx={{'margin-top': '1em', 'margin-bottom': '1em'}}>
      <Typography gutterBottom component="p">In diesem Sinne wünschen wir Ihnen ein Gutes Gelingen!</Typography>
      <Typography gutterBottom component="p">Ihr</Typography>
      <Typography gutterBottom component="p">Gerald Schümann</Typography>
    </Box>

    <Box className="text-content" sx={{'margin-top': '1em', 'margin-bottom': '1em'}}>
      <Typography gutterBottom variant="h5">Netzwerk / Partnerdienste:</Typography>
      <Typography gutterBottom component="p">Weitere Anbieter von Partyausrüstungen wie Zelte zum Mieten oder Catering:</Typography>

      <Typography gutterBottom component="p">
        <ul>
          <li><a href="https://elze-event.de/">https://elze-event.de/</a></li>
          <li><a href="https://www.ralles-partyzelte.de/">https://www.ralles-partyzelte.de/</a></li>
        </ul>
      </Typography>
    </Box>

    {/* <Box>
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
            <Link href="wagen3">
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
    </Box> */}


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
// `
