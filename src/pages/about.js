import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Links from '../components/links'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="About" />
    <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, marginTop: `80px`}}>
      <h2>
        <span role="img">📍</span>
        <a class="link" href="https://twitter.com/obensource">BEN MICHEL</a>'S PERSONAL RESIDENCE IN <a class="link" href="https://www.youtube.com/watch?v=U_o8gerare0#t=6m06s">CYBERVILLE</a>
      </h2>
      <div style={{marginTop: `10px`}}>
        <img alt="obensource celebrating working code" src="https://i.imgur.com/ZzZuLWV.jpg" height="500px" />
      </div>
      <div style={{marginTop: `10px`, fontWeight: `100`}}>I'm a polymathic human living in Portland, Oregon.</div>
      <div style={{marginTop: `10px`}}>I spend most of my time bringing people together through the web and music.</div>
      <Link to="/" style={{marginTop: `50px`, fontSize: `14px`}}>⎜home⎜</Link>
      </div>
      <Links />
  </Layout>
)

export default About
