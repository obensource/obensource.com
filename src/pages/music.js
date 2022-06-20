import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import Nav from '../components/nav'
import Links from '../components/links'
import Seo from '../components/seo'

const Music = () => (
  <Layout>
    <Seo title="Music" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px'
      }}
    >
      <h2>Music ✇</h2>
      <div style={{ marginTop: '10px' }}>
        <img
          alt="obensource conducting an orchestra, choir, and band at &yetConf"
          src="https://i.imgur.com/IbafpTO.jpg"
          height="500px"
          width="750px"
        />
      </div>
      <h3 style={{ marginTop: '60px' }}>Records</h3>
      <iframe
        title="music1"
        height="360px"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/28231657&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <iframe
        title="music2"
        height="360px"
        src="https://www.youtube.com/embed/uKTDxSpLDGA"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        title="music3"
        height="120px"
        src="https://bandcamp.com/EmbeddedPlayer/album=1047409309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
        seamless
      >
        <OutboundLink href="http://benmichel.bandcamp.com/album/field-recordings-demos">
          Field Recordings (Demos) by Ben Michel
        </OutboundLink>
      </iframe>
      <h3 style={{ marginTop: '60px' }}>Live</h3>
      <iframe
        title="music4"
        height="360px"
        src="https://www.youtube.com/embed/YpJzpi0W0No"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        title="music5"
        src="https://player.vimeo.com/video/100338921"
        height="360px"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      ></iframe>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          💖 the awesome music interludes at{' '}
          <OutboundLink href="https://twitter.com/nodepdx?ref_src=twsrc%5Etfw">
            @nodepdx
          </OutboundLink>
          ! 🎼🎸🎹🔊 Nice one{' '}
          <OutboundLink href="https://twitter.com/obensource?ref_src=twsrc%5Etfw">
            @obensource
          </OutboundLink>{' '}
          and friends 😎🤖😺{' '}
          <OutboundLink href="https://t.co/30aqAf9KU3">
            pic.twitter.com/30aqAf9KU3
          </OutboundLink>
        </p>
        &mdash; Matt McKegg 🧪💥 (@NOISEISSUES){' '}
        <OutboundLink href="https://twitter.com/NOISEISSUES/status/745040256605421568?ref_src=twsrc%5Etfw">
          June 20, 2016
        </OutboundLink>
      </blockquote>{' '}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
      <h3 style={{ marginTop: '60px' }}>WebSound</h3>
      <iframe
        title="music6"
        height="360px"
        src="https://www.youtube.com/embed/3PrbBHiTeDs"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        title="music7"
        height="360px"
        src="https://www.youtube.com/embed/KeRg_RyLiUY"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        title="music8"
        height="360px"
        src="https://www.youtube.com/embed/SmoPisZ2ifw"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3 style={{ marginTop: '60px' }}>Web Experiences</h3>
      <OutboundLink style={{ marginTop: '20px' }} href="https://wildling.co/">
        <b>{'&'}yet</b>: Call of the Wildling
      </OutboundLink>
      <OutboundLink
        style={{ marginTop: '20px' }}
        href="https://www.nytimes.com/interactive/2016/11/01/opinion/voting-suppression-videogame.html"
      >
        <b>NYTimes</b>: The Voter Suppression Trail
      </OutboundLink>
      <h3 style={{ marginTop: '60px' }}>Old Projects</h3>
      <div style={{ margin: '20px 0' }}>JSCapades ({'&'}yet)</div>
      <iframe
        title="music9"
        height="360px"
        src="https://www.youtube.com/embed/9B-iQ5yk5tw"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div style={{ margin: '20px 0' }}>An Evening with Dot Matrix</div>
      <iframe
        title="music10"
        height="360px"
        src="https://www.youtube.com/embed/YxFh5QJul7s"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3 style={{ marginTop: '60px' }}>Collaborations</h3>
      <div style={{ margin: '20px 0' }}>Wesley Randolph Eader</div>
      <iframe
        title="music11"
        src="https://player.vimeo.com/video/63612192"
        width="640"
        height="360"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      ></iframe>
      <Nav />
    </div>
    <Links />
  </Layout>
)

export default Music
