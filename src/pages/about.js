import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="About" />
    <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, marginTop: `80px`}}>
      <h2>
        <span role="img">📍</span>
        <a href="https://twitter.com/obensource">BEN MICHEL</a>'S PERSONAL RESIDENCE IN <a href="https://www.youtube.com/watch?v=U_o8gerare0#t=6m06s">CYBERVILLE</a>
      </h2>
      <div style={{marginTop: `10px`}}>
        <img alt="obensource celebrating working code" src="https://i.imgur.com/ZzZuLWV.jpg" height="500px" />
      </div>
      <div style={{marginTop: `10px`, fontWeight: `100`}}>I'm a polymathic human living in Portland, Oregon.</div>
      <div style={{marginTop: `10px`}}>I spend most of my time bringing people together through the web and music.</div>
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

export default About
