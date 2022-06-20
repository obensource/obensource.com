import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import Nav from '../components/nav'
import Links from '../components/links'
import Seo from '../components/seo'

const About = () => (
  <Layout>
    <Seo title="About" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px'
      }}
    >
      <h2>
        <span role="img">📍</span>
        <OutboundLink className="link" href="https://twitter.com/obensource">
          BEN MICHEL
        </OutboundLink>
        {"'"}S PERSONAL RESIDENCE IN{' '}
        <OutboundLink
          className="link"
          href="https://www.youtube.com/watch?v=U_o8gerare0#t=6m06s"
        >
          CYBERVILLE
        </OutboundLink>
      </h2>
      <div style={{ marginTop: '10px' }}>
        <img
          alt="obensource celebrating working code"
          src="https://i.imgur.com/ZzZuLWV.jpg"
          height="500px"
        />
      </div>
      <div style={{ marginTop: '10px', fontWeight: '100' }}>
        I{"'"}m a polymathic human living in Bend, Oregon.
      </div>
      <div style={{ marginTop: '10px' }}>
        I spend most of my time bringing people together through the web and
        music.
      </div>
      <Nav />
    </div>
    <Links />
  </Layout>
)

export default About
