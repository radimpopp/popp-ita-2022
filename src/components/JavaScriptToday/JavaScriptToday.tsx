import { BodyText } from '../typo/BodyText'
import { Image } from '../Image/Image'
import { MainHeading } from '../typo/MainHeading'
import React from 'react'
import jsToday from '../../images/js-today.png'
import jsToday1 from '../../images/js-today1.png'

export const JavaScriptToday = () => {
  return (
    <div className='container reverse'>
      <div className='text-container'>
        <MainHeading className='heading' headingText='JavaScript Today' />
        <BodyText className='content-text'>
          According to GitHub’s 2021 Octoverse report, there are more JavaScript code repositories
          than any other language, and that number is steadily on the rise.
        </BodyText>
        <BodyText className='content-text'>
          JavaScript can be found virtually everywhere on the Internet. It has been named the most
          widely used programming language several times with over 64.9 percent of developers using
          it in 2021.
        </BodyText>
        <BodyText className='content-text'>
          A series of JavaScript frameworks and libraries such as Ember, Angular, React, and Vue
          have also been created to develop powerful and complicated web applications. Also,
          alongside client and server software, it is now even possible to write native mobile apps
          using JavaScript.
        </BodyText>
        <BodyText className='content-text'>
          From its rocky start, JavaScript is now used to build more than 90% of websites on the
          web, including some of the world’s largest web applications like Twitter, Facebook, and
          YouTube.
        </BodyText>
        <BodyText className='content-text'>
          It has now outgrown its scripting-language roots to become a robust and efficient
          general-purpose language. This makes it clear that JavaScript is going to be with us for
          many years to come.
        </BodyText>
      </div>
      <div className='images-container'>
        <Image src={jsToday} alt='JavaScript today' className='content-img' />
        <Image src={jsToday1} alt='JavaScript today' className='content-img' />
      </div>
    </div>
  )
}
