import React from 'react'
import Layout from '../../components/layout'
import Nav from '../../components/nav'
import Links from '../../components/links'
import Seo from '../../components/seo'
import title from './assets/title.mp4'
import backToTheFuture from './assets/backtothefuture.jpg'
import waterfall from './assets/websocket-waterfall.jpg'
import samplePlayback from './assets/sample-and-playback.mp4'
import pseudocode from './assets/pseudocode.png'
import firstRunSampler from './assets/first-run-sampler.png'
import firstRunSample from './assets/first-run-sample.png'
import firstRunSampleServer from './assets/first-run-sample-server.png'
import setIntervalAccuracy from './assets/setinterval-accuracy.png'
import fiveSecondCheck1 from './assets/5secondcheck1.png'
import fiveSecondCheck2 from './assets/5secondcheck2.png'
import contextTimeLogs from './assets/contextTime.png'
import simpleAccuracyTest from './assets/simple-accuracy-test.png'
import eventSampler from './assets/event-sampler.png'
import rafAccuracy from './assets/rafAccuracy.png'
import eventSample from './assets/event-sample.png'
import firstChunkPlayback from './assets/firstChunkPlayback.png'
import eventSamplePlayback from './assets/event-sample-playback.png'

const Blog = () => (
  <Layout>
    <Seo title="High fidelity event sampling and playback with Vanilla JavaScript" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px',
        fontSize: '18px',
        fontWeight: '400'
      }}
    >
      <video
        width="85%"
        src={title}
        loop="true"
        autoPlay="true"
        controls
        muted
      />
      <i
        style={{
          margin: '40px 0 80px 0',
          animation: 'none',
          color: '#747474',
          fontSize: '20px'
        }}
      >
        {'"'}If at first the idea is not absurd, then there is no hope for it.
        {'"'}
        –Einstein
      </i>
      <img
        alt="Websocket Waterfall"
        src={waterfall}
        width="700px"
        style={{ border: 'none', marginTop: '20px' }}
      />
      <p>
        A few years ago I dreamed up this delivery method for live music that
        seemed absurd, but somehow necessary. After experiencing the constraints
        of the pandemic as a developer + musician the idea became increasingly
        relevant, and implementation felt silly not to attempt.
      </p>
      <p>
        This is the first post in a series of my learnings along that JavaScript
        journey, through which I{"'"}ll primarily be surfacing low-latency
        frontend performance issues that are universal to building apps for the
        web – with a little domain-specific fun sprinkled in.
      </p>
      <p>
        Getting to the juncture that{"'"}s birthed this series has been the
        result of a few years of ongoing inspiration, sustained by watching the{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
          style={{ fontWeight: '500', padding: '0', color: '#73498d' }}
        >
          Web Audio API
        </a>{' '}
        and{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API"
          style={{ fontWeight: '500', padding: '0', color: '#73498d' }}
        >
          Web MIDI API
        </a>{' '}
        projects grow up (for nearly a decade now, thank you{' '}
        <a
          href="https://www.linkedin.com/in/diagonal/"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Chris R
        </a>
        ,{' '}
        <a
          href="https://twitter.com/hochsays"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Hongchan
        </a>
        ,{' '}
        <a
          href="https://twitter.com/padenot"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Paul
        </a>
        ,{' '}
        <a
          href="https://www.linkedin.com/in/raymond-toy-36248413/"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Raymond
        </a>
        ,{' '}
        <a
          href="https://twitter.com/cwilso"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Chris W
        </a>
        ,{' '}
        <a
          href="https://twitter.com/chrislowis"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Chris L
        </a>
        ,{' '}
        <a
          href="https://twitter.com/MylesBorins"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Myles
        </a>
        ,{' '}
        <a
          href="https://twitter.com/NOISEISSUES"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Matt
        </a>
        ,{' '}
        <a
          href="https://twitter.com/Rumyra"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Ruth
        </a>
        ,{' '}
        <a
          href="https://twitter.com/teropa"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Tero
        </a>
        , et al). Throughout these years I{"'"}ve phased between research, demo
        writing, organizing related meetups, and experiencing a few significant
        moments of trial, error, and progress. Some of the most notable being:
        <ul
          style={{
            margin: '20px 5% 0 5%'
          }}
        >
          <li style={{ listStyleType: 'none' }}>
            🔊 Writing a demo to test the assumption that someone could{' '}
            <a
              href="https://www.youtube.com/watch?v=3PrbBHiTeDs"
              style={{ padding: '0', fontWeight: '400', color: '#73498d' }}
            >
              lead a band at a music venue remotely
            </a>{' '}
            using{' '}
            <a
              href="https://en.wikipedia.org/wiki/MIDI"
              style={{ padding: '0', fontWeight: '400', color: '#73498d' }}
            >
              MIDI
            </a>{' '}
            over{' '}
            <a
              href="https://en.wikipedia.org/wiki/WebSocket"
              style={{ padding: '0', fontWeight: '400', color: '#73498d' }}
            >
              WebSockets
            </a>{' '}
            (thank you
            <a
              href="https://twitter.com/mblakemusic"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              {' '}
              Michael
            </a>
            ,{' '}
            <a
              href="https://bandcamp.com/nathanielkornet"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              Nate
            </a>
            ,{' '}
            <a
              href="https://www.linkedin.com/in/jov-luke-068993b/"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              Jov
            </a>
            , and{' '}
            <a
              href="https://twitter.com/bcomnes"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              Bret
            </a>{' '}
            for that wonderful moment in 2016).
          </li>
          <li style={{ listStyleType: 'none' }}>
            🔊 Concluding that this WebSocket waterfall transport mechanism did
            not need to be built on a peer-to-peer solution instead (like{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Using_data_channels"
              style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
            >
              WebRTC data channels
            </a>
            ) to work performantly and scale, but that a lightweight WebSocket
            implementation would work beautifully (even if it has to make round
            trips to the WS server to relay user data). This outcome was
            supported by many conversations with core WebRTC and node developers
            (thank you{' '}
            <a
              href="https://twitter.com/HCornflower"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              Philipp
            </a>
            ,{' '}
            <a
              href="https://twitter.com/jibrewery"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              Jan-Ivar
            </a>
            ,{' '}
            <a
              href="https://twitter.com/f09fa681"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              Lenny
            </a>
            , et al).
          </li>
          <li style={{ listStyleType: 'none' }}>
            🔊 Understanding the limitations of JS timing APIs, and how to
            navigate them for this purpose (
            <a
              href="https://twitter.com/nickniemeir"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              Nick<b>*</b>
            </a>
            ,{' '}
            <a
              href="https://twitter.com/nvcexploder"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              Ben
            </a>
            ,{' '}
            <a
              href="https://twitter.com/bengl"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              Bryan
            </a>
            , and{' '}
            <a
              href="https://twitter.com/b0neskull"
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            >
              Chris H
            </a>
            ).
          </li>
        </ul>
      </p>
      <p style={{ marginTop: '10px' }}>
        <i style={{ padding: '0', animation: 'none' }}>
          Alright, let{"'"}s get started with some context.
        </i>
      </p>
      <h2 style={{ padding: '0', marginTop: '30px' }}>The Context</h2>
      <video
        width="85%"
        src={samplePlayback}
        loop="true"
        autoPlay="true"
        controls
        muted
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginTop: '10px',
          marginBottom: '50px'
        }}
      >
        Sampling & Playback Mechanism
      </i>
      <p>
        Conceptually, this event sampling and playback mechanism was designed to
        be used unidirectionally in a relay – rather than to support an attempt
        at making events between clients feel bidirectionally interrupt driven.
        The point being that event samples from every client in the relay can
        continually be added during a defined chunk of time (for example: 5
        seconds), and then sent to listeners when all the events have been fired
        by the ‘performer{"'"} clients.
      </p>
      <p>
        At the onset, I wasn{"'"}t sure if this would work. JavaScript{"'"}s
        timer APIs are usually firing on the same call stack alongside
        everything else in its one, single, main thread – and this doesn{"'"}t
        seem like a reliable setup for accurately sampling events and playing
        them back at high frequency intervals below a rate that{"'"}s acceptable
        for achieving the fidelity that music requires (like 16 milliseconds or
        less). I mean, you can tell the JS timer APIs to run callbacks at a rate
        as low as a millisecond, but you{"'"}re still left with the question:
        “is that even possible?”
      </p>
      <p>
        Regardless, there have been a few notable examples in recent years of
        deterministic event scheduling in web applications (such as: sequencers,
        drum machines, and even basic audio multitracking with a metronome). So
        even though I set out on a naive foot, those projects gave me the
        confidence that this could be possible.
      </p>
      <h2 style={{ marginTop: '30px' }}>
        Problem One: High fidelity event sampling
      </h2>
      <p>
        The idea was to be able to trigger MIDI events (using the
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          {' '}
          Web MIDI API
        </a>
        ) in a way that could be either sent to the next client at exactly the
        same duration of time as it was performed (which is likely impossible),
        or to capture the events in small chunks of time and replay them them on
        the next client immediately, in series. Going with the latter meant that
        the first problem at hand was to figure out how to accurately capture a
        stream of MIDI events as they occurred, along with a timestamp
        indicating when they happened for later use.
      </p>
      <h3 style={{ marginTop: '20px' }}>What didn{"'"}t work? Timers.</h3>
      <p>
        Instead of starting on a sensible foot: like using a standard Web API
        that runs a predictably repeating function to capture highly accurate
        time samples from the{' '}
        <span style={{ fontWeight: '500' }}>Web Audio API</span>
        {"'"}s{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          {' '}
          audioContext.currentTime
        </a>{' '}
        – I headed in a direction of looping bliss:
      </p>
      <img
        src={pseudocode}
        alt="Initial Sampling Pseudocode"
        style={{ borderStyle: 'none', marginTop: '20px', width: '500px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        Initial Sampling Pseudocode
      </i>
      <p>
        This is a nice thought, but an infinite sampling loop like this is
        doomed to create way too much data, and weigh down the main thread (or
        even blow up its call stack).
      </p>
      <p>
        The next natural iteration was to reach for a JS timer-based API that
        facilitates calling a callback repeatedly at a defined interval – like
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          {' '}
          setInterval
        </a>
        .
      </p>
      <img
        src={firstRunSampler}
        alt="Using setInterval"
        style={{ borderStyle: 'none', marginTop: '20px', width: '600px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        Using setInterval
      </i>
      <p>
        In the app load event here, this sampling process attempts to generate
        samples at about every millisecond (there was no inherent reason to use
        that frequency, other than to see how dependable{' '}
        <span style={{ color: '#73498d' }}>setInterval</span> was for this
        operation).
      </p>
      <p>
        The feasible way to catch the 5 second mark for each chunk was to use
        the audioContext{"'"}s{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          {' '}
          currentTime
        </a>{' '}
        counter (via the contextTime returned by{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/getOutputTimestamp"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          getOutputTimestamp
        </a>
        ). This is where you start to see setInterval{"'"}s scheduling accuracy
        break down.
      </p>
      <img
        src={firstRunSample}
        alt="Capturing an accurate time period for each chunk hinges on the
      time.contextTime % 5 === 0 check"
        style={{ borderStyle: 'none', marginTop: '20px', width: '630px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        Capturing an accurate time period for each chunk hinges on the
        <span style={{ fontWeight: '400' }}>
          {' '}
          time.contextTime % 5 === 0
        </span>{' '}
        check
      </i>
      <p>
        Simply checking for 0 ensures that the condition will never be met,
        because the <span style={{ color: '#73498d' }}>contextTime</span> will
        rarely (if ever) be perfectly divisible by an integer.
      </p>
      <img
        src={fiveSecondCheck1}
        alt="This time.context % 5 === 0 condition will likely never return true"
        style={{ borderStyle: 'none', marginTop: '20px', width: '600px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        This will likely never return true
      </i>
      <p>
        This is because the timer that{"'"}s currently used will never call the
        callback that gets the context time at exact intervals of 1 millisecond.
        For example, the integer 5 could be stuck somewhere in a transition from
        4 to 5 that was off by ~0.005, as it is here between these{' '}
        <span style={{ color: '#2b87ab' }}>genChunkItem </span>
        callback calls:
      </p>
      <img
        src={contextTimeLogs}
        alt="Context time logs"
        style={{ borderStyle: 'none', marginTop: '20px', width: '250px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        contextTime logs
      </i>
      <p>
        Though necessary, flooring the timestamp is also problematic without
        introducing additional workarounds.
      </p>
      <img
        src={fiveSecondCheck2}
        alt="This Math.floor(time.context) % 5 === 0 condition will likely never return true"
        style={{ borderStyle: 'none', marginTop: '20px', width: '600px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        This will return true, but for an entire second
      </i>
      <p>
        Even though this subtle complexity has been added by flooring the
        <span style={{ color: '#73498d' }}> contextTime</span>, it doesn{"'"}t
        mean that this check is a bad one. The issue is the underlying
        conditions that were set up for the check to be called in, which can be
        seen more clearly by measuring the time between
        <span style={{ fontWeight: '400', color: '#2b87ab' }}>
          {' '}
          genChunkItem
        </span>{' '}
        calls:
      </p>
      <img
        src={setIntervalAccuracy}
        alt="setInterval Accuracy"
        style={{ borderStyle: 'none', marginTop: '20px', width: '400px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        The time between ‘1ms{"'"}{' '}
        <span style={{ fontWeight: '400' }}> setInterval</span> calls range from
        less than 1ms to more than 7ms
        <br />
        (measured with{' '}
        <span style={{ fontWeight: '400' }}>performance.now()</span>)
      </i>
      <p>
        This is where it pays to understand how JavaScript targets time, and not
        to just assume that JS can predictably operate on a precise time scale.
      </p>
      <p>
        Here the trick is that a check like{' '}
        <span style={{ fontWeight: '400', color: '#2b87ab' }}>
          isFiveSeconds
        </span>{' '}
        can{"'"}t be used alone in order to capture the moment when a chunk of
        samples needs to be sent. In an environment with no exact timing
        guarantees: it should be used as the condition to fire a latching
        function that only allows the chunk to be sent the first time the check
        returns true.
      </p>
      <p>
        This case seems to perfectly illustrate that the problem with
        <span style={{ color: '#73498d' }}> setInterval</span> (and JS timing in
        general really) is that using a standard timer API for handling
        precision events will never work. You can try to hit that mark, but you
        {"'"}re going to miss it since there{"'"}s no way to guarantee that your
        operation is going to be executed on the call stack at exactly every
        millisecond (let alone at greater intervals). The same rule applies for{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          setTimeout
        </a>{' '}
        as well.
      </p>
      <img
        alt="JS Timers, in a nutshell"
        src={backToTheFuture}
        width="700px"
        style={{ border: 'none', marginTop: '20px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        JS Timers, in a nutshell
      </i>
      <p>
        JavaScript timers can only run at an estimated interval, and the reason
        for this is that even though a callback can be scheduled by these APIs
        to run on a set timer, other tasks are likely going be running when that
        time arrives – and the callback will have to wait its turn. This reality
        is even loudly noted near the top of the{' '}
        <a
          href="https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          HTML timer specification
        </a>
        , stating that “delays due to CPU load, other tasks, etc, are to be
        expected.”
      </p>
      <p>
        Since estimation is at play when scheduling work to be done, it{"'"}s
        easy to see that setInterval and other JS timers will also bring
        fundamental issues to the table that they{"'"}re not really equipped to
        solve: like clock synchronization.
      </p>
      <p>
        To demonstrate this (and what you should not do), here{"'"}s a
        rudimentary chunk playback server that kicks off ANOTHER setInterval
        timer in an attempt to send over the event samples that were captured to
        the other clients (in this case, it{"'"}s a simple WebSocket broadcast
        for testing the accuracy of playback timing locally first).
      </p>
      <img
        src={firstRunSampleServer}
        alt="Now we have two separate, undependable clocks"
        style={{ borderStyle: 'none', marginTop: '20px', width: '620px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        Now we have two separate, undependable clocks 🤦
      </i>
      <p>
        Unfortunately, this new timer{"'"}s ability to playback events at
        exactly the same times they were captured will never be possible since
        <span style={{ color: '#73498d' }}> setInterval</span> won{"'"}t be able
        to run through the exact same set of time intervals twice (especially at
        a high resolution). It{"'"}s also worth noting that additional
        complications may ensue here since one timer is executing in the
        browser, and another is in node{"'"}s{' '}
        <a
          href="https://nodejs.dev/learn/the-nodejs-event-loop"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          event loop
        </a>{' '}
        (which will now keep running as long as the timer is active). Both
        versions of setInterval use different timing mechanisms, and have very
        different speed averages.
      </p>
      <img
        src={simpleAccuracyTest}
        alt="setInterval accuracy test"
        style={{ borderStyle: 'none', marginTop: '20px', width: '600px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        setInterval accuracy test
      </i>
      <p>
        Running this simple accuracy test on both platforms returned a 6ms
        average for drift around the 16ms interval target in the browser, and a
        2.5ms average drift in node (note: this speed difference is also due to
        circumstances extrinsic to JS runtime performance, like{' '}
        <a
          href="https://hackaday.com/2018/01/06/lowering-javascript-timer-resolution-thwarts-meltdown-and-spectre/"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Spectre vulnerability mitigation
        </a>
        ).
      </p>
      <p>
        So instead of instantiating multiple, unsynchronized clocks, and
        continually pushing new work to the stack (which will slow it down, and
        make execution time unpredictable) – wouldn{"'"}t it be better to only
        use one source of truth for precision timing, and correlate that with
        the most dependable, high frequency task that{"'"}s already happening at
        regular intervals in the browser?
      </p>
      <p>
        Well yes it would be, and that{"'"}s exactly what can be done to make
        this work! It turns out that this is possible if you don{"'"}t try to
        time your events precisely using these APIs, but shift your focus to
        precisely <span style={{ textDecoration: 'underline' }}>measuring</span>{' '}
        the time the events occurred by ensuring they all rely on the shared
        high-resolution time that{"'"}s available, and are utilizing a correct
        time-offset to account for each client{"'"}s local time.
      </p>
      <h3 style={{ marginTop: '20px' }}>
        What did work? Reliable Tick Targeting & Measuring Offsets.
      </h3>
      <p>
        If you{"'"}ve been around the block with Node.js before, the first API
        that likely comes to mind for accurately scheduling events as close to
        the tick as possible is
        <a
          href="https://nodejs.dev/learn/understanding-process-nexttick"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          {' '}
          process.nextTick
        </a>
        . It{"'"}s in the right category of functions to consider here, but at
        this point it{"'"}s clear that:
        <ul style={{ marginTop: '20px' }}>
          <li>
            Generating high-resolution timestamp samples that are accurately
            correlated to user events shouldn{"'"}t be done anywhere else but in
            the client.
          </li>
          <li>
            This kind of method still creates new ticks (work), rather than
            referencing existing ones.
          </li>
        </ul>
      </p>
      <p>
        This will also rule out Web APIs like{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          queueMicrotask
        </a>{' '}
        because microtasks will stall the browser by queuing up work at the tail
        of the current tick, rather than at the next one.
      </p>
      <p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          postMessage
        </a>{' '}
        (which can be called with{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>
          window.origin
        </span>
        ) is a very high-frequency API, and would be a better choice than opting
        for <span style={{ fontWeight: '400' }}>setTimeout</span> (a throttled
        API) – and the results of this{' '}
        <a
          href="https://jsfiddle.net/jib1/y1e4rg0d/"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          postMessage example
        </a>{' '}
        from{' '}
        <a
          href="https://twitter.com/jibrewery"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          Jan-Ivar Bruaroey
        </a>{' '}
        shows that the API will execute around 100-140 times more frequently
        than{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>
          setTimeout(0)
        </span>
        . Still though, both of these APIs add work to the current process (even
        if they are scheduled for the next tick).
      </p>
      <p>
        So, how are we going to get around this and use existing work instead?
        The answer is{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"
          style={{ padding: '0', fontWeight: '600', color: '#73498d' }}
        >
          requestAnimationFrame
        </a>
        .
      </p>
      <img
        src={eventSampler}
        alt="Calling requestAnimationFrame recursively looks dangerous, but this is async recursion under the hood – so you won't blow the stack."
        style={{ borderStyle: 'none', marginTop: '20px', width: '600px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        Looks dangerous, but this is async recursion under the hood – so you won
        {"'"}t blow the stack.
      </i>
      <p>
        Using{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>
          requestAnimationFrame
        </span>
        ,{' '}
        <span style={{ fontWeight: '400', color: '#2b87ab' }}>
          captureSamples
        </span>{' '}
        now gets called according to the refresh rate of the browser, which
        should just about always be happening at a dependable 60 times per
        second (for more detail, read
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"
          style={{ padding: '0', fontWeight: '500' }}
        >
          {' '}
          here
        </a>
        ).
      </p>
      <img
        src={rafAccuracy}
        alt="requestAnimationFrame latency"
        style={{ borderStyle: 'none', marginTop: '20px', width: '400px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px',
          width: '80%'
        }}
      >
        16ms intervals now fire with about 70% accuracy, and the remaining
        intervals are only off by around{' '}
        <span style={{ textDecoration: 'underline' }}>1ms</span> (that{"'"}s
        272ms less than the current{' '}
        <a
          href="https://humanbenchmark.com/tests/reactiontime"
          style={{ padding: '0', fontWeight: '500' }}
        >
          average human reaction time
        </a>
        )
      </i>
      <p>
        This will end up generating a new sample about every 16 milliseconds,
        and if the same method is used for playback – the events will be
        performed again at intervals very close (or close enough) to the rate
        they were sampled (and are perceived as identical).
      </p>
      <p>
        Another key factor here is that{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>
          requestAnimationFrame
        </span>{' '}
        uses the same{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          DOMHighResTimeStamp{' '}
        </a>
        that both the Web Audio context and timestamp retrieval APIs like
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Performance/now"
          style={{ padding: '0', fontWeight: '500', color: '#73498d' }}
        >
          {' '}
          performance.now
        </a>{' '}
        use (they all return double precision, floating point numbers). This is
        going to be{' '}
        <span style={{ textDecoration: 'underline' }}>required</span> for
        accuracy when making offset-oriented synchronization calculations for
        the timing between clients.
      </p>
      <p>
        Now that I have{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>
          requestAnimationFrame
        </span>{' '}
        humming along smoothly, I can confidently run my time check (
        <span style={{ fontWeight: '400' }}>isFiveSeconds</span>), offset the
        calculation for each MIDI packet producing event (aka, a {"'"}note{"'"}
        ), and rely on my latching method in the sample capture function{' '}
        <span style={{ color: '#656565' }}>
          (more on offsets coming in the next section)
        </span>
        .
      </p>
      <img
        src={eventSample}
        alt="An accurate, and dependable event sampler"
        style={{ borderStyle: 'none', marginTop: '20px', width: '750px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        A more dependable and accurate event sampler
      </i>
      <p style={{ color: '#656565' }}>
        <span style={{ fontWeight: '600' }}>Note:</span> though based on a
        <span style={{ fontWeight: '400' }}> DOMHighResTimeStamp</span>, the{' '}
        <span style={{ fontWeight: '400' }}>contextTime</span> returned by the
        <span style={{ fontWeight: '400' }}> audioContext</span>s
        <span style={{ fontWeight: '400' }}> getOutputTimestamp</span> API
        returns time in{' '}
        <span style={{ textDecoration: 'underline' }}>seconds</span> rather than
        milliseconds and must be multiplied or divided by 1000 accordingly.
        ¯\_(ツ)_/¯
      </p>
      <p>
        Being able to hook into and rely on a process as fundamental as the
        browser{"'"}s refresh rate with{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>
          requestAnimationFrame
        </span>{' '}
        has enabled a much more rock solid mechanism for event sampling.
      </p>
      <p>
        Now that I{"'"}ve verified that this is going to work, let{"'"}s pull
        back the curtain a bit and recognize that this isn{"'"}t actually
        sampling anymore. What I{"'"}ve done is to generate events based on MIDI
        triggers (keypresses, MIDI device output, etc). I{"'"}ve had two loops
        until now, and it turns out that the playback loop may be the only one
        that{"'"}s necessary as long as the event times and offsets are captured
        and sent every 5 seconds. The events only really need to be recorded
        when they happen, rather than within a stream of time samples that
        contains both events and non-events.
      </p>
      <p>
        By calculating offsets, this same result could even potentially be
        achieved using a timer API like{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>setInterval</span>{' '}
        or{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>setTimeout</span>.
        These accuracy tests show that no matter how you schedule an event in
        JavaScript, you have to accept that there will always be variants and
        drift in your callback time. You can{"'"}t expect that the delay will be
        a true and accurate representation of the time you assigned to it, but
        you can anticipate and account for it in order to schedule events at
        times you can rely on.
      </p>
      <h2 style={{ marginTop: '30px' }}>
        Problem two: Precise sample playback
      </h2>
      <p>
        As was learned earlier, attempting to correlate two clocks between the
        client and the server by using{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>setInterval</span>{' '}
        to schedule the playback was never going to work. But even with{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>
          requestAnimationFrame
        </span>{' '}
        in play and offsets taken into account, some nuances have to be dealt
        with.
      </p>
      <h3 style={{ marginTop: '30px' }}>What didn{"'"}t work?</h3>
      <p>
        When you{"'"}re new to an API and you start porting over examples from
        common reference sources, it{"'"}s easy to introduce unnecessary calls
        just because you{"'"}re presented with them as an option.
      </p>
      <img
        src={firstChunkPlayback}
        alt="Lesson: don't just use API calls that look necessary without considering what you actually need in your scope first."
        style={{ borderStyle: 'none', marginTop: '20px', width: '700px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px',
          width: '90%'
        }}
      >
        <span style={{ fontWeight: '400' }}>Lesson:</span> don{"'"}t just use
        API calls that look necessary without considering what you actually need
        in your scope first.
      </i>
      <p>
        Here{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>
          requestAnimationFrame
        </span>{' '}
        returns an ID that can be used for canceling an animation frame request
        that was already scheduled, but is it needed here? No. The call to{' '}
        <span style={{ fontWeight: '400', color: '#73498d' }}>
          window.cancelAnimationFrame
        </span>
        , serves no purpose in this case because no request is currently
        scheduled there.
      </p>
      <p>
        Despite that, the most important question to answer here in this example
        is: what{"'"}s the best way to calculate the duration of each event for
        playback? In this iteration, an attempt to calculate the time between
        each sample was made in order to play them back at those exact intervals
        (using{' '}
        <span style={{ fontWeight: '400', color: '#2b87ab' }}>
          data[i].noteDuration
        </span>
        ). Though, there{"'"}s much more room for error here than if the
        question at hand is answered through a different approach.
      </p>
      <h3 style={{ marginTop: '30px' }}>What worked?</h3>
      <p>
        Rather than handling event playback timing by the interval (like a
        sample), the better way to do this is by capturing the chunk{"'"}s
        offset once per data received (eg. a chunk of captured events) based on
        the current context time, and the first event that{"'"}s about to be
        played back. This way no event fidelity is lost for any client, and each
        one is lined up to be played back exactly as it was originally performed
        (as far as humans can tell).
      </p>
      <img
        src={eventSamplePlayback}
        alt="Accurate and dependable sample playback"
        style={{ borderStyle: 'none', marginTop: '20px', width: '900px' }}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        Accurate and dependable sample playback
      </i>
      <p>
        Having an accurate event sampling (or, capturing) and playback method
        now ensures that any notes played by one user can be rendered and heard
        by the others just as they were originally played – but that only gets
        us half way to making music{' '}
        <span style={{ textDecoration: 'underline' }}>together</span>. How do
        you accurately synchronize the playback across browsers for every player
        so they can actually play <i style={{ animation: 'none' }}>together</i>?
      </p>
      <p>
        So far, what{"'"}s been made is a vital piece of orchestration to
        accompany a relay server – and that server will be the second half of
        the answer to this question. We{"'"}ll walk through it in depth in{' '}
        <span style={{ textDecoration: 'underline' }}>part two</span> of this
        series:{' '}
        <i
          style={{
            animation: 'none',
            fontWeight: '500',
            textTransform: 'none',
            color: '#2b87ab'
          }}
        >
          Distributed event synchronization with Vanilla JavaScript and
          WebSockets.
        </i>
      </p>
      <p style={{ marginTop: '15px', fontSize: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>✏️</div>
        <i style={{ animation: 'none', color: '#747474' }}>
          {' '}
          March 30th, 2022{' '}
        </i>
      </p>
      <p style={{ fontSize: '15px', color: '#747474' }}>
        <b>*</b> Special thanks to Nick Niemeir, for the early mornings and late
        night fun (via Amsterdam / Portland) as we got this working together!
      </p>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '15px'
      }}
    >
      <Nav />
    </div>
    <Links />
  </Layout>
)

export default Blog
