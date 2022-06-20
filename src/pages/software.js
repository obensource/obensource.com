import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import Nav from '../components/nav'
import Links from '../components/links'
import Seo from '../components/seo'

const Software = () => (
  <Layout>
    <Seo title="Software" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px'
      }}
    >
      <h2>Soft⇧ware</h2>
      <div style={{ marginTop: '10px' }}>
        <img
          alt="obensource and Tierney Cyren talking about some code on a screen at a conference"
          src="https://i.imgur.com/9eLTAAb.jpg"
          height="500px"
        />
      </div>
      <h3 style={{ marginTop: '50px' }}>Projects</h3>
      <OutboundLink style={{ marginTop: '20px' }} href="https://openjsf.org/">
        OpenJS Foundation
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://github.com/openjs-foundation/cross-project-council/"
      >
        Cross Project Council
      </OutboundLink>
      <OutboundLink style={{ marginTop: '20px' }} href="https://nodejs.org/">
        Node.js
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://github.com/nodejs/community-committee"
      >
        Community Committee
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://github.com/nodejs/i18n"
      >
        Internationalization
      </OutboundLink>
      <OutboundLink style={{ marginTop: '20px' }} href="https://www.w3.org/">
        W3C
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.w3.org/community/audio-comgp/"
      >
        Audio Community Group
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.w3.org/community/audio-dev/"
      >
        Web Audio Developers Community Group
      </OutboundLink>
      <OutboundLink
        style={{ marginTop: '20px' }}
        href="https://github.com/tc39"
      >
        Tc39
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://github.com/tc39/ecma402"
      >
        ECMA 402
      </OutboundLink>
      <OutboundLink
        style={{ marginTop: '20px' }}
        href="https://www.invisionapp.com/"
      >
        InVision
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://medium.com/studio-platform-blog/welcome-to-the-studio-platform-27dff435d7e1"
      >
        InVision Studio Platform
      </OutboundLink>
      <h3 style={{ marginTop: '50px' }}>Meetups</h3>
      <OutboundLink href="http://pdxnode.org/">PDXNode</OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.youtube.com/channel/UCI8MIw5A7ALtIvNHsrYJbjg"
      >
        Video Channel
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.meetup.com/pdxnode/"
      >
        Meetup
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://github.com/PDXNode/pdxnode"
      >
        Repo
      </OutboundLink>
      <OutboundLink
        style={{ marginTop: '20px' }}
        href="https://www.meetup.com/Web-Audio-PDX/"
      >
        Web Audio PDX
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.youtube.com/channel/UCWLSrczwn5wZhbJoudOMHbA"
      >
        Video Channel
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.meetup.com/Web-Audio-PDX/"
      >
        Meetup
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://github.com/WebAudioPDX/webaudiopdx"
      >
        Repo
      </OutboundLink>
      <OutboundLink style={{ marginTop: '20px' }} href="https://donutjs.club/">
        Donut.js
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.youtube.com/channel/UCnm8RRKV7fuNW82fae_Lv2A"
      >
        Video Channel
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://donutjs.club/past-speakers/"
      >
        Past Speakers
      </OutboundLink>
      <h3 style={{ marginTop: '50px' }}>Media</h3>
      <div>Videocasts</div>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.youtube.com/watch?v=-8gxl3HyH14"
      >
        <b>Always Forward with DShaw</b>: Node.js & JS Foundation Merger
      </OutboundLink>
      <div style={{ marginTop: '20px' }}>Demos</div>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.dropbox.com/s/0dea1inokbjhk4p/UI.mov?dl=0"
      >
        Cardiology Lab App
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.youtube.com/watch?v=3PrbBHiTeDs"
      >
        <b>WebSound</b>: Remote Performer
      </OutboundLink>
      <div style={{ marginTop: '20px' }}>Talks</div>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.youtube.com/watch?v=43E0CBj9Xks"
      >
        <b>DevRelCon Tokyo</b>: Seamlessly Integrating your documentation and
        engineering teams
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.youtube.com/watch?v=KeRg_RyLiUY"
      >
        <b>NodePDX</b>: The Web Platform is the Universal Instrument
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.youtube.com/watch?v=SmoPisZ2ifw&list=PLnGfcfJVckZzYvAiy1QGA3rLomDBFLnIw"
      >
        <b>Donut.js</b>: Remote Performing – It{"'"}s a thing! (360º video)
      </OutboundLink>
      <div style={{ marginTop: '20px' }}>Slides</div>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://slides.com/oben/deck-11#/"
      >
        Seamlessly Integrating your Documentation and Engineering Teams
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://slides.com/oben/test-for-private-deck#/"
      >
        Developer Relations at InVision
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://slides.com/oben/deck-7#/"
      >
        Atlassian / InVision Studio Integrations
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://slides.com/oben/deck-1#/"
      >
        Performing Music Remotely
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://slides.com/oben/deck#/"
      >
        Remote Performing – It{"'"}s a thing!
      </OutboundLink>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://slides.com/oben/deck-2#/"
      >
        The Pragmatics of becoming a Junior Developer
      </OutboundLink>
      <div style={{ marginTop: '20px' }}>Promos</div>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.youtube.com/watch?v=kubRLaNeVjQ"
      >
        Why NodeConf?
      </OutboundLink>
      <div style={{ marginTop: '20px' }}>Fun</div>
      <OutboundLink
        style={{ fontSize: '12px' }}
        href="https://www.youtube.com/watch?v=9BB5xBxPH0E"
      >
        <b>NodeConf Adventure</b>: Node Villager Song
      </OutboundLink>
      <Nav />
    </div>
    <Links />
  </Layout>
)

export default Software
