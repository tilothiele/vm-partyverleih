import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <StaticImage
        src="../images/vm-partyservice-logo.jpg"
        loading="eager"
        height={50}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ margin: 0 }}
      />
  </header>
)

export default Header
