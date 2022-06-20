import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import Nav from '../components/nav'
import Links from '../components/links'
import Seo from '../components/seo'

const Writing = () => (
  <Layout>
    <Seo title="Writing" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px',
        fontSize: '15px'
      }}
    >
      <h2>Wr✎ting</h2>
      <div style={{ marginTop: '10px' }}>
        <img
          alt="obensource writing something on a teletype machine"
          src="https://i.imgur.com/6xQfIE8.jpg"
          height="500px"
        />
      </div>
      <h3 style={{ marginTop: '50px' }}>Blogs</h3>
      <Link to="../blogs/high-fidelity-event-sampling-and-playback-with-vanilla-javascript">
        <div style={{ paddingBottom: '20px' }}>
          <i>
            <b>Featured</b> ✎
          </i>
          {': '}
          High fidelity event sampling and playback with Vanilla JavaScript
        </div>
      </Link>
      <Link to="../blogs/https-for-local-development">
        <i>✎</i>: HTTPs for local Development
      </Link>
      <h3 style={{ marginTop: '50px' }}>Products</h3>
      <OutboundLink href="https://medium.com/studio-platform-blog/welcome-to-the-studio-platform-27dff435d7e1">
        <b>InVision</b>: Welcome to the Studio Platform
      </OutboundLink>
      <h3 style={{ marginTop: '50px' }}>Proposals</h3>
      <OutboundLink href="https://medium.com/the-node-js-collection/internationalizing-node-js-fe7761798b0a">
        <b>Node.js</b>: Internationalizing Node.js
      </OutboundLink>
      <h3 style={{ marginTop: '50px' }}>Documentation</h3>
      <OutboundLink href="mailto:benpmichel@gmail.com?Subject=Hi%20obensource 👋 I'd like to hear more about your docs work!">
        <b>Ask Ben</b>: if you{"'"}d like to hear more about his awesome docs
        work
      </OutboundLink>
      <OutboundLink
        style={{ marginTop: '20px' }}
        href="https://github.com/obensource/web-midi-api-docs"
      >
        <b>Web MIDI API</b>: Documentation
      </OutboundLink>
      <h3 style={{ marginTop: '50px' }}>Advocation</h3>
      <OutboundLink href="mailto:benpmichel@gmail.com?Subject=Hi%20obensource 👋 I'd like to hear more about your dev advocation work!">
        <b>Ask Ben</b>: if you{"'"}d like to hear more about his advocation for
        developers
      </OutboundLink>
      <h3 style={{ marginTop: '50px' }}>Creative</h3>
      <OutboundLink href="https://medium.com/@obensource/stacking-synthesizers-like-tiny-modules-e4b1462a82d3">
        <b>Music Production</b>: Stacking synthesizers (like tiny modules)
      </OutboundLink>
      <OutboundLink
        style={{ marginTop: '20px' }}
        href="https://blog.andyet.com/2014/02/26/Pete-Seeger-lessons-learned-from-a-hard-link-to-the-old-world/"
      >
        <b>Pete Seeger</b>: lessons learned from a hard link to the old world
      </OutboundLink>
      <Nav />
    </div>
    <Links />
  </Layout>
)

export default Writing
