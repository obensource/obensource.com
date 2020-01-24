import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

let windowWidth = 1000
let pixelValue = '75px'

// logic in ugly if block to prevent SSR from throwing
if (typeof(window) !== 'undefined') {
  const windowWidth = window.innerWidth
  
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
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} pixelValue={pixelValue} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
