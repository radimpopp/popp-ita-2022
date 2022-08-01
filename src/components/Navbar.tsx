import { BodyText } from './BodyText'
import { Image, ImageLogo } from './Image'
import { NavLink } from 'react-router-dom'
import { RouterLink } from './RouterLink'
import { url } from 'inspector'
import { urls } from '../helpers/urls'
import React from 'react'
import jsLogo from '../images/js_logo.png'
import styled from 'styled-components'

export const Navbar = () => {
  return (
    <StyledNavbar>
      <NavList>
        <NavListItem>
          <StyledNavLink
            to={urls.historyUrl}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            History
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to={urls.jsxjUrl} className={({ isActive }) => (isActive ? 'active' : '')}>
            JavaScript x Java
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <RouterLink to={urls.homeUrl}>
            <ImageLogo src={jsLogo} alt='JavaScript logo' />
          </RouterLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to={urls.ecmaUrl} className={({ isActive }) => (isActive ? 'active' : '')}>
            ECMAScript
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to={urls.jstUrl} className={({ isActive }) => (isActive ? 'active' : '')}>
            JavaScript Today
          </StyledNavLink>
        </NavListItem>
      </NavList>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  background-color: #b8860b;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`

const NavList = styled.ul`
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
const NavListItem = styled.li`
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    &:nth-child(3) {
      order: -2;
    }
  }
`

const StyledNavLink = styled(NavLink)`
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
