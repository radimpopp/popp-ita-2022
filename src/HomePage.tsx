import BodyText from './components/typo/BodyText'
import React from 'react'
import RouterLink from './components/RouterLink/RouterLink'

const HomePage = () => {
  return (
    <div className='home-page'>
      <RouterLink to='/js-web' className='link'>
        <BodyText className='link-text'>Javascript history web</BodyText>
      </RouterLink>
    </div>
  )
}

export default HomePage
