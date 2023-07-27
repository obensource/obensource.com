import React from 'react'
import Layout from '../../components/layout'
import Nav from '../../components/nav'
import Links from '../../components/links'
import Seo from '../../components/seo'
import migrate1 from './assets/migrate-1.mp4'
import migrate2 from './assets/migrate-2.png'
import migrate3 from './assets/migrate-3.png'
import migrate4 from './assets/migrate-4.png'
import migrate5 from './assets/migrate-5.png'
import migrate6 from './assets/migrate-6.png'
import migrate7 from './assets/migrate-7.png'
import migrate8 from './assets/migrate-8.png'
import migrate9 from './assets/migrate-9.png'
import migrate10 from './assets/migrate-10.png'
import migrate11 from './assets/migrate-11.png'
import migrate12 from './assets/migrate-12.png'
import migrate13 from './assets/migrate-13.png'
import migrate14 from './assets/migrate-14.png'
import migrate15 from './assets/migrate-15.png'

const WhenItsTimeToMigrateAwayFromCommonJS = () => (
  <Layout>
    <Seo title="HTTPS for local developement" />
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
        style={{ borderRadius: '30px' }}
        width="85%"
        src={migrate1}
        loop="true"
        autoPlay="true"
        controls
        muted
      />
      <p style={{ marginTop: '100px' }}>
        I remember when the ‘tiny module’ revolution (a revitalization of the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Unix_philosophy"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Unix philosophy
        </a>
        ) came en vogue in JavaScript circles while Node.js + npm were becoming
        popular for the first time.
      </p>
      <p>
        This revolution was possible because the community received and adopted{' '}
        <a
          href="https://en.wikipedia.org/wiki/CommonJS"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          CommonJS
        </a>{' '}
        (aka CJS) as the single way to bundle modules together outside of the
        browser. It was a powerful feeling to be able to ‘require’ any library
        anywhere in a browser-decoupled JS runtime like node, get it all wrapped
        together in a giant{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/IIFE"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          IIFE
        </a>{' '}
        by{' '}
        <a
          href="https://browserify.org/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Browserify
        </a>{' '}
        – and then immediately be on your way to running any script, tool, or
        app you want, on any system or browser runtime, with just JavaScript.
      </p>
      <img
        src={migrate2}
        alt="substack browserify wizard"
        style={{
          borderStyle: 'none',
          margin: '50px 0px 40px 100px',
          width: '350px'
        }}
      />
      <i
        style={{
          width: '60%',
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px'
        }}
      >
        Like nearly everything <b>Substack</b> makes: Browserify was a work of
        art at its inception, and made building powerful node apps easy, fast,
        and fun!
      </i>
      <i
        style={{
          fontSize: '14px',
          color: '#747474',
          animation: 'none',
          textTransform: 'none',
          marginBottom: '50px'
        }}
      >
        (Art by{' '}
        <a
          href="https://substack.net/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Substack
        </a>
        )
      </i>
      <p>
        Fast forward to the early 2020s, and the tiny-module driven JavaScript
        community has seen{' '}
        <a
          href="https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          severe supply chain issues
        </a>
        ,{' '}
        <a
          href="https://snyk.io/blog/why-did-is-promise-happen-and-what-can-we-learn-from-it/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          migration vulnerabilities
        </a>{' '}
        – and is currently experiencing something between a watershed moment,
        and a{' '}
        <a
          href="https://news.ycombinator.com/item?id=15708136"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Python 2 vs 3
        </a>{' '}
        type of schism over adopting{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          ECMAScript Modules
        </a>{' '}
        (ES modules, ESM) as its default module system. Since ESM was driven
        into standardization by{' '}
        <a
          href="https://tc39.es/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          TC39
        </a>
        , the{' '}
        <a
          href="https://whatwg.org/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          WHATWG
        </a>
        , and some of the JS community (while not receiving support from
        others), it remains both a permanent way of how we{"'"}re going to be
        building JavaScript, and something that many developers will continue to
        script their way around.
      </p>
      <p>
        On the surface it may seem like this change mostly introduces a new
        syntactic sugar into node and across the JS landscape, but the truth is
        that under the hood: the Web ecosystem has been maturing towards both
        asynchronicity, and the interoperability between running JavaScript in
        and out of the browser – to the point that it’s become necessary to
        revise the way we build and bundle our libraries so they can support
        this evolutionary stage, and lessen the division between the two arenas.
      </p>
      <h2 style={{ padding: '0', marginTop: '30px' }}>
        The Playground is Changing
      </h2>
      <p>
        At this juncture for JavaScript, CommonJS has been a magical one-trick
        pony that{"'"}s holding on like a frog in hot water. This environment
        really began to heat up when differentiating between <b>.cjs</b>,{' '}
        <b>.js</b>, and <b>.mjs</b> file extensions became a runtime
        requirement, given that they began supporting the (
        <a
          href="https://tc39.es/ecma262/#sec-hostresolveimportedmodule"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          recently specified
        </a>
        ) way JS module loaders differentiate between CommonJS-adherent, and
        ESM-adherent JavaScript modules:
      </p>
      <p>
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          .cjs
        </span>
        : a CommonJS module designation.
      </p>
      <p>
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          .js
        </span>
        : Interpreted as an ES module.
      </p>
      <p>
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          .mjs
        </span>
        : an ES module designation.
      </p>
      <p>
        This is central to the package resolver algorithm that was implemented
        in both node and browsers. These loaders check to see if the script URL
        that was passed in ended in <b>.cjs</b>, <b>.js</b>, <b>.mjs</b>, etc –
        as is now described here in the node spec:
      </p>
      <img
        src={migrate3}
        alt="ESM File Format API"
        style={{
          borderStyle: 'none',
          margin: '10px 0px 20px',
          width: '550px'
        }}
      />
      <p>
        This new requirement of designating more extensions other than{' '}
        <b>.js</b> brought the hard division between these module system options
        to the surface – adding more complexity to an area that had previously
        been entirely simple.
      </p>
      <p>
        One of the most significant factors supporting the ongoing decision to{' '}
        <a
          href="https://gist.github.com/jkrems/769a8cd8806f7f57903b641c74b5f08a"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          slowly, and fundamentally
        </a>{' '}
        change how JS module systems work (with some of the more impactful
        milestones going back to{' '}
        <a
          href="https://github.com/lukehoban/es6features#modules"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          ES6
        </a>{' '}
        when import and export statements were added to JS) is that, at its
        root: CommonJS modules come together synchronously. The module system
        loads, instantiates, and evaluates them as an untouchable set of
        enumerated operations before they’re funneled together into a single
        bundle whenever a build script runs – which is then loaded by the
        runtime environment for execution, and that’s that. That’s what you’ve
        got to work with, and there’s no flexibility within the module system’s
        steps (no callbacks or promises), or around the order they execute, and
        it’s not something that the browser can tap into.
      </p>
      <p>
        ES module systems however, expose these operations (loading,
        instantiating, evaluating) to any JS runtime that supports{' '}
        <a
          href="https://tc39.es/ecma262/#sec-modules"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          the spec
        </a>
        , and each can be independently run by a loader as needed (like the one
        you use via HTML when adding a
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          {'<script>'}
        </span>{' '}
        tag).
      </p>
      <p>
        For the Web, ESM support is a long-term win since module loading isn’t
        tied to just node anymore. Letting the browser use and manipulate the
        module system itself has definitely thinned the line for compatibility
        between the independent JS runtimes (node, Deno, etc) and every common
        browser. The community knows that using a default module system that
        isn’t natively interoperable between the two isn’t ideal (CommonJS
        modules have always had to be transpiled and bundled first before being
        loaded into the DOM), no matter how painful it may be to migrate to a
        better solution.
      </p>
      <p>
        Now that just about every browser supports ES modules, loading an
        external module (independently of bundle files) is as easy as pointing a{' '}
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          {'<script>'}
        </span>{' '}
        tag at it, as long as you tell the script loader it’s an ES module by
        adding the
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          {'type="module"'}
        </span>{' '}
        attribute.
      </p>
      <p style={{ color: 'rgb(116, 116, 116)', fontStyle: 'italic' }}>
        If you’re new to ESM, it’s worth mentioning that the system{' '}
        <a
          href="https://en.wikipedia.org/wiki/Source-to-source_compiler"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          transpiles
        </a>{' '}
        JavaScript differently than CommonJS: it uses ‘strict’ mode by default,
        and has different scoping rules. For example,{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          this
        </span>{' '}
        isn’t a reference to the global object anymore. All of this breaks
        backwards compatibility for Web apps built with CommonJS, and earlier
        versions of node.
      </p>
      <h2 style={{ padding: '0', marginTop: '30px' }}>
        Warning Signs on the Road Ahead
      </h2>
      <p>
        The road forward to ESM has been long, tedious, and fragmented since
        module bundling isn’t a single solution that’s tied to just node, and
        there are many more opinions driving its future now.
      </p>
      <p>
        What we can count on though, is that we’re going to be using import and
        export statements for the foreseeable future – and if you’re still
        supporting or building a Web app with CommonJS your time is running out.
        You’re going to hit a wall soon that you just won’t be able to get over
        because CommonJS is continually losing support by popular and commonly
        used JS libraries (for example:{' '}
        <a
          href="https://devclass.com/2021/06/15/d3-7-0-goes-all-in-on-ecmascript-modules/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          D3
        </a>
        ,{' '}
        <a
          href="https://formidable.com/blog/2022/victory-esm/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Victory
        </a>
        , etc).
      </p>
      <p>
        My progress was halted at the juncture of using location visualization
        libraries which rely on D3 for an app I’ve been building for a while
        now. The state of my dependencies were so interwoven that I couldn’t
        just declare module bankruptcy and start fresh (which would’ve taken an
        unnecessarily exorbitant amount of time that I don’t have given the size
        of the project).
      </p>
      <p>
        No matter what your hot take is about the migration away from CommonJS
        (there’s{' '}
        <a
          href="https://twitter.com/matteocollina/status/1557027210032201736"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          a
        </a>{' '}
        <a
          href="https://github.com/sindresorhus/meta/discussions/15"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          whole{' '}
        </a>
        <a
          href="https://twitter.com/MicheleRivaCode/status/1560250625941815296?t=6nY9tZaQbMaz14LkDwzYgQ&s=31"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          lot{' '}
        </a>
        of{' '}
        <a
          href="https://twitter.com/mafintosh/status/1560347223526985730"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          them
        </a>
        ), it’s now something that must be done if you want to build a new app
        with modern JS libraries, or to evolve your old one.
      </p>
      <h2 style={{ padding: '0', marginTop: '30px' }}>
        When it comes Time to Migrate
      </h2>
      <p>
        There’s an onslaught of new bundlers currently available for ESM, but
        not all seem to be equal in terms of making it simple to migrate an old
        app from a CommonJS bundler like Browserify to an ESM bundler like{' '}
        <a
          href="https://rollupjs.org/guide/en/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          rollup
        </a>
        ,{' '}
        <a
          href="https://parceljs.org/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Parcel
        </a>
        ,{' '}
        <a
          href="https://bun.sh/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Bun
        </a>
        ,{' '}
        <a
          href="https://vitejs.dev/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Vite
        </a>
        ,{' '}
        <a
          href="https://www.snowpack.dev/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Snowpack
        </a>
        , or{' '}
        <a
          href="https://esbuild.github.io/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          esbuild
        </a>
        .
      </p>
      <p>
        Resources for building a new app with these bundlers are abundant, but
        there’s not a lot to draw from regarding the experience of a migration
        between CommonJS and ESM. Because of this, my migration story is mostly
        one of swapping module systems in and out of my app in the dark, while
        trying to find a configuration that worked and wasn’t brittle. From here
        on out I’ll cover my most significant discoveries, complexity pitfalls,
        and how you might get a bundler migration over the finish line more
        easily than I did.
      </p>
      <h2 style={{ padding: '0', marginTop: '30px' }}>
        Surveying the Ecosystem
      </h2>
      <p>
        Currently, there’s not a lot of guidance around what to consider when
        selecting a bundler for an ESM migration.
      </p>
      <p>
        When there’s no clear path, I typically{' '}
        <a
          href="https://twitter.com/obensource/status/1534157722584682497"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          poll opinions
        </a>{' '}
        from both my immediate colleagues*, and through as large a swath of
        experienced developers as I can get at the watercooler of twitter.
      </p>
      <p>
        With the bundler leads I generated by asking around, I proceeded to try
        rollup (a mature project), Parcel (well loved, with a promise of ‘no
        configuration’), and then esbuild (widely used, and strongly endorsed) –
        in that order.
      </p>
      <h2 style={{ padding: '0', marginTop: '30px' }}>Initial Preparations</h2>
      <p>
        There’s a handful of preparatory steps that need to be addressed before
        you try to uninstall the CJS bundler package, and then attempt to
        install {'&'} configure the ESM one.
      </p>
      <p>
        <span style={{ textDecoration: 'underline' }}>In short</span>{' '}
        <span style={{ color: 'rgb(116, 116, 116)' }}>
          (I{"'"}ll expand in detail momentarily)
        </span>
        {', '}
        <span style={{ textDecoration: 'underline' }}>you{"'"}ll need to</span>:
      </p>
      <p style={{ width: '70%' }}>
        <p>
          ▹ Tell your linter you’re moving over to ESM so you’re not continually
          annoyed with unnecessary error messages from the get go.
        </p>
        <p>
          ▹ Update your package.json so that npm knows this is an ESM project.
        </p>
        <p>
          ▹ Update any bundle imports in your index.html file (and/or any
          subsequent HTML files that use it) so the browser knows that it’s
          loading ESM modules.
        </p>
        <p>
          ▹ Change all of your scripts (in node) from using require&
          module.exports statements, to import & export statements.
        </p>
        <p>
          ▹ Address any immediately obvious scoping issues that your linter
          identifies.
        </p>
        <p>
          ▹ Address any immediately obvious scoping issues that your linter
          identifies.
        </p>
        <p
          style={{
            color: 'rgb(116, 116, 116)',
            fontStyle: 'italic',
            fontWeight: '300',
            marginBottom: '30px'
          }}
        >
          Changing how your scripts import and export modules can really be done
          at any time, I just prefer to do it before installing the new bundler
          just in case there’s a ‘just works’ moment (which happens very rarely,
          but they’re definitely fun when they do).
        </p>
      </p>
      <p>
        Now let’s break this down into something a little more granular and
        helpful.
      </p>
      <h4 style={{ padding: '0px', marginTop: '30px' }}>Linting</h4>
      <img
        src={migrate4}
        alt="Linting Error"
        style={{
          borderStyle: 'none',
          marginBottom: '30px',
          width: '750px'
        }}
      />
      <i
        style={{
          animation: '0s ease 0s 1 normal none running none',
          color: 'rgb(116, 116, 116)',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px',
          marginBottom: '50px'
        }}
      >
        This type of warning will likely be the first glaring issue you’ll
        encounter at the onset of your migration.
      </i>
      <p>
        To support ESM, your linter will need to know that it’s parsing it. You
        can do that by declaring the source type to be ‘module’ in your config
        (so it becomes enabled). If you’re using{' '}
        <a
          href="https://eslint.org/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          ESLint
        </a>
        , it’s going to look something like this in your <b>.eslintrc.json</b>{' '}
        (or similar for whatever format you use for eslint):
      </p>
      <img
        src={migrate5}
        alt="eslint rc file"
        style={{
          borderStyle: 'none',
          marginTop: '30px',
          marginBottom: '60px',
          width: '550px'
        }}
      />
      <p
        style={{
          width: '70%',
          color: 'rgb(116, 116, 116)',
          fontStyle: 'italic',
          fontWeight: '300',
          marginBottom: '30px'
        }}
      >
        The only caveats to remember with ESLint here are that it doesn’t
        support top-level await unless you’re using version 8 or greater, and
        you’ll need to enable the latest ECMA features as well (for example:{' '}
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            color: 'rgb(0, 0, 0)',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          {'"ecmaVersion": 13'}
        </span>
        ).
      </p>
      <h4 style={{ padding: '0px', marginTop: '30px' }}>
        Updating your package.json
      </h4>
      <img
        src={migrate6}
        alt="package.json"
        style={{
          borderStyle: 'none',
          marginBottom: '30px',
          width: '350px'
        }}
      />
      <p>
        Your package manager is going to need to know about the type of modules
        it’s working with, and in order to do that all you need to do is declare
        the project to be of{' '}
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          {'"type": "module"'}
        </span>{' '}
        as a first-level property in your package.json object.
      </p>
      <h4 style={{ padding: '0px', marginTop: '30px' }}>HTML Imports</h4>
      <img
        src={migrate7}
        alt="index.html"
        style={{
          borderStyle: 'none',
          marginBottom: '30px',
          width: '600px'
        }}
      />
      <p>
        Now you can let your Browser know what it’s trying to load. This is only
        a slight modification to the scripts you’ve already been loading in your{' '}
        <b>index.html</b> file (and to any other HTML files that use them).
      </p>
      <p>
        Just add{' '}
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            color: 'rgb(0, 0, 0)',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          {'type="module"'}
        </span>{' '}
        to any existing script tags (and if you’re using the <b>.mjs</b>{' '}
        extension, you’ll need to serve those files{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#aside_%E2%80%94_.mjs_versus_.js"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          using the correct MIME type
        </a>
        ), and then you’re on your way.
      </p>
      <h4 style={{ padding: '0px', marginTop: '30px' }}>
        Changing how you import {' & '} export your scripts in node
      </h4>
      <p>
        <b>Warning</b>: you’ve hit the migration checkpoint of tedium and linter
        complaints. It’s time to change every{' '}
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          require()
        </span>{' '}
        declaration in your code to an{' '}
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          import
        </span>
        , and every{' '}
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          module.exports
        </span>
        declaration to an{' '}
        <span
          style={{
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          export
        </span>
        . It’ll feel better over time as your linter yells at you less and less
        though, just hang in there.
      </p>
      <h4 style={{ padding: '0px', marginTop: '30px' }}>
        Address Scoping Issues
      </h4>
      <img
        src={migrate8}
        alt="index.js"
        style={{
          borderStyle: 'none',
          marginBottom: '40px',
          width: '750px'
        }}
      />
      <i
        style={{
          width: '70%',
          marginBottom: '50px',
          animation: '0s ease 0s 1 normal none running none',
          color: 'rgb(116, 116, 116)',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px'
        }}
      >
        This is definitely not as clean as just having{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          __dirname
        </span>{' '}
        available as a global object, but this is just where we’re at in the
        current state of affairs for JS bundling. ¯\_(ツ)_/¯
      </i>
      <p>
        Remember how I said that ESM fundamentally changes the scope of your
        JavaScript, global variables, etc? Well, node will make that immediately
        apparent for you. You’ll see right away that node’s global objects (for
        example:{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          process
        </span>
        , and{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          __dirname
        </span>
        ) aren’t recognized anymore. There are a number of ways to address this,
        but the easiest route towards just getting the migration done will
        likely be to import whichever node core module you need to accomplish
        the same task (like getting the local dirname).
      </p>
      <h4 style={{ padding: '0px', marginTop: '30px' }}>
        Uninstalling the CJS Bundler
      </h4>
      <p>
        Congratulations! You’ve made it to the last step of preparation before
        you turn on the ESM firehose.
      </p>
      <p>It’s time to uninstall your CJS bundler, and move on.</p>
      <p>In my case, I’ve used Browserify – so it looks like this:</p>
      <p
        style={{
          color: 'rgb(0, 0, 0)',
          marginRight: '2px',
          padding: '4px',
          background: 'rgb(239, 241, 242)',
          borderRadius: '3px'
        }}
      >
        npm uninstall browserify
      </p>
      <p
        style={{
          color: 'rgb(116, 116, 116)',
          fontStyle: 'italic',
          fontWeight: '300',
          marginBottom: '30px'
        }}
      >
        <b>Note</b>: If you’re running npm version 7 (or earlier) you’ll need to
        add a{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            bordeRradius: '3px'
          }}
        >
          -D
        </span>{' '}
        or{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            bordeRradius: '3px'
          }}
        >
          --save-devflag
        </span>{' '}
        to the uninstall command, so browserify and other unneeded dev
        dependencies are removed from your project.
      </p>
      <p>
        Fortunately, Browserify doesn’t really leave any artifacts lying around
        other than the bundle script it generated, so you can delete that too
        before moving along if you’d like.
      </p>
      <h2 style={{ paddingTop: '60px' }}>
        Installing and configuring your new ESM bundler
      </h2>
      <p>Now we get to the heart of what we want to accomplish here.</p>
      <p>
        First, let’s recall how this was done before we change it up. Here was
        the Browserify way:
      </p>
      <p
        style={{
          color: 'rgb(0, 0, 0)',
          marginRight: '2px',
          padding: '4px',
          background: 'rgb(239, 241, 242)',
          borderRadius: '3px'
        }}
      >
        browserify -t brfs src/public/js/app.js {' > '} src/public/js/bundle.js
      </p>
      <p style={{ fontStyle: 'italic', color: 'rgb(116, 116, 116)' }}>
        The{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          -t
        </span>{' '}
        and{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          brfs
        </span>{' '}
        flags invoke a transform module on the top-level file that applies some
        pre-import transformations on it so that it’s easier to load static
        assets into the bundle, and more easy to transpile the source into
        another flavor of JavaScript, or language. If you’re interested in how
        these work, you can read more about that here.
      </p>
      <p>
        Now the mission ahead is to choose a bundler, replace this bundling
        command that lives in your package.json, and then properly configure it
        (which will differ with each bundler since they’re all implemented
        differently).
      </p>
      <p>
        For my migration, I first reached for{' '}
        <span style={{ textDecoration: 'underline' }}>rollup.js</span>.
      </p>
      <h3 style={{ paddingTop: '30px' }}>Rollup.js</h3>
      <p>
        After installation, the first move to make was to rewrite my{' '}
        <b>npm build</b>
        script in the package.json. This is where I pointed rollup at my app’s
        top-level source file, specified where the bundle needs to go, and then
        how the bundle should be formatted:
      </p>
      <p>
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          {`"build": "rollup src/public/js/app.js --file src/public/js/bundle.js
        --format iife"`}
        </span>
      </p>
      <p>
        Browserify transformed the entire bundle into one big giant IIFE, so
        instructing the bundler to use that same format seemed preferable.
      </p>
      <p>
        In my case, I had gone against the better judgment that I outlined above
        of just completely migrating to ESM <b>import</b> and <b>export</b>{' '}
        statements first, thinking that I could temporarily get by with a{' '}
        <a
          href="https://rollupjs.org/guide/en/#compatibility"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          config that transpiles my ESM modules back to CJS
        </a>
        , but this seemed to be a brittle option and led me to a broken front
        end because the modules weren’t properly loading.
      </p>
      <p>
        I then threw my hands up with that (this brittle duct tape fix did not
        deserve any more time), and just followed through with the full syntax
        migration.
      </p>
      <p>Then I began to see this external dependency issue:</p>
      <img
        src={migrate9}
        alt="dependency error"
        style={{
          borderStyle: 'none',
          marginTop: '15px',
          marginBottom: '40px',
          width: '800px'
        }}
      />
      <i
        style={{
          marginBottom: '50px',
          animation: '0s ease 0s 1 normal none running none',
          color: 'rgb(116, 116, 116)',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px'
        }}
      >
        In all my days of importing and exporting modules, I’ve never seen an
        error quite like this.
      </i>
      <p>
        Given that rollup was nice enough to point me to their documentation
        regarding this, I came to discover something hair-bendingly awkward
        about this module system: you are required to manually specify external
        dependencies in your bundler config, or else they won’t be included in
        your bundle.
      </p>
      <img
        src={migrate10}
        alt="rollup documentation"
        style={{
          borderStyle: 'none',
          marginTop: '15px',
          marginBottom: '40px',
          width: '700px'
        }}
      />
      <i
        style={{
          marginBottom: '50px',
          animation: '0s ease 0s 1 normal none running none',
          color: 'rgb(116, 116, 116)',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px'
        }}
      >
        From rollup’s documentation. Absolutely maddening.
      </i>
      <p>
        I then attempted to manifest the precise configuration (incantation,
        rather) in my <b>rollup.config.js</b> file that I might need to get this
        working.
      </p>
      <img
        src={migrate11}
        alt="rollup documentation"
        style={{
          borderStyle: 'none',
          marginTop: '15px',
          marginBottom: '40px',
          width: '900px'
        }}
      />
      <i
        style={{
          marginBottom: '50px',
          animation: '0s ease 0s 1 normal none running none',
          color: 'rgb(116, 116, 116)',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px'
        }}
      >
        By design, I find the rollup config to be fairly confusing.
      </i>
      <p>
        Specifying the correct properties here proved to be unintuitive. For
        example: I assumed that adding module names to an{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          external
        </span>{' '}
        property would let rollup know that it needs to include those modules in
        the bundle. However, rollup behaves in the exact opposite manner – and
        the purpose of that property is to{' '}
        <span style={{ textDecoration: 'underline' }}>exclude</span> any named
        modules from the bundle. So what I had actually done here was to
        instruct rollup to attach these modules to the window object, and then
        exclude them from the bundle (hence, the{' '}
        <i
          style={{
            animation: '0s ease 0s 1 normal none running none',
            color: 'rgb(116, 116, 116)'
          }}
        >
          ‘missing global names’
        </i>{' '}
        and{' '}
        <i
          style={{
            animation: '0s ease 0s 1 normal none running none',
            color: 'rgb(116, 116, 116)'
          }}
        >
          ‘guessing…’
        </i>{' '}
        errors seen earlier).
      </p>
      <p>
        I then removed the{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          external
        </span>{' '}
        property, assuming that leaving the modules specified in the{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          globals
        </span>{' '}
        property might bring it together since the purpose of that field is to
        attach them to the global window. Still though, I was left with
        unresolved dependencies and global scope issues.
      </p>
      <img
        src={migrate12}
        alt="global is not defined reference error"
        style={{
          borderStyle: 'none',
          marginTop: '15px',
          marginBottom: '40px',
          width: '550px'
        }}
      />
      <p>
        My last ditch effort was to reference a colleague’s{' '}
        <a
          href="https://github.com/bcomnes/GitMutual/blob/master/rollup.config.js"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          battle-tested rollup config
        </a>
        , but no additions or reductions made any real difference.
      </p>
      <p>
        At this point, I realized this bundler is just not the way to go if I’m
        going to be building for the Web – and after getting a headache from my
        experience with its very config heavy requirements, I then bought into
        the promise of the toutedly ‘0 configuration bundler’ (boldly declared
        on{' '}
        <a
          href="https://parceljs.org/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          their site
        </a>
        ): <span style={{ textDecoration: 'underline' }}>Parcel</span>.
      </p>
      <h3 style={{ paddingTop: '30px' }}>Parcel</h3>
      <p>
        Parcel came with the expectation that it might ‘just work’, and it seems
        to be a favorite among front end devs at the moment – but these
        wonderful endorsements come from individuals building projects that
        started fresh with Parcel, rather than having performed a migration to
        it.
      </p>
      <p>
        There’s an old sentiment among Web developers that goes something like
        this: The more magic you get up front, the less you’ll be able to know
        what’s going on, and it’ll destroy your ability to fix anything.
      </p>
      <p>
        This is what I found to be true about Parcel in the case of a migration.
        Running this bundler is definitely simple enough (
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          parcel build
        </span>
        ), and it has very beautifully descriptive and accurate CLI error
        messages – but it abstracts away a little too much logging from the
        runtime to know what it’s trying to do with the input and output files.
      </p>
      <p>
        Seeing that my UI was loading, but the modules weren’t, I soon found out
        that when migrating: the ‘zero configuration’ bundler needed some basic
        configuration.
      </p>
      <p>
        Parcel allows you to{' '}
        <a
          href="https://parceljs.org/features/targets/#package.json%23targets.*.source"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          specify build targets
        </a>{' '}
        for both the front end and back end – so I tried being explicit with
        that.
      </p>
      <img
        src={migrate13}
        alt="build target specification in package.json"
        style={{
          borderStyle: 'none',
          marginTop: '15px',
          marginBottom: '40px',
          width: '350px'
        }}
      />
      <i
        style={{
          marginBottom: '50px',
          animation: '0s ease 0s 1 normal none running none',
          color: 'rgb(116, 116, 116)',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px'
        }}
      >
        {' '}
        Looks nice though!
      </i>
      <p>
        Unfortunately, this didn’t resolve my issue, and I couldn’t really tell
        why because by all accounts it seemed like the bundler was configured
        correctly – but it was swallowing errors before they made it to the
        browser.
      </p>
      <p>
        Tired of feeling the magic that didn’t really get me to where I wanted
        to be, I decided to move on again to a new bundler.
      </p>
      <p>
        As I was removing Parcel from my project though, I noticed a very
        populated new directory called{' '}
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          .parcel-cache
        </span>{' '}
        (an artifact from Parcel’s way of making rebuild times faster).
      </p>
      <img
        src={migrate14}
        alt="build target specification in package.json"
        style={{
          borderStyle: 'none',
          marginTop: '15px',
          marginBottom: '40px',
          width: '100%'
        }}
      />
      <i
        style={{
          marginBottom: '50px',
          animation: '0s ease 0s 1 normal none running none',
          color: 'rgb(116, 116, 116)',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px'
        }}
      >
        {' '}
        Watch out for artifact dumping bundlers!
      </i>
      <p>
        The next tool I reached for was recommended by some of my closest
        colleagues, who say they use it exclusively now:{' '}
        <span style={{ textDecoration: 'underline' }}>esbuild</span>.
      </p>
      <h3 style={{ paddingTop: '30px' }}>ESBuild</h3>
      <p>
        esbuild is a Web-first bundler, so I came in with high hopes for this
        one.
      </p>
      <p>
        After installation, I added the build script to my <b>package.json</b>:
      </p>
      <p>
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          esbuild src/public/js/app.js --bundle
          --outfile=src/public/js/bundle.js
        </span>
      </p>
      <p>
        This loaded the modules, but came back with a scoping error for the
        global object being undefined. My errors seemed to be more verbose and
        helpful with esbuild since it provides more native browser support.
      </p>
      <p>
        Given the error, I quickly found out that I could{' '}
        <a
          href="https://github.com/evanw/esbuild/issues/73#issuecomment-616859952"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          specify the global object directly
        </a>{' '}
        in my build script.
      </p>
      <img
        src={migrate15}
        alt="esbuild build script"
        style={{
          borderStyle: 'none',
          marginTop: '15px',
          marginBottom: '40px',
          width: '100%'
        }}
      />
      <i
        style={{
          marginBottom: '50px',
          animation: '0s ease 0s 1 normal none running none',
          color: 'rgb(116, 116, 116)',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '16px'
        }}
      >
        {' '}
        Attaching the window to the global object in the build script with the
        define flag (
        <span
          style={{
            color: 'rgb(0, 0, 0)',
            marginRight: '2px',
            padding: '4px',
            background: 'rgb(239, 241, 242)',
            borderRadius: '3px'
          }}
        >
          --define:global=window
        </span>
        )
      </i>
      <p>
        With that, <span style={{ fontStyle: 'italic' }}>it worked!</span> Now
        there was no perceivable difference between this, and the way I had
        previously built the app – and I was on my way to using ESM-only tools
        like D3.
      </p>
      <p>
        Being that esbuild is a minimal configuration builder that’s made with
        building for the browser environment in mind – it fit beautifully for a
        migration to ESM like this. It operates similarly to how Browserify
        does, and allows you to just ‘set it and forget it’.
      </p>
      <h2 style={{ paddingTop: '60px' }}>The bundler survey results are in</h2>
      <p>
        Being that <b>esbuild</b> checks all the boxes for a clean ESM migration
        if you’re: building a Web app, coming from CJS, and want to continue
        using major libraries in the JS ecosystem – I hope you reach for this
        bundler first.
      </p>
      <p style={{ marginTop: '20px', fontSize: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>✏️</div>
        <i style={{ animation: 'none', color: '#747474' }}>
          {' '}
          August 24th, 2022{' '}
        </i>
      </p>
      <p
        style={{ width: '90%', fontSize: '15px', color: 'rgb(116, 116, 116)' }}
      >
        * Special thanks to{' '}
        <a
          href="https://www.linkedin.com/in/benjamin-koltes/"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Benjamin Koltes
        </a>
        ,{' '}
        <a
          href="https://twitter.com/bcomnes"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Bret Comnes
        </a>
        , and{' '}
        <a
          href="https://twitter.com/bengl"
          style={{
            padding: '0px',
            fontWeight: '400',
            color: 'rgb(71, 101, 156)'
          }}
        >
          Bryan English
        </a>{' '}
        for deepening my understanding of: ESM, the current landscape of JS
        bundling, and how a few popular ESM build tools actually work.
      </p>
      <Nav />
      <Links />
    </div>
  </Layout>
)

export default WhenItsTimeToMigrateAwayFromCommonJS
