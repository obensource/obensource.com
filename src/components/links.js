import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React from 'react'

class Links extends React.Component {
  render () {
    return <div style={{display: `flex`, justifyContent: `center`, marginTop: `15px`}}>
      <OutboundLink className="link" href="https://twitter.com/obensource" style={{margin: `0 15px`}}>
        <img alt="twitter" src="https://i.imgur.com/hO5SExR.png" height="30px" width="30px" />
      </OutboundLink>
      <OutboundLink className="link" href="https://github.com/obensource" style={{margin: `0 15px`}}>
        <img alt="github" src="https://i.imgur.com/TfduBMt.png" height="30px" width="30px" />
      </OutboundLink>
      <OutboundLink className="link" href="https://www.linkedin.com/in/ben-michel-044a3985/" style={{margin: `0 15px`}}>
        <img alt="linkedin" src="https://i.imgur.com/tKFoPpK.png" height="30px" width="30px" />
      </OutboundLink>
      <OutboundLink className="link" href="https://soundcloud.com/benmichelmusic" style={{margin: `0 15px`}}>
        <img alt="soundcloud" src="https://i.imgur.com/AuDFG5Z.png" height="30px" width="30px" />
      </OutboundLink>
      <OutboundLink className="link" href="mailto:benpmichel@gmail.com?Subject=Hi%20Obensource!👋" style={{margin: `0 15px`}}>
        <img alt="email" src="https://i.imgur.com/NHSXZ3h.png" height="30px" width="30px" />
      </OutboundLink>
    </div>
  }
}

export default Links
