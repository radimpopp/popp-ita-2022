import { Footer } from '../components/Footer'
import { H1_MainHeading } from '../components/MainHeading'
import { Helmet } from 'react-helmet-async'
import { Img_Image } from '../components/Image'
import { Navbar } from '../components/Navbar'
import { anchors } from '../helpers/urls'
import { theme } from '../helpers/themes'
import React from 'react'
import ecma from '../images/ecma.png'
import evolution from '../images/ecma-evolution.webp'
import javaScriptXJava from '../images/java-javascript.jpeg'
import javaScriptXJava2 from '../images/java-javascript2.jpg'
import jsToday from '../images/js-today.png'
import jsToday1 from '../images/js-today1.png'
import mochaImg from '../images/mocha-livescript-javascript.png'
import netscapeImg from '../images/netscape.png'
import styled, { css } from 'styled-components'

export const JsWeb = () => {
  return (
    <>
      <Navbar />
      <Div_JsContainer>
        <Helmet>
          <title>Radim Popp/JavaScript History</title>
          <meta name='Description' content='What is JavaScript and what is it used for?' />
        </Helmet>
        <Div_DescriptionContainer id={anchors.jsWeb.jsWeb}>
          <Div_TextContainer>
            <H1_JsHeading>JavaScript</H1_JsHeading>
            <P_Js>
              JavaScript is a dynamic programming language that&apos;s used for web development, in
              web applications, for game development, and lots more. It allows you to implement
              dynamic features on web pages that cannot be done with only HTML and CSS.
            </P_Js>
            <P_Js>
              Many browsers use JavaScript as a scripting language for doing dynamic things on the
              web. Any time you see a click-to-show dropdown menu, extra content added to a page,
              and dynamically changing element colors on a page, to name a few features, you&apos;re
              seeing the effects of JavaScript.
            </P_Js>
            <P_Js>
              Without JavaScript, all you would have on the web would be HTML and CSS. These alone
              limit you to a few web page implementations. 90% (if not more) of your webpages would
              be static, and you&apos;d only have the dynamic changes like animations that CSS
              provides.
            </P_Js>
          </Div_TextContainer>
        </Div_DescriptionContainer>
        <Div_Container id={anchors.jsWeb.history}>
          <Div_TextContainer>
            <H1_JsHeading>History</H1_JsHeading>
            <P_Js>
              <strong>JavaScript</strong> is a programming language that represents one of the three
              core languages used to develop websites, alongside <em>HTML</em> and <em>CSS</em>.
              Whereas
              <em> HTML</em> and <em>CSS</em> give a website structure and style,
              <strong> JavaScript</strong> lets you add functionality and behaviors to your website.
              This allows visitors to interact with your website in various creative ways.
            </P_Js>
            <P_Js>
              Mosaic was the first web browser with a graphical user interface. It was first
              released in 1993 and played a key role in the rapid development of the web as we know
              it today. The lead developers of Mosaic founded Netscape (now Mozilla) and released a
              more elegant browser called Netscape Navigator in 1994. During the early years of the
              web, web pages were only static, with no capability for dynamic behavior and
              interactivity. As a result, there was an urge in the web development community at the
              time to eliminate this limitation. This led Netscape to the decision to add a
              scripting language to the Navigator browser.
            </P_Js>
            <P_Js>
              In September 1995, a Netscape programmer named Brendan Eich developed a new scripting
              language in just 10 days. It was originally called
              <strong> Mocha</strong>, but quickly became known as <strong>LiveScript</strong> and,
              later, <strong>JavaScript</strong>.
            </P_Js>
            <P_Js>
              The language derived its syntax from <em>Java</em>, its first-class functions from
              Scheme, and its prototype-based inheritance from Self. Since then,{' '}
              <strong>JavaScript</strong> has been adopted by all major graphical web browsers.
            </P_Js>
          </Div_TextContainer>
          <Div_ImagesContainer>
            <Img_Image src={netscapeImg} alt='Netscape' />
            <Img_Image src={mochaImg} alt='Mocha-LiveScript-JavaScript' />
          </Div_ImagesContainer>
        </Div_Container>
        <Div_ReverseContainer id={anchors.jsWeb.jsxj}>
          <Div_TextContainer>
            <H1_JsHeading>JavaScript x Java</H1_JsHeading>
            <P_Js>
              The choice of using the name “JavaScript” has always caused some confusion that the
              language is directly related to Java. However, except for syntactic resemblance,
              JavaScript has almost nothing to do with the Java programming language. They are both
              completely different languages.
            </P_Js>
            <P_Js>
              When JavaScript was initially introduced, Java was being heavily marketed and was the
              most talked-about language at the time. So Netscape thought it would be a good idea to
              capitalize on this success by creating the name &quot;JavaScript.&quot; Basically, the
              name similarity between the two languages was a simple marketing ploy for JavaScript
              to easily gain acceptance.
            </P_Js>
          </Div_TextContainer>
          <Div_ImagesContainer>
            <Img_Image src={javaScriptXJava} alt='Java x JavaScript' />
            <Img_Image src={javaScriptXJava2} alt='Java x JavaScript' />
          </Div_ImagesContainer>
        </Div_ReverseContainer>
        <Div_Container id={anchors.jsWeb.ecma}>
          <Div_TextContainer>
            <H1_JsHeading>ECMAScript</H1_JsHeading>
            <P_Js>
              When JavaScript was first introduced by Netscape, there was a war going on between all
              the browser vendors on the market at the time. Microsoft and several other browser
              vendors implemented their own versions of JavaScript (with different names and syntax)
              in their respective browsers. This created a huge headache for developers, as code
              that worked fine on one browser was a total waste on another. This went on for a while
              till they all agreed to use the same language (JavaScript) in their browsers.
            </P_Js>
            <P_Js>
              As a result, Netscape submitted JavaScript to the European Computer Manufacturers
              Association (ECMA) for standardization in order to ensure proper maintenance and
              support of the language. Since JavaScript was standardized by ECMA, it was officially
              named ECMAScript.
            </P_Js>
            <P_Js>
              Originally, the name ECMAScript was just the formalization of JavaScript, but now
              languages like JScript and ActionScript are also based on the ECMAScript standard.
              They can be thought of like 3 different cars using the same engine.
            </P_Js>
            <P_Js>
              JavaScript has two major host environments: browsers and Node.js. These environments
              add some APIs to the language. If you strip all the external APIs from these
              environments, you get ECMAScript. In simple words, you can think of ECMAScript as
              JavaScript without a host environment.
            </P_Js>
          </Div_TextContainer>
          <Div_ImagesContainer>
            <Img_Image src={ecma} alt='ECMAScript' />
            <Img_Image src={evolution} alt='ECMAScript evolution' />
          </Div_ImagesContainer>
        </Div_Container>
        <Div_ReverseContainer id={anchors.jsWeb.jst}>
          <Div_TextContainer>
            <H1_JsHeading>JavaScript Today</H1_JsHeading>
            <P_Js>
              According to GitHub’s 2021 Octoverse report, there are more JavaScript code
              repositories than any other language, and that number is steadily on the rise.
            </P_Js>
            <P_Js>
              JavaScript can be found virtually everywhere on the Internet. It has been named the
              most widely used programming language several times with over 64.9 percent of
              developers using it in 2021.
            </P_Js>
            <P_Js>
              A series of JavaScript frameworks and libraries such as Ember, Angular, React, and Vue
              have also been created to develop powerful and complicated web applications. Also,
              alongside client and server software, it is now even possible to write native mobile
              apps using JavaScript.
            </P_Js>
            <P_Js>
              From its rocky start, JavaScript is now used to build more than 90% of websites on the
              web, including some of the world’s largest web applications like Twitter, Facebook,
              and YouTube.
            </P_Js>
            <P_Js>
              It has now outgrown its scripting-language roots to become a robust and efficient
              general-purpose language. This makes it clear that JavaScript is going to be with us
              for many years to come.
            </P_Js>
          </Div_TextContainer>
          <Div_ImagesContainer>
            <Img_Image src={jsToday} alt='JavaScript today' />
            <Img_Image src={jsToday1} alt='JavaScript today' />
          </Div_ImagesContainer>
        </Div_ReverseContainer>
      </Div_JsContainer>
      <Footer />
    </>
  )
}

