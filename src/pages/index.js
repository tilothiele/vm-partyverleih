import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import HeroSection from "../components/HeroSection"
import ImageCarousel from "../components/ImageCarousel"

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <ImageCarousel />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
