import {
  Div_ImagesContainer,
  Div_ReverseContainer,
  Div_TextContainer,
} from '../components/Container'
import { H1_MainHeading } from '../components/MainHeading'
import { Helmet } from 'react-helmet-async'
import { Img_Image } from '../components/Image'
import { P_BodyText } from '../components/BodyText'
import React from 'react'
import jsToday from '../images/js-today.png'
import jsToday1 from '../images/js-today1.png'

export const JavaScriptToday = () => {
  return (
    <Div_ReverseContainer>
      <Helmet>
        <title>Radim Popp/JavaScript/JavaScript Today</title>
        <meta name='Description' content='Read about the recent usage of JavaScript' />
      </Helmet>
      <Div_TextContainer>
        <H1_MainHeading>JavaScript Today</H1_MainHeading>
        <P_BodyText>
          According to GitHub’s 2021 Octoverse report, there are more JavaScript code repositories
          than any other language, and that number is steadily on the rise.
        </P_BodyText>
        <P_BodyText>
          JavaScript can be found virtually everywhere on the Internet. It has been named the most
          widely used programming language several times with over 64.9 percent of developers using
          it in 2021.
        </P_BodyText>
        <P_BodyText>
          A series of JavaScript frameworks and libraries such as Ember, Angular, React, and Vue
          have also been created to develop powerful and complicated web applications. Also,
          alongside client and server software, it is now even possible to write native mobile apps
          using JavaScript.
        </P_BodyText>
        <P_BodyText>
          From its rocky start, JavaScript is now used to build more than 90% of websites on the
          web, including some of the world’s largest web applications like Twitter, Facebook, and
          YouTube.
        </P_BodyText>
        <P_BodyText>
          It has now outgrown its scripting-language roots to become a robust and efficient
          general-purpose language. This makes it clear that JavaScript is going to be with us for
          many years to come.
        </P_BodyText>
      </Div_TextContainer>
      <Div_ImagesContainer>
        <Img_Image src={jsToday} alt='JavaScript today' />
        <Img_Image src={jsToday1} alt='JavaScript today' />
      </Div_ImagesContainer>
    </Div_ReverseContainer>
  )
}
