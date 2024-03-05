import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      maxWidth: `var(--size-content)`,
      padding: `0 var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <StaticImage
        src="../images/vm-partyservice-logo.png"
        loading="eager"
        height={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ margin: 0}}
      />
    <Link
      to="/"
      style={{
        fontSize: `var(--font-md)`,
        textDecoration: `none`,
        textAlign: "center"
      }}
    >
      {siteTitle}
      <br></br>
      In Hamburg und Umgebung
    </Link>
  </header>
)

export default Header
