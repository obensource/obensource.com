import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Links from '../components/links'
import SEO from '../components/seo'

const Music = () => (
  <Layout>
    <SEO title="Music" />
    <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, marginTop: `80px`}}>
      <h2>Music ✇</h2>
      <div style={{marginTop: `10px`}}>
        <img alt="obensource conducting an orchestra, choir, and band at &yetConf" src="https://i.imgur.com/IbafpTO.jpg" height="500px" width="750px" />
      </div>
      <h3 style={{marginTop: `60px`}}>Records</h3>
      <iframe height="360px" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/28231657&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <iframe height="360px" src="https://www.youtube.com/embed/uKTDxSpLDGA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe height="120px" src="https://bandcamp.com/EmbeddedPlayer/album=1047409309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://benmichel.bandcamp.com/album/field-recordings-demos">Field Recordings (Demos) by Ben Michel</a></iframe>
      <h3 style={{marginTop: `60px`}}>Live</h3>
      <iframe height="360px" src="https://www.youtube.com/embed/YpJzpi0W0No" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe src="https://player.vimeo.com/video/100338921" height="360px" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">💖 the awesome music interludes at <a href="https://twitter.com/nodepdx?ref_src=twsrc%5Etfw">@nodepdx</a>! 🎼🎸🎹🔊 Nice one <a href="https://twitter.com/obensource?ref_src=twsrc%5Etfw">@obensource</a> and friends 😎🤖😺 <a href="https://t.co/30aqAf9KU3">pic.twitter.com/30aqAf9KU3</a></p>&mdash; Matt McKegg 🧪💥 (@NOISEISSUES) <a href="https://twitter.com/NOISEISSUES/status/745040256605421568?ref_src=twsrc%5Etfw">June 20, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <h3 style={{marginTop: `60px`}}>WebSound</h3>
        <iframe height="360px" src="https://www.youtube.com/embed/3PrbBHiTeDs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe height="360px" src="https://www.youtube.com/embed/KeRg_RyLiUY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe height="360px" src="https://www.youtube.com/embed/SmoPisZ2ifw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <h3 style={{marginTop: `60px`}}>Web Experiences</h3>
      <a style={{marginTop: `20px`}} href="https://wildling.co/"><b>&yet</b>: Call of the Wildling</a>
      <a style={{marginTop: `20px`}} href="https://www.nytimes.com/interactive/2016/11/01/opinion/voting-suppression-videogame.html"><b>NYTimes</b>: The Voter Suppression Trail</a>
      <h3 style={{marginTop: `60px`}}>Old Projects</h3>
      <div style={{margin: `20px 0`}}>JSCapades (&yet)</div>
      <iframe height="360px" src="https://www.youtube.com/embed/9B-iQ5yk5tw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div style={{margin: `20px 0`}}>An Evening with Dot Matrix</div>
      <iframe height="360px" src="https://www.youtube.com/embed/YxFh5QJul7s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <h3 style={{marginTop: `60px`}}>Collaborations</h3>
      <div style={{margin: `20px 0`}}>Wesley Randolph Eader</div>
      <iframe src="https://player.vimeo.com/video/63612192" width="640" height="360" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
      <Link to="/" style={{marginTop: `50px`, fontSize: `14px`}}>⎜home⎜</Link>
      </div>
      <Links />
  </Layout>
)

export default Music
