import { Img_ImageLogo } from './Image'
import { NavLink } from 'react-router-dom'
import { RouterLink } from './RouterLink'
import { urls } from '../helpers/urls'
import React from 'react'
import jsLogo from '../images/js_logo.png'
import styled from 'styled-components'

export const Navbar = () => {
  return (
    <Nav_StyledNavbar>
      <Ul_NavList>
        <Li_NavListItem>
          <Link_NavLink
            to={urls.historyUrl}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            History
          </Link_NavLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <Link_NavLink to={urls.jsxjUrl} className={({ isActive }) => (isActive ? 'active' : '')}>
            JavaScript x Java
          </Link_NavLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <RouterLink to={urls.homeUrl}>
            <Img_ImageLogo src={jsLogo} alt='JavaScript logo' />
          </RouterLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <Link_NavLink to={urls.ecmaUrl} className={({ isActive }) => (isActive ? 'active' : '')}>
            ECMAScript
          </Link_NavLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <Link_NavLink to={urls.jstUrl} className={({ isActive }) => (isActive ? 'active' : '')}>
            JavaScript Today
          </Link_NavLink>
        </Li_NavListItem>
      </Ul_NavList>
    </Nav_StyledNavbar>
  )
}

const Nav_StyledNavbar = styled.nav`
  background-color: #b8860b;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`

const Ul_NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
  }
`
const Li_NavListItem = styled.li`
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    &:nth-child(3) {
      order: -2;
    }
  }
`

const Link_NavLink = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  font-size: 1.8rem;
  color: #000000;
  padding: 5px;
  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
  &.active {
    font-weight: 500;
    text-decoration: none;
    font-size: 1.8rem;
    color: #000000;
    padding: 5px;
    border: 2px solid black;
    margin: -2px;
  }
`
