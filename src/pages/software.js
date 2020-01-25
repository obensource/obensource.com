import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Links from '../components/links'
import SEO from '../components/seo'

const Software = () => (
  <Layout>
    <SEO title="Software" />
    <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, marginTop: `80px`}}>
      <h2>Soft⇧ware</h2>
      <div style={{marginTop: `10px`}}>
        <img alt="obensource and Tierney Cyren talking about some code on a screen at a conference" src="https://i.imgur.com/9eLTAAb.jpg" height="500px" />
      </div>
      <h3 style={{marginTop: `50px`}}>Projects</h3>
      <a style={{marginTop: `20px`}} href="https://openjsf.org/">OpenJS Foundation</a>
      <a style={{fontSize: `12px`}} href="https://github.com/openjs-foundation/cross-project-council/">Cross Project Council</a>
      <a style={{marginTop: `20px`}} href="https://nodejs.org/">Node.js</a>
      <a style={{fontSize: `12px`}} href="https://github.com/nodejs/community-committee">Community Committee</a>
      <a style={{fontSize: `12px`}} href="https://github.com/nodejs/i18n">Internationalization</a>
      <a style={{marginTop: `20px`}} href="https://www.w3.org/">W3C</a>
      <a style={{fontSize: `12px`}} href="https://www.w3.org/community/audio-comgp/">Audio Community Group</a>
      <a style={{fontSize: `12px`}} href="https://www.w3.org/community/audio-dev/">Web Audio Developers Community Group</a>
      <a style={{marginTop: `20px`}} href="https://github.com/tc39">Tc39</a>
      <a style={{fontSize: `12px`}} href="https://github.com/tc39/ecma402">ECMA 402</a>
      <a style={{marginTop: `20px`}} href="https://www.invisionapp.com/">InVision</a>
      <a style={{fontSize: `12px`}} href="https://medium.com/studio-platform-blog/welcome-to-the-studio-platform-27dff435d7e1">InVision Studio Platform</a>
      <h3 style={{marginTop: `50px`}}>Meetups</h3>
      <a href="http://pdxnode.org/">PDXNode</a>
      <a style={{fontSize: `12px`}} href="https://www.youtube.com/channel/UCI8MIw5A7ALtIvNHsrYJbjg">Video Channel</a>
      <a style={{fontSize: `12px`}} href="https://www.meetup.com/pdxnode/">Meetup</a>
      <a style={{fontSize: `12px`}} href="https://github.com/PDXNode/pdxnode">Repo</a>
      <a style={{marginTop: `20px`}} href="https://www.meetup.com/Web-Audio-PDX/">Web Audio PDX</a>
      <a style={{fontSize: `12px`}} href="https://www.youtube.com/channel/UCWLSrczwn5wZhbJoudOMHbA">Video Channel</a>
      <a style={{fontSize: `12px`}} href="https://www.meetup.com/Web-Audio-PDX/">Meetup</a>
      <a style={{fontSize: `12px`}} href="https://github.com/WebAudioPDX/webaudiopdx">Repo</a>
      <a style={{marginTop: `20px`}} href="https://donutjs.club/">Donut.js</a>
      <a style={{fontSize: `12px`}} href="https://www.youtube.com/channel/UCnm8RRKV7fuNW82fae_Lv2A">Video Channel</a>
      <a style={{fontSize: `12px`}} href="https://donutjs.club/past-speakers/">Past Speakers</a>
      <h3 style={{marginTop: `50px`}}>Media</h3>
      <div>Videocasts</div>
      <a style={{fontSize: `12px`}} href="https://www.youtube.com/watch?v=-8gxl3HyH14">Always Forward with DShaw: Node.js & JS Foundation Merger</a>
      <div style={{marginTop: `20px`}}>Demos</div>
      <a style={{fontSize: `12px`}} href="https://www.dropbox.com/s/0dea1inokbjhk4p/UI.mov?dl=0">Cardiology Lab App</a>
      <a style={{fontSize: `12px`}} href="https://www.youtube.com/watch?v=3PrbBHiTeDs">WebSound: Remote Performer</a>
      <div style={{marginTop: `20px`}}>Talks</div>
        <a style={{fontSize: `12px`}} href="https://www.youtube.com/watch?v=43E0CBj9Xks"><b>DevRelCon Tokyo</b>: Seamlessly Integrating your documentation and engineering teams</a>
          <a style={{fontSize: `12px`}} href="https://www.youtube.com/watch?v=KeRg_RyLiUY"><b>NodePDX</b>: The Web Platform is the Universal Instrument</a>
            <a style={{fontSize: `12px`}} href="https://www.youtube.com/watch?v=SmoPisZ2ifw&list=PLnGfcfJVckZzYvAiy1QGA3rLomDBFLnIw"><b>Donut.js</b>: Remote Performing – It's a thing! (360º video)</a>
      <div style={{marginTop: `20px`}}>Slides</div>
      <a style={{fontSize: `12px`}} href="https://slides.com/oben/deck-11#/">Seamlessly Integrating your Documentation and Engineering Teams</a>
      <a style={{fontSize: `12px`}} href="https://slides.com/oben/test-for-private-deck#/">Developer Relations at InVision</a>
      <a style={{fontSize: `12px`}} href="https://slides.com/oben/deck-7#/">Atlassian / InVision Studio Integrations</a>
      <a style={{fontSize: `12px`}} href="https://slides.com/oben/deck-1#/">Performing Music Remotely</a>
      <a style={{fontSize: `12px`}} href="https://slides.com/oben/deck#/">Remote Performing – It's a thing!</a>
      <a style={{fontSize: `12px`}} href="https://slides.com/oben/deck-2#/">The Pragmatics of becoming a Junior Developer</a>
      <div style={{marginTop: `20px`}}>Promos</div>
      <a style={{fontSize: `12px`}} href="https://www.youtube.com/watch?v=kubRLaNeVjQ">Why NodeConf?</a>
      <div style={{marginTop: `20px`}}>Fun</div>
      <a style={{fontSize: `12px`}} href="https://www.youtube.com/watch?v=9BB5xBxPH0E">NodeConf Adventure: Node Villager Song</a>
      <Link to="/" style={{marginTop: `50px`, fontSize: `14px`}}>⎜home⎜</Link>
    </div>
    <Links />
  </Layout>
)

export default Software
