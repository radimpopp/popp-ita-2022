import { BodyText } from '../components/BodyText'
import { Div_Container, Div_TextContainer } from '../components/Container'
import { MainHeading } from '../components/MainHeading'
import { SubHeading } from '../components/SubHeading'
import React from 'react'
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <BackgroundContainer>
      <Div_Container>
        <Div_TextContainer>
          <MainHeading headingText='JavaScript' />
          <BodyText>
            JavaScript is a dynamic programming language that&apos;s used for web development, in
            web applications, for game development, and lots more. It allows you to implement
            dynamic features on web pages that cannot be done with only HTML and CSS.
          </BodyText>
          <BodyText>
            Many browsers use JavaScript as a scripting language for doing dynamic things on the
            web. Any time you see a click-to-show dropdown menu, extra content added to a page, and
            dynamically changing element colors on a page, to name a few features, you&apos;re
            seeing the effects of JavaScript.
          </BodyText>
          <SubHeading subHeadingText='What Would the Web Look Like Without JavaScript?' />
          <BodyText>
            Without JavaScript, all you would have on the web would be HTML and CSS. These alone
            limit you to a few web page implementations. 90% (if not more) of your webpages would be
            static, and you&apos;d only have the dynamic changes like animations that CSS provides.
          </BodyText>
        </Div_TextContainer>
      </Div_Container>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  background-image: linear-gradient(#f7e018, #f26005);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
