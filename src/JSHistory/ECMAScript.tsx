import { Div_Container, Div_ImagesContainer, Div_TextContainer } from '../components/Container'
import { H1_MainHeading } from '../components/MainHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Img_Image } from '../components/Image'
import { P_BodyText } from '../components/BodyText'
import React from 'react'
import ecma from '../images/ecma.png'
import evolution from '../images/ecma-evolution.webp'

export const ECMAScript = () => {
  return (
    <HelmetProvider>
      <Div_Container>
        <Helmet>
          <title>Radim Popp/JavaScript/ECMA</title>
          <meta name='Description' content='A brief description of ECMA script' />
        </Helmet>
        <Div_TextContainer>
          <H1_MainHeading>ECMAScript</H1_MainHeading>
          <P_BodyText>
            When JavaScript was first introduced by Netscape, there was a war going on between all
            the browser vendors on the market at the time. Microsoft and several other browser
            vendors implemented their own versions of JavaScript (with different names and syntax)
            in their respective browsers. This created a huge headache for developers, as code that
            worked fine on one browser was a total waste on another. This went on for a while till
            they all agreed to use the same language (JavaScript) in their browsers.
          </P_BodyText>
          <P_BodyText>
            As a result, Netscape submitted JavaScript to the European Computer Manufacturers
            Association (ECMA) for standardization in order to ensure proper maintenance and support
            of the language. Since JavaScript was standardized by ECMA, it was officially named
            ECMAScript.
          </P_BodyText>
          <P_BodyText>
            Originally, the name ECMAScript was just the formalization of JavaScript, but now
            languages like JScript and ActionScript are also based on the ECMAScript standard. They
            can be thought of like 3 different cars using the same engine.
          </P_BodyText>

          <P_BodyText>
            JavaScript has two major host environments: browsers and Node.js. These environments add
            some APIs to the language. If you strip all the external APIs from these environments,
            you get ECMAScript. In simple words, you can think of ECMAScript as JavaScript without a
            host environment.
          </P_BodyText>
        </Div_TextContainer>
        <Div_ImagesContainer>
          <Img_Image src={ecma} alt='ECMAScript' />
          <Img_Image src={evolution} alt='ECMAScript evolution' />
        </Div_ImagesContainer>
      </Div_Container>
    </HelmetProvider>
  )
}
