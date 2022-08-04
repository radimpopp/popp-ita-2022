import { Img_ImageLogo } from './Image'
import { NavLink, useLocation } from 'react-router-dom'
import { RouterLink } from './RouterLink'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import React from 'react'
import jsLogo from '../images/js_logo.png'
import styled from 'styled-components'

export const Navbar = () => {
  const location = useLocation()

  return (
    <Nav_StyledNavbar>
      <Ul_NavList>
        <Li_NavListItem>
          <Link_NavLink
            to={`${urls.jsWebUrl}${urls.historyUrl}`}
            style={
              location.pathname === `${urls.jsWebUrl}${urls.historyUrl}`
                ? { border: '2px solid black', margin: '-2px' }
                : { border: 'none' }
            }
          >
            History
          </Link_NavLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <Link_NavLink
            to={`${urls.jsWebUrl}${urls.jsxjUrl}`}
            style={
              location.pathname === `${urls.jsWebUrl}${urls.jsxjUrl}`
                ? { border: '2px solid black', margin: '-2px' }
                : { border: 'none' }
            }
          >
            JavaScript x Java
          </Link_NavLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <RouterLink to={urls.jsWebUrl}>
            <Img_ImageLogo src={jsLogo} alt='JavaScript logo' />
          </RouterLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <Link_NavLink
            to={`${urls.jsWebUrl}${urls.ecmaUrl}`}
            style={
              location.pathname === `${urls.jsWebUrl}${urls.ecmaUrl}`
                ? { border: '2px solid black', margin: '-2px' }
                : { border: 'none' }
            }
          >
            ECMAScript
          </Link_NavLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <Link_NavLink
            to={`${urls.jsWebUrl}${urls.jstUrl}`}
            style={
              location.pathname === `${urls.jsWebUrl}${urls.jstUrl}`
                ? { border: '2px solid black', margin: '-2px' }
                : { border: 'none' }
            }
          >
            JavaScript Today
          </Link_NavLink>
        </Li_NavListItem>
      </Ul_NavList>
    </Nav_StyledNavbar>
  )
}

const Nav_StyledNavbar = styled.nav`
  background-color: ${theme.color.yellowDark};
  box-shadow: 0 2px 4px 0 ${theme.color.blackBoxShadow};
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
  ${theme.mediaQueries.phone} {
    flex-direction: column;
    gap: ${theme.spacing.small};
    padding: ${theme.spacing.medium} 0;
  }
`
const Li_NavListItem = styled.li`
  &:hover {
    transform: scale(1.1);
  }
  ${theme.mediaQueries.phone} {
    &:nth-child(3) {
      order: -2;
    }
  }
`

const Link_NavLink = styled(NavLink)`
  font-weight: ${theme.fontWeight.medium};
  text-decoration: none;
  font-size: ${theme.fontSize.smallPlus};
  color: ${theme.color.black};
  padding: ${theme.spacing.extraSmall};
  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`
