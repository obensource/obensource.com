import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{display: `flex`, justifyContent: `center`, marginTop: `80px`}}>
      <img alt="obensource holding a sign that says the browser is the universal instrument" src="https://i.imgur.com/bryutAj.jpg" height="500px" />
    </div>
    <div style={{display: `flex`, justifyContent: `space-around`, paddingTop: `40px`}}>
      <h2>
        <Link to="./software">⇧ SOFTWARE</Link>
      </h2>
      <h2>
        <Link to="./music">✇ MUSIC</Link>
      </h2>
      <h2>
        <Link to="./writing">✎ WRITING</Link>
      </h2>
    </div>
    <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, paddingTop: `50px`}}>
      <a href="https://www.linkedin.com/in/ben-michel-044a3985/" style={{fontWeight: `600`, letterSpacing: `20px`}}>⎜ CV ⎜</a>
      <div style={{marginTop: `25px`, fontSize:`13px`}}></div>
    </div>
  </Layout>
)

export default IndexPage
