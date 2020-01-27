import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{display: `flex`, justifyContent: `center`, marginTop: `80px`}}>
      <img alt="obensource holding a sign that says the browser is the universal instrument" src="https://i.imgur.com/bryutAj.jpg" height="500px" />
    </div>
    <div id="nav" style={{display: `flex`, justifyContent: `space-around`, paddingTop: `40px`}}>
      <h2>
        <Link to="./software"> SOFT⇧WARE</Link>
      </h2>
      <h2>
        <Link to="./music">MUSIC ✇</Link>
      </h2>
      <h2>
        <Link to="./writing">WR✎TING</Link>
      </h2>
    </div>
    <div id="cv" style={{width: '100%', display: `flex`, flexDirection: `column`, alignItems: `center`, paddingTop: `50px`}}>
      <OutboundLink href="https://github.com/obensource/cv/blob/master/cv.pdf" style={{fontSize: `14px`, fontWeight: `600`, marginLeft: `20px`, letterSpacing: `20px`}}>⎜ CV ⎜</OutboundLink>
      <div style={{marginTop: `25px`, fontSize:`13px`}}></div>
    </div>
  </Layout>
)

export default IndexPage
