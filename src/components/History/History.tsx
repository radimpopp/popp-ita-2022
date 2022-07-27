import BodyText from '../typo/BodyText'
import Image from '../Image/Image'
import MainHeading from '../typo/MainHeading'
import React from 'react'
import mochaImg from '../../images/mocha-livescript-javascript.png'
import netscapeImg from '../../images/netscape.png'

const History = () => {
  return (
    <div className='container'>
      <div className='text-container'>
        <MainHeading className='heading'>History</MainHeading>
        <BodyText className='content-text'>
          <strong>JavaScript</strong> is a programming language that represents one of the three
          core languages used to develop websites, alongside <em>HTML</em> and <em>CSS</em>. Whereas
          <em>HTML</em> and <em>CSS</em> give a website structure and style,
          <strong>JavaScript</strong> lets you add functionality and behaviors to your website. This
          allows visitors to interact with your website in various creative ways.
        </BodyText>
        <BodyText className='content-text'>
          Mosaic was the first web browser with a graphical user interface. It was first released in
          1993 and played a key role in the rapid development of the web as we know it today. The
          lead developers of Mosaic founded Netscape (now Mozilla) and released a more elegant
          browser called Netscape Navigator in 1994.
        </BodyText>
        <BodyText className='content-text'>
          During the early years of the web, web pages were only static, with no capability for
          dynamic behavior and interactivity. As a result, there was an urge in the web development
          community at the time to eliminate this limitation. This led Netscape to the decision to
          add a scripting language to the Navigator browser.
        </BodyText>
        <BodyText className='content-text'>
          In September 1995, a Netscape programmer named Brendan Eich developed a new scripting
          language in just 10 days. It was originally called
          <strong>Mocha</strong>, but quickly became known as <strong>LiveScript</strong> and,
          later, <strong>JavaScript</strong>.
        </BodyText>
        <BodyText className='content-text'>
          The language derived its syntax from <em>Java</em>, its first-class functions from Scheme,
          and its prototype-based inheritance from Self. Since then, <strong>JavaScript</strong> has
          been adopted by all major graphical web browsers.
        </BodyText>
      </div>
      <div className='images-container'>
        <Image src={netscapeImg} alt='Netscape' className='content-img' />
        <Image src={mochaImg} alt='Mocha-LiveScript-JavaScript' className='content-img' />
      </div>
    </div>
  )
}

export default History
