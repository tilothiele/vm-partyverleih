import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./index.css"

const BierwagenPage = () => {

  return (
  <Layout>
    <div>
      <h2>Beschreibung Bierwagen #4</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum...</p>
    </div>
  </Layout>
)
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Wagen 4" />

export default BierwagenPage
