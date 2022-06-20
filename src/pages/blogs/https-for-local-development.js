import React from 'react'
import Layout from '../../components/layout'
import Nav from '../../components/nav'
import Links from '../../components/links'
import Seo from '../../components/seo'
import copyText from 'copy-text-to-clipboard'
import titleGif from './assets/https-for-local-dev.gif'
import getCertImg from './assets/gen-localhost-cert.png'
import loadCert from './assets/Load-cert-key-into-Server.png'
import loadCertInKeychain from './assets/mac-keys1.png'
import selectCert from './assets/mac-keys2.png'

const copyCertGenCommand = (e) => {
  const certGenCommand = `
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
`
  copyText(certGenCommand)
}

const HTTPsForLocalDev = () => (
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
      <img
        alt="Title Gif"
        src={titleGif}
        width="700px"
        style={{ border: 'none', marginTop: '20px' }}
      />
      <i
        style={{
          margin: '40px 0 80px 0',
          animation: 'none',
          color: '#747474',
          fontSize: '16px'
        }}
      >
        {'"'}There{"'"}s no place like <i>127.0.0.1</i>
        {'"'} –Unkown
      </i>
      <h2 style={{ padding: '0', marginTop: '30px' }}>
        Web API<span style={{ textTransform: 'lowercase' }}>s</span> that need a
        little more security
      </h2>
      <p>
        Some Web APIs can{"'"}t be used without a secure socket, and when you
        {"'"}re scaffolding a client and building new features on your local
        machine – it gets rather annoying when the browser locks up on
        localhost since it
        {"'"}s not running over HTTPS.
      </p>
      <p>
        I ran into this issue most recently when adding a video chat feature
        with
        <a
          href="https://github.com/feross/simple-peer"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          {' '}
          simple-peer{' '}
        </a>
        in my web app that runs over WebSockets. Simple-peer simplifies building
        WebRTC-based video chat components that hook into the browser{"'"}s
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          {' '}
          Media Devices API
        </a>
        , where you can gain access to the local system{"'"}s video and audio
        streams for sharing.
      </p>
      <p>
        Since the
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          {' '}
          getUserMedia API{' '}
        </a>
        only works in pages loaded over HTTPS, that{"'"}s a showstopper for
        development until you generate an SSL cert for your server so that it
        can be authenticated – and in this case, you{"'"}ll have to
        authenticate localhost to get back to hacking.
      </p>
      <h2 style={{ padding: '0', marginTop: '30px' }}>
        Setting up localhost for HTTPS
      </h2>
      <p>
        First, you{"'"}ll need to generate a new self-signed certificate and
        private key for localhost that you can feed to your server. One of the
        easiest ways to do this is by using the
        <a
          href="https://wiki.openssl.org/index.php/Command_Line_Utilities"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          {' '}
          openssl cli tool
        </a>
        , and running this command will create those files for you:
      </p>
      <img
        src={getCertImg}
        alt="openssl certificate generation command"
        style={{
          borderStyle: 'none',
          marginTop: '20px',
          width: '700px',
          cursor: 'pointer'
        }}
        onClick={copyCertGenCommand}
      />
      <i
        style={{
          animation: 'none',
          color: '#747474',
          fontWeight: '300',
          textTransform: 'none',
          fontSize: '14px',
          marginBottom: '50px'
        }}
      >
        (click this example to copy it to your clipboard)
      </i>
      <p>
        Next, you{"'"}ll need to add them to your server. In my case, I{"'"}m
        building a node-based project that uses a
        <a
          href="https://hapi.dev/"
          style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
        >
          {' '}
          hapi{' '}
        </a>
        server. Adding the key and cert will require using node{"'"}s core
        <a
          style={{ padding: '0', fontweight: '400', color: '#47659c' }}
          href="https://nodejs.dev/learn/the-nodejs-fs-module"
        >
          {' '}
          fs module{' '}
        </a>
        to assign the files to a
        <a
          style={{ padding: '0', fontweight: '400', color: '#47659c' }}
          href="https://wikipedia.org/wiki/Transport_Layer_Security"
        >
          {' '}
          tls{' '}
        </a>
        object that the server can use when it{"'"}s initialized:
      </p>
      <img
        src={loadCert}
        alt="Code example to load the cert and key into a hapi server"
        style={{ borderStyle: 'none', margin: '20px 0 40px 0', width: '450px' }}
      />
      <p>
        Finally, in order to make sure your browser trusts your new self-signed
        cert (which hasn{"'"}t been verified by a third party or central
        authority) you{"'"}ll need to add it to your local system as a trusted
        certificate.
      </p>
      <h2 style={{ padding: '0', marginTop: '30px' }}>
        Adding the new cert to your local machine
      </h2>
      <h3 style={{ padding: '0', marginTop: '30px' }}>
        M<span style={{ textTransform: 'lowercase' }}>ac</span>OS
      </h3>
      <p>
        Open up <b>Keychain Access</b>, and import the new cert (
        <i style={{ fontSize: '15px', animation: 'none' }}>
          File {'>'} Import Items…
        </i>
        ):
      </p>
      <img
        src={loadCertInKeychain}
        alt="Load new cert into MacOS Keychain"
        style={{ borderStyle: 'none', margin: '20px 0 40px 0', width: '450px' }}
      />
      <p>
        Then in the search bar: search for your newly imported cert called
        {"'"}localhost{"'"}, double-click on the file, expand the {"'"}Trust
        {"'"} settings, and set your system to {"'"}always trust{"'"} the
        certificate:
      </p>
      <img
        src={selectCert}
        alt="Code example to load the cert and key into a hapi server"
        style={{ borderStyle: 'none', margin: '20px 0 40px 0', width: '450px' }}
      />
      <p>
        Now reboot your server, see it serving over HTTPS, and your browser will
        trust the localhost certificate and let the app load now{' '}
        <i style={{ animation: 'none' }}>(and away you go)</i>.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '15px'
        }}
      >
        <h3 style={{ padding: '0', marginTop: '30px' }}>Windows</h3>
        <p>
          <a
            style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
            href="https://www.thewindowsclub.com/create-self-signed-ssl-certificates-in-windows-10"
          >
            Here{"'"}s a good guide
          </a>{' '}
          for adding your cert to a Windows machine.
        </p>
        <p>
          <i
            style={{
              animation: 'none',
              color: '#747474',
              fontSize: '14px',
              fontWeight: '300'
            }}
          >
            <b>Note</b>: if you{"'"}ve generated a .crt file, you{"'"}ll likely
            have to
            <a
              style={{ padding: '0', fontWeight: '400', color: '#47659c' }}
              href="https://docs.vmware.com/en/VMware-Horizon-7/7.13/horizon-scenarios-ssl-certificates/GUID-17AD1631-E6D6-4853-8D9B-8E481BE2CC68.html"
            >
              {' '}
              convert it to a PKCS#12
            </a>{' '}
            format for Windows.
          </i>
        </p>
        <h3 style={{ padding: '0', marginTop: '30px' }}>Linux</h3>
        <p>
          Here are some decent guides for locally adding self-signed certs in a
          few popular linux distributions:
        </p>
        <p>
          <a
            style={{
              padding: '0',
              fontWeight: '400',
              color: '#47659c',
              textTransform: 'none'
            }}
            href="https://ubuntu.com/server/docs/security-certificates"
          >
            Ubuntu
          </a>
        </p>
        <p>
          <a
            style={{
              padding: '0',
              fontWeight: '400',
              color: '#47659c',
              textTransform: 'none'
            }}
            href="https://www.devdungeon.com/content/how-add-trusted-ca-certificate-centosfedora"
          >
            Fedora / C<span style={{ textTransform: 'lowercase' }}>ent</span>
            OS
          </a>
        </p>
        <p>
          <a
            style={{
              padding: '0',
              fontWeight: '400',
              color: '#47659c',
              textTransform: 'none'
            }}
            href="https://www.linode.com/docs/guides/create-a-self-signed-tls-certificate-tls-debian-10/"
          >
            Debian
          </a>
        </p>
        <h2 style={{ padding: '0', marginTop: '30px' }}>
          Browser Bypass Methods
        </h2>
        <h3 style={{ padding: '0', marginTop: '30px' }}>Backdoors</h3>
        <p>
          As a leftover from an earlier era when intranet admins needed to
          easily bypass front-line system security, keystroke listeners for the
          phrases: {"'"}
          <b>thisisunsafe</b>
          {"'"} and {"'"}
          <b>badidea</b>
          {"'"} were added to chromium-based browsers – allowing users to
          sidestep the firewall{"'"}s cert-trust rules. These can be used today,
          but are {"'"}single-use{"'"} and have to be entered every time you
          request to load the app.
        </p>
        <h3 style={{ padding: '0', marginTop: '30px' }}>Firefox</h3>
        <p>
          Firefox allows you to download the cert from the browser, install it,
          and rerun the site in order to use a self-signed cert if needed.
        </p>
        <h2 style={{ padding: '0', marginTop: '30px' }}>Is this Secure?</h2>
        <p>
          <b>
            <i>Q:</i>
          </b>{' '}
          Are there any security vulnerabilities that arise from running
          localhost over HTTPS in this way?{' '}
          <b>
            <i>A:</i>
          </b>{' '}
          Only if the key you used to sign your self-signed certificates gets
          into the hands of a bad actor{' '}
          <i style={{ animation: 'none' }}>
            (eg. if you lose it, or someone you don{"'"}t trust gains access to
            your local machine)
          </i>
          .
        </p>
        <p style={{ marginTop: '20px', fontSize: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>✏️</div>
          <i style={{ animation: 'none', color: '#747474' }}>
            {' '}
            June 10th, 2022{' '}
          </i>
        </p>
        <Nav />
      </div>
      <Links />
    </div>
  </Layout>
)

export default HTTPsForLocalDev
