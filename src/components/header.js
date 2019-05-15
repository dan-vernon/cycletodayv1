import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteSubTitle }) => (
  <header
    style={{
      background: `#ffa1ac`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <br />
      <h2
      style={{
            color: `white`,}}>
        {siteSubTitle}
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubTitle: ``,
}

export default Header
