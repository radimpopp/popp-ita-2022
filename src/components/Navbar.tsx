import { H1_MainHeading } from './MainHeading'
import { Img_ImageLogo } from './Image'
import { Link } from 'react-scroll'
import { breakpointsMediaQueries, theme } from '../helpers/themes'
import Hamburger from 'hamburger-react'
import React, { useEffect, useState } from 'react'
import jsLogo from '../images/js_logo.png'
import styled from 'styled-components'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const resizeHandler = () => setWidth(window.innerWidth)
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  const clickHandler = () => {
    setOpen(false)
  }

  return (
    <Div_NavContainer>
      <Nav_StyledNavbar>
        {width > breakpointsMediaQueries.tablet || open === true ? (
          <>
            <Ul_NavList>
              {width <= breakpointsMediaQueries.tablet && (
                <Li_NavListItem>
                  <Link_NavLink to='jsWeb' activeClass='active' spy={true} smooth={true}>
                    <Img_ImageLogo onClick={clickHandler} src={jsLogo} alt='JavaScript logo' />
                  </Link_NavLink>
                </Li_NavListItem>
              )}
              <Li_NavListItem>
                <Link_NavLink to='history' activeClass='active' spy={true} smooth={true}>
                  <H1_NavHeading onClick={clickHandler}>History</H1_NavHeading>
                </Link_NavLink>
              </Li_NavListItem>
              <Li_NavListItem>
                <Link_NavLink to='jsxj' activeClass='active' spy={true} smooth={true}>
                  <H1_NavHeading onClick={clickHandler}>JavaScript x Java</H1_NavHeading>
                </Link_NavLink>
              </Li_NavListItem>
            </Ul_NavList>
            {width > breakpointsMediaQueries.tablet && (
              <Li_NavListItem>
                <Link_NavLink to='jsWeb' activeClass='active' spy={true} smooth={true}>
                  <Img_ImageLogo onClick={clickHandler} src={jsLogo} alt='JavaScript logo' />
                </Link_NavLink>
              </Li_NavListItem>
            )}
            <Ul_NavList>
              <Li_NavListItem>
                <Link_NavLink to='ecma' activeClass='active' spy={true} smooth={true}>
                  <H1_NavHeading onClick={clickHandler}>ECMA</H1_NavHeading>
                </Link_NavLink>
              </Li_NavListItem>
              <Li_NavListItem>
                <Link_NavLink to='jsToday' activeClass='active' spy={true} smooth={true}>
                  <H1_NavHeading onClick={clickHandler}>JavaScript Today</H1_NavHeading>
                </Link_NavLink>
              </Li_NavListItem>
            </Ul_NavList>
          </>
        ) : null}
        {width < breakpointsMediaQueries.tablet && (
          <Div_Hamburger>
            <Hamburger toggled={open} toggle={setOpen} color={theme.color.yellowBright} size={30} />
          </Div_Hamburger>
        )}
      </Nav_StyledNavbar>
    </Div_NavContainer>
  )
}

const Div_NavContainer = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
`

const Nav_StyledNavbar = styled.nav`
  width: 90vw;
  background-color: ${theme.color.black};
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.extraLarge};
  border-bottom: 2px solid ${theme.color.salmon};
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 2;
  ${theme.mediaQueries.tablet} {
    flex-direction: column;
    padding: unset;
    align-items: center;
    justify-content: flex-start;
    gap: unset;
  }
`

export const Ul_NavList = styled.ul`
  width: 100%;
  min-height: 4vw;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  align-items: center;
  ${theme.mediaQueries.tablet} {
    flex-direction: column;
  }
`
const Li_NavListItem = styled.li`
  display: flex;
  text-decoration: none;
  white-space: nowrap;
`

const H1_NavHeading = styled(H1_MainHeading)`
  padding: unset;
  font-size: ${theme.fontSize.medium};
  &:hover {
    transform: scale(1.1);
    color: ${theme.color.salmon};
  }
`

const Div_Hamburger = styled.div`
  margin: ${theme.spacing.extraSmall};
`

const Link_NavLink = styled(Link)`
  cursor: pointer;
  font-weight: ${theme.fontWeight.medium};
  text-decoration: none;
  font-size: ${theme.fontSize.smallPlus};
  padding: ${theme.spacing.extraSmall};
  white-space: nowrap;
  &:focus {
    border-bottom: 2px solid ${theme.color.salmon};
  }
`
