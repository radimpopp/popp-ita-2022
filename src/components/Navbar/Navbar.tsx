import BodyText from '../typo/BodyText'
import Image from '../Image/Image'
import React from 'react'
import RouterLink from '../RouterLink/RouterLink'
import jsLogo from '../../images/js_logo.png'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <RouterLink to='/history' className='link'>
            <BodyText className='nav-item'>History</BodyText>
          </RouterLink>
        </li>
        <li>
          <RouterLink to='/javascript-java' className='link'>
            <BodyText className='nav-item'>JavaScript x Java</BodyText>
          </RouterLink>
        </li>
        <li>
          <RouterLink to='/' className='link'>
            <Image src={jsLogo} className='nav-logo' alt='JavaScript logo' />
          </RouterLink>
        </li>
        <li>
          {' '}
          <RouterLink to='/ECMAScript' className='link'>
            <BodyText className='nav-item'>ECMAScript</BodyText>
          </RouterLink>
        </li>
        <li>
          <RouterLink to='/javascript-today' className='link'>
            <BodyText className='nav-item'>JavaScript Today</BodyText>
          </RouterLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
