import { BodyText } from './BodyText'
import { Image } from './Image'
import { NavLink } from 'react-router-dom'
import { RouterLink } from './RouterLink'
import { url } from 'inspector'
import { urls } from '../helpers/urls'
import React from 'react'
import jsLogo from '../images/js_logo.png'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={urls.historyUrl}
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          >
            History
          </NavLink>
        </li>
        <li>
          <NavLink
            to={urls.jsxjUrl}
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          >
            JavaScript x Java
          </NavLink>
        </li>
        <li>
          <RouterLink to={urls.homeUrl}>
            <Image src={jsLogo} className='nav-logo' alt='JavaScript logo' />
          </RouterLink>
        </li>
        <li>
          <NavLink
            to={urls.ecmaUrl}
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          >
            ECMAScript
          </NavLink>
        </li>
        <li>
          <NavLink
            to={urls.jstUrl}
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          >
            JavaScript Today
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
