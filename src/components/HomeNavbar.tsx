import { H1_MainHeading } from './MainHeading'
import { Link } from 'react-scroll'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

export const HomeNavbar = () => {
  let navigate = useNavigate()
  return (
    <Div_NavbarContainer>
      <Nav_StyledNavbar>
        <Div_NavHeading>
          <H1_NavHeading>&#60;Radim Popp &#47;&#62;</H1_NavHeading>
        </Div_NavHeading>
        <Ul_NavList>
          <Li_NavListItem>
            <Link_NavLink
              onClick={() => navigate(urls.home)}
              to='projects'
              activeClass='active'
              spy={true}
              smooth={true}
            >
              <H1_NavUl>Projects</H1_NavUl>
            </Link_NavLink>
          </Li_NavListItem>
          <Li_NavListItem>
            <Link_NavLink
              onClick={() => navigate(urls.cv)}
              to='cv'
              activeClass='active'
              spy={true}
              smooth={true}
            >
              <H1_NavUl>CV</H1_NavUl>
            </Link_NavLink>
          </Li_NavListItem>
          <Li_NavListItem>
            <Link_NavLink
              onClick={() => navigate(urls.home)}
              to='contact'
              activeClass='active'
              spy={true}
              smooth={true}
            >
              <H1_NavUl>Contact</H1_NavUl>
            </Link_NavLink>
          </Li_NavListItem>
        </Ul_NavList>
      </Nav_StyledNavbar>
    </Div_NavbarContainer>
  )
}

const Div_NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Nav_StyledNavbar = styled.nav`
  width: 92%;
  min-height: 9vh;
  background-color: ${theme.color.black};
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${theme.color.greyDark};
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 20;
`

export const Ul_NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  align-items: center;
  padding-right: 5%;
`
const Li_NavListItem = styled.li`
  display: flex;
  white-space: nowrap;
  &:hover {
    transform: scale(1.01);
  }
`

const Link_NavLink = styled(Link)`
  color: ${theme.color.black};
  padding: ${theme.spacing.extraSmall};
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    border-bottom: 1px solid ${theme.color.greyDark};
  }
`

const H1_NavUl = styled(H1_MainHeading)`
  padding: unset;
  font-size: ${theme.fontSize.small};
`

const H1_NavHeading = styled(H1_MainHeading)`
  padding: unset;
  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.color.greyBright};
`

const Div_NavHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  padding-left: 5%;
`
