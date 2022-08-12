import {
  Div_ImagesContainer,
  Div_ReverseContainer,
  Div_TextContainer,
} from '../components/Container'
import { H1_MainHeading } from '../components/MainHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Img_Image } from '../components/Image'
import { P_BodyText } from '../components/BodyText'
import React from 'react'
import javaScriptXJava from '../images/java-javascript.jpeg'
import javaScriptXJava1 from '../images/java-javascript1.jpeg'

export const JavaScriptJava = () => {
  return (
    <HelmetProvider>
      <Div_ReverseContainer>
        <Helmet>
          <title>Radim Popp/JavaScript/JavaScript x Java</title>
          <meta name='Description' content='The difference between JavaScript and Java' />
        </Helmet>
        <Div_TextContainer>
          <H1_MainHeading>JavaScript x Java</H1_MainHeading>
          <P_BodyText>
            The choice of using the name “JavaScript” has always caused some confusion that the
            language is directly related to Java. However, except for syntactic resemblance,
            JavaScript has almost nothing to do with the Java programming language. They are both
            completely different languages.
          </P_BodyText>
          <P_BodyText>
            When JavaScript was initially introduced, Java was being heavily marketed and was the
            most talked-about language at the time. So Netscape thought it would be a good idea to
            capitalize on this success by creating the name &quot;JavaScript.&quot; Basically, the
            name similarity between the two languages was a simple marketing ploy for JavaScript to
            easily gain acceptance.
          </P_BodyText>
        </Div_TextContainer>
        <Div_ImagesContainer>
          <Img_Image src={javaScriptXJava} alt='Java x JavaScript' />
          <Img_Image src={javaScriptXJava1} alt='Java x JavaScript' />
        </Div_ImagesContainer>
      </Div_ReverseContainer>
    </HelmetProvider>
  )
}
