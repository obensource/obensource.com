import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class Nav extends React.Component {
  returnPipe () {
    let windowWidth = null
    
    // logic in ugly if block to prevent SSR from throwing
    if (typeof(window) !== 'undefined') {
      windowWidth = window.innerWidth
    }

    if (windowWidth < 800) {
      return null
    } else {
      return ' | '
    }
  }
  render () {
    return <div className="nav">
      <Link to="/"> home</Link>
      <span style={{padding: '0 6px', paddingBottom: '2px', fontWeight: '900'}}>{this.returnPipe()}</span>
      <Link to="/software"> software</Link>
      <span style={{padding: '0 6px', paddingBottom: '2px', fontWeight: '900'}}>{this.returnPipe()}</span>
      <Link to="/music"> music</Link>
      <span style={{padding: '0 6px', paddingBottom: '2px', fontWeight: '900'}}>{this.returnPipe()}</span>
      <Link to="/writing"> writing</Link>
      <span style={{padding: '0 6px', paddingBottom: '2px', fontWeight: '900'}}>{this.returnPipe()}</span>
      <OutboundLink href="https://calendly.com/obensource" to="/writing"> calendar</OutboundLink>
    </div>
  }
}

export default Nav
