import { BodyText } from '../typo/BodyText'
import { Image } from '../Image/Image'
import { MainHeading } from '../typo/MainHeading'
import React from 'react'
import ecma from '../../images/ecma.png'
import evolution from '../../images/ecma-evolution.webp'

export const ECMAScript = () => {
  return (
    <div className='container'>
      <div className='text-container'>
        <MainHeading className='heading' headingText='ECMAScript' />
        <BodyText className='content-text'>
          When JavaScript was first introduced by Netscape, there was a war going on between all the
          browser vendors on the market at the time. Microsoft and several other browser vendors
          implemented their own versions of JavaScript (with different names and syntax) in their
          respective browsers. This created a huge headache for developers, as code that worked fine
          on one browser was a total waste on another. This went on for a while till they all agreed
          to use the same language (JavaScript) in their browsers.
        </BodyText>
        <BodyText className='content-text'>
          As a result, Netscape submitted JavaScript to the European Computer Manufacturers
          Association (ECMA) for standardization in order to ensure proper maintenance and support
          of the language. Since JavaScript was standardized by ECMA, it was officially named
          ECMAScript.
        </BodyText>
        <BodyText className='content-text'>
          Originally, the name ECMAScript was just the formalization of JavaScript, but now
          languages like JScript and ActionScript are also based on the ECMAScript standard. They
          can be thought of like 3 different cars using the same engine.
        </BodyText>

        <BodyText className='content-text'>
          JavaScript has two major host environments: browsers and Node.js. These environments add
          some APIs to the language. If you strip all the external APIs from these environments, you
          get ECMAScript. In simple words, you can think of ECMAScript as JavaScript without a host
          environment.
        </BodyText>
      </div>
      <div className='images-container'>
        <Image src={ecma} alt='ECMAScript' className='content-img' />
        <Image src={evolution} alt='ECMAScript evolution' className='content-img' />
      </div>
    </div>
  )
}
