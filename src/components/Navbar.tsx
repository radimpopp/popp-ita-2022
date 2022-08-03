import { Img_ImageLogo } from './Image'
import { NavLink, useLocation } from 'react-router-dom'
import { RouterLink } from './RouterLink'
import { colors, fontWeight, fonts, mediaQueries, spacing } from '../helpers/themes'
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
            to={urls.historyUrl}
            style={
              location.pathname === urls.historyUrl
                ? { border: '2px solid black', margin: '-2px' }
                : { border: 'none' }
            }
          >
            History
          </Link_NavLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <Link_NavLink
            to={urls.jsxjUrl}
            style={
              location.pathname === urls.jsxjUrl
                ? { border: '2px solid black', margin: '-2px' }
                : { border: 'none' }
            }
          >
            JavaScript x Java
          </Link_NavLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <RouterLink to={urls.homeUrl}>
            <Img_ImageLogo src={jsLogo} alt='JavaScript logo' />
          </RouterLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <Link_NavLink
            to={urls.ecmaUrl}
            style={
              location.pathname === urls.ecmaUrl
                ? { border: '2px solid black', margin: '-2px' }
                : { border: 'none' }
            }
          >
            ECMAScript
          </Link_NavLink>
        </Li_NavListItem>
        <Li_NavListItem>
          <Link_NavLink
            to={urls.jstUrl}
            style={
              location.pathname === urls.jstUrl
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
  background-color: ${colors.yellow800};
  box-shadow: 0 2px 4px 0 ${colors.blackBoxShadow};
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
  ${mediaQueries.phone} {
    flex-direction: column;
    gap: ${spacing.small};
    padding: ${spacing.medium} 0;
  }
`
const Li_NavListItem = styled.li`
  &:hover {
    transform: scale(1.1);
  }
  ${mediaQueries.phone} {
    &:nth-child(3) {
      order: -2;
    }
  }
`

const Link_NavLink = styled(NavLink)`
  font-weight: ${fontWeight.fontWeightMedium};
  text-decoration: none;
  font-size: ${fonts.fontSmallPlus};
  color: ${colors.black900};
  padding: ${spacing.extraSmall};
  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`
