import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import Links from '../components/links'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={['gatsby', 'application', 'react']} />
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}
    >
      <img
        alt="obensource holding a sign that says the browser is the universal instrument"
        src="https://i.imgur.com/bryutAj.jpg"
        height="500px"
      />
    </div>
    <div
      id="nav-index"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '40px'
      }}
    >
      <h2>
        <Link to="/software"> SOFT⇧WARE</Link>
      </h2>
      <h2>
        <Link to="/music">MUSIC ✇</Link>
      </h2>
      <h2>
        <Link to="/writing">WR✎TING</Link>
      </h2>
    </div>
    <span
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '50px',
        paddingLeft: '15px'
      }}
    >
      <OutboundLink
        className="my-info"
        href="https://github.com/obensource/cv/blob/master/cv.pdf"
      >
        CV
      </OutboundLink>
      <span id="pipe">|</span>
      <OutboundLink className="my-info" href="https://calendly.com/obensource">
        Calendar
      </OutboundLink>
    </span>
    <Links />
  </Layout>
)

export default IndexPage
