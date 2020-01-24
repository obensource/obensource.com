import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Writing = () => (
  <Layout>
    <SEO title="Writing" />
    <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, marginTop: `80px`, fontSize: `15px`}}>
      <h2>Writing</h2>
      <div style={{marginTop: `10px`}}>
        <img alt="obensource writing something on a teletype machine" src="https://i.imgur.com/6xQfIE8.jpg" height="500px" />
      </div>
      <h3 style={{marginTop: `50px`}}>Products</h3>
      <a href="https://medium.com/studio-platform-blog/welcome-to-the-studio-platform-27dff435d7e1"><b>InVision</b>: Welcome to the Studio Platform</a>
      <h3 style={{marginTop: `50px`}}>Proposals</h3>
      <a href="https://medium.com/the-node-js-collection/internationalizing-node-js-fe7761798b0a"><b>Node.js</b>: Internationalizing Node.js</a>
      <h3 style={{marginTop: `50px`}}>Documentation</h3>
        <a href="mailto:benpmichel@gmail.com?Subject=Hi%20obensource 👋 I'd like to hear more about your docs work!"><b>Ask Ben</b>: if you'd like to hear more about his awesome docs work</a>
      <a style={{marginTop: `10px`}} href="https://github.com/obensource/web-midi-api-docs"><b>Web MIDI API</b>: Documentation</a>
      <h3 style={{marginTop: `50px`}}>Advocation</h3>
        <a href="mailto:benpmichel@gmail.com?Subject=Hi%20obensource 👋 I'd like to hear more about your dev advocation work!"><b>Ask Ben</b>: if you'd like to hear more about his advocation for developers</a>
      <h3 style={{marginTop: `50px`}}>Creative</h3>
      <a href="https://medium.com/@obensource/stacking-synthesizers-like-tiny-modules-e4b1462a82d3"><b>Music Production</b>: Stacking synthesizers (like tiny modules)</a> 
      <a style={{marginTop: `10px`}} href="https://blog.andyet.com/2014/02/26/Pete-Seeger-lessons-learned-from-a-hard-link-to-the-old-world/"><b>Pete Seeger</b>: lessons learned from a hard link to the old world</a>
      <Link to="/" style={{marginTop: `50px`, fontSize: `14px`}}>⎜home⎜</Link>
    </div>
    <div style={{display: `flex`, justifyContent: `center`, marginTop: `15px`}}>
      <a href="https://twitter.com/obensource" style={{margin: `0 15px`}}>
        <img alt="twitter" src="https://i.imgur.com/hO5SExR.png" height="30px" width="30px" />
      </a>
      <a href="https://github.com/obensource" style={{margin: `0 15px`}}>
        <img alt="github" src="https://i.imgur.com/TfduBMt.png" height="30px" width="30px" />
      </a>
      <a href="https://www.linkedin.com/in/ben-michel-044a3985/" style={{margin: `0 15px`}}>
        <img alt="linkedin" src="https://i.imgur.com/tKFoPpK.png" height="30px" width="30px" />
      </a>
      <a href="https://soundcloud.com/benmichelmusic" style={{margin: `0 15px`}}>
        <img alt="soundcloud" src="https://i.imgur.com/AuDFG5Z.png" height="30px" width="30px" />
      </a>
      <a href="mailto:benpmichel@gmail.com?Subject=Hi%20Obensource!👋" style={{margin: `0 15px`}}>
        <img alt="email" src="https://i.imgur.com/NHSXZ3h.png" height="30px" width="30px" />
      </a>
    </div>
  </Layout>
)

export default Writing