const Div_JsContainer = styled.div`
  max-width: 100vw;
`

const Div_DescriptionContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.mediaQueries.phone} {
    padding-top: ${theme.spacing.large};
  }
`

const containerStyles = css`
  height: 90vh;
  width: 95%;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: ${theme.spacing.large} 0;

  ${theme.mediaQueries.tablet} {
    width: 100%;
    height: 80%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${theme.spacing.extraLarge};
    text-align: center;
  }

  ${theme.mediaQueries.phone} {
    max-height: 75%;
    width: 100%;
    margin-bottom: ${theme.spacing.superSize};
  }
`

const Div_Container = styled.div`
  ${containerStyles}
  background-color: ${theme.color.black};
`
const Div_ReverseContainer = styled.div`
  ${containerStyles};
  flex-direction: row-reverse;
  ${theme.color.white};
  ${theme.mediaQueries.tablet}
`
const Div_TextContainer = styled.div`
  font-weight: ${theme.fontWeight.light};
  width: 50%;
  ${theme.mediaQueries.tablet} {
    width: 85%;
  }
`

const Div_ImagesContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding-top: ${theme.spacing.extraLarge};
  align-items: center;
  gap: ${theme.spacing.medium};
  ${theme.mediaQueries.tablet} {
    width: 85%;
    &:last-child {
      padding-bottom: ${theme.spacing.superSize};
    }
  }
  ${theme.mediaQueries.phone} {
    width: 85%;
    padding-top: unset;
    &:last-child {
      padding-bottom: unset;
    }
  }
`

const H1_JsHeading = styled(H1_MainHeading)`
  width: 75%;
  font-size: ${theme.fontSize.extraLarge};
  text-align: left;
  color: ${theme.color.salmon};
  ${theme.mediaQueries.table} {
    width: 100%;
  }
`

const P_Js = styled.p`
  font-size: ${theme.fontSize.medium};
  margin: ${theme.spacing.medium} 0 0 0;
  color: ${theme.color.greyBright};
  text-align: left;
`
