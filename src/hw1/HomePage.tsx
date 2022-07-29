import { BodyText } from '../components/BodyText'
import { MainHeading } from '../components/MainHeading'
import { SubHeading } from '../components/SubHeading'
import React from 'react'

export const HomePage = () => {
  return (
    <div className='background-container'>
      <div className='container'>
        <div className='text-container'>
          <MainHeading className='heading' headingText='JavaScript' />
          <BodyText className='content-text'>
            JavaScript is a dynamic programming language that&apos;s used for web development, in
            web applications, for game development, and lots more. It allows you to implement
            dynamic features on web pages that cannot be done with only HTML and CSS.
          </BodyText>
          <BodyText className='content-text'>
            Many browsers use JavaScript as a scripting language for doing dynamic things on the
            web. Any time you see a click-to-show dropdown menu, extra content added to a page, and
            dynamically changing element colors on a page, to name a few features, you&apos;re
            seeing the effects of JavaScript.
          </BodyText>
          <SubHeading
            className='subheading'
            subHeadingText='What Would the Web Look Like Without JavaScript?'
          />
          <BodyText className='content-text'>
            Without JavaScript, all you would have on the web would be HTML and CSS. These alone
            limit you to a few web page implementations. 90% (if not more) of your webpages would be
            static, and you&apos;d only have the dynamic changes like animations that CSS provides.
          </BodyText>
        </div>
      </div>
    </div>
  )
}
