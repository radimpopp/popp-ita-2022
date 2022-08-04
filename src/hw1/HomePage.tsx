import { Div_Container, Div_TextContainer } from '../components/Container'
import { H1_MainHeading } from '../components/MainHeading'
import { H2_SubHeading } from '../components/SubHeading'
import { P_BodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const JavaScript = () => {
  return (
    <Div_BackgroundContainer>
      <Div_Container>
        <Div_TextContainer>
          <H1_MainHeading>JavaScript</H1_MainHeading>
          <P_BodyText>
            JavaScript is a dynamic programming language that&apos;s used for web development, in
            web applications, for game development, and lots more. It allows you to implement
            dynamic features on web pages that cannot be done with only HTML and CSS.
          </P_BodyText>
          <P_BodyText>
            Many browsers use JavaScript as a scripting language for doing dynamic things on the
            web. Any time you see a click-to-show dropdown menu, extra content added to a page, and
            dynamically changing element colors on a page, to name a few features, you&apos;re
            seeing the effects of JavaScript.
          </P_BodyText>
          <H2_SubHeading>What Would the Web Look Like Without JavaScript?</H2_SubHeading>
          <P_BodyText>
            Without JavaScript, all you would have on the web would be HTML and CSS. These alone
            limit you to a few web page implementations. 90% (if not more) of your webpages would be
            static, and you&apos;d only have the dynamic changes like animations that CSS provides.
          </P_BodyText>
          <RouterLink to={urls.homeUrl}>
            <P_BodyText>Return home</P_BodyText>
          </RouterLink>
        </Div_TextContainer>
      </Div_Container>
    </Div_BackgroundContainer>
  )
}

const Div_BackgroundContainer = styled.div`
  background-image: linear-gradient(${theme.color.yellowBright}, ${theme.color.orangeBright});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
