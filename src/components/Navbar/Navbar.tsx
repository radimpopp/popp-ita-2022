import { BodyText } from '../typo/BodyText'
import { Image } from '../Image/Image'
import { NavLink } from 'react-router-dom'
import { RouterLink } from '../RouterLink/RouterLink'
import React from 'react'
import jsLogo from '../../images/js_logo.png'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/history' className={({ isActive }) => (isActive ? 'active' : 'nav-link')}>
            History
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/javascript-java'
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          >
            JavaScript x Java
          </NavLink>
        </li>
        <li>
          <RouterLink to='/'>
            <Image src={jsLogo} className='nav-logo' alt='JavaScript logo' />
          </RouterLink>
        </li>
        <li>
          <NavLink
            to='/ECMAScript'
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          >
            ECMAScript
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/javascript-today'
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          >
            JavaScript Today
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
