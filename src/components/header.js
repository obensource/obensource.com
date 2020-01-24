import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, pixelValue }) => (
  <div
    style={{
      width: `100%`,
      display: `flex`,
      justifyContent: `center`,
      background: `#24292D`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        padding: `1.3rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0, marginLeft: pixelValue, fontWeight: `100` }}>
        <Link
          id="title"
          to="/about/"
          style={{
            color: `white`,
            textDecoration: `none`,
            letterSpacing: pixelValue
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
