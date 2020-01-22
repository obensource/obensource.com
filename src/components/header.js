import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: `flex`,
      justifyContent: `center`,
      background: `#24292D`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        padding: `1.3rem 1.0875rem`,
        marginLeft: `75px`
      }}
    >
      <h1 style={{ margin: 0, fontWeight: `100` }}>
        <Link
          to="/about/"
          style={{
            color: `white`,
            textDecoration: `none`,
            letterSpacing: `75px`
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
