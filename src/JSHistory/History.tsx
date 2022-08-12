import { Div_Container, Div_ImagesContainer, Div_TextContainer } from '../components/Container'
import { H1_MainHeading } from '../components/MainHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Img_Image } from '../components/Image'
import { P_BodyText } from '../components/BodyText'
import React from 'react'
import mochaImg from '../images/mocha-livescript-javascript.png'
import netscapeImg from '../images/netscape.png'

export const History = () => {
  return (
    <HelmetProvider>
      <Div_Container>
        <Helmet>
          <title>Radim Popp/JavaScript/History</title>
          <meta
            name='Description'
            content='The very beginning of one of the most used programming languages in the world'
          />
        </Helmet>
        <Div_TextContainer>
          <H1_MainHeading>History</H1_MainHeading>
          <P_BodyText>
            <strong>JavaScript</strong> is a programming language that represents one of the three
            core languages used to develop websites, alongside <em>HTML</em> and <em>CSS</em>.
            Whereas
            <em> HTML</em> and <em>CSS</em> give a website structure and style,
            <strong> JavaScript</strong> lets you add functionality and behaviors to your website.
            This allows visitors to interact with your website in various creative ways.
          </P_BodyText>
          <P_BodyText>
            Mosaic was the first web browser with a graphical user interface. It was first released
            in 1993 and played a key role in the rapid development of the web as we know it today.
            The lead developers of Mosaic founded Netscape (now Mozilla) and released a more elegant
            browser called Netscape Navigator in 1994.
          </P_BodyText>
          <P_BodyText>
            During the early years of the web, web pages were only static, with no capability for
            dynamic behavior and interactivity. As a result, there was an urge in the web
            development community at the time to eliminate this limitation. This led Netscape to the
            decision to add a scripting language to the Navigator browser.
          </P_BodyText>
          <P_BodyText>
            In September 1995, a Netscape programmer named Brendan Eich developed a new scripting
            language in just 10 days. It was originally called
            <strong> Mocha</strong>, but quickly became known as <strong>LiveScript</strong> and,
            later, <strong>JavaScript</strong>.
          </P_BodyText>

          <P_BodyText>
            The language derived its syntax from <em>Java</em>, its first-class functions from
            Scheme, and its prototype-based inheritance from Self. Since then,{' '}
            <strong>JavaScript</strong> has been adopted by all major graphical web browsers.
          </P_BodyText>
        </Div_TextContainer>
        <Div_ImagesContainer>
          <Img_Image src={netscapeImg} alt='Netscape' />
          <Img_Image src={mochaImg} alt='Mocha-LiveScript-JavaScript' />
        </Div_ImagesContainer>
      </Div_Container>
    </HelmetProvider>
  )
}
