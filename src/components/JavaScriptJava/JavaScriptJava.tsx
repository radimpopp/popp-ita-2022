import { BodyText } from '../typo/BodyText'
import { Image } from '../Image/Image'
import { MainHeading } from '../typo/MainHeading'
import React from 'react'
import javaScriptXJava from '../../images/java-javascript.jpeg'
import javaScriptXJava1 from '../../images/java-javascript1.jpeg'

export const JavaScriptJava = () => {
  return (
    <div className='container reverse'>
      <div className='text-container'>
        <MainHeading className='heading' headingText='JavaScript x Java' />
        <BodyText className='content-text'>
          The choice of using the name “JavaScript” has always caused some confusion that the
          language is directly related to Java. However, except for syntactic resemblance,
          JavaScript has almost nothing to do with the Java programming language. They are both
          completely different languages.
        </BodyText>
        <BodyText className='content-text'>
          When JavaScript was initially introduced, Java was being heavily marketed and was the most
          talked-about language at the time. So Netscape thought it would be a good idea to
          capitalize on this success by creating the name &quot;JavaScript.&quot; Basically, the
          name similarity between the two languages was a simple marketing ploy for JavaScript to
          easily gain acceptance.
        </BodyText>
      </div>
      <div className='images-container'>
        <Image src={javaScriptXJava} alt='Java x JavaScript' className='content-img' />
        <Image src={javaScriptXJava1} alt='Java x JavaScript' className='content-img' />
      </div>
    </div>
  )
}
