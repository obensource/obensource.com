import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.getWindowWidth()
  }
  getWindowWidth () {
    let windowWidth = null
    let pixelValue = '75px'
    
    // logic in ugly if block to prevent SSR from throwing
    if (typeof(window) !== 'undefined') {
      windowWidth = window.innerWidth
    }

    if (windowWidth > 1200) {
      pixelValue = '75px'
    } else if (windowWidth < 400) {
      pixelValue = '5px'
    } else if (windowWidth < 600) {
      pixelValue = '10px'
    } else if (windowWidth < 800) {
      pixelValue = '32px'
    } else if (windowWidth < 1000) {
      pixelValue = '65px'
    } else if (windowWidth < 1200) {
      pixelValue = '75px'
    } else {
      pixelValue = '10px'
    }

    this.state = {pixelValue: pixelValue};
  }
  render () {
    return <div
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
          <h1 style={{ margin: 0, marginLeft: this.state.pixelValue, fontWeight: `100` }}>
            <Link
              id="title"
              to="/about/"
              style={{
                color: `white`,
                textDecoration: `none`,
                letterSpacing: this.state.pixelValue
              }}
            >
              {this.props.siteTitle}
            </Link>
          </h1>
        </div>
      </div>
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
