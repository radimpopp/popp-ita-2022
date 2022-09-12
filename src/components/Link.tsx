import { theme } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

type LinkProps = {
  href: string
  target?: string
  children: string
}
export const A_Link = (props: LinkProps) => {
  return (
    <StyledLink href={props.href} target={props.target}>
      {props.children}
    </StyledLink>
  )
}
const StyledLink = styled.a`
  color: ${theme.color.pink};
  text-decoration: none;
  &:visited {
    color: ${theme.color.salmon};
  }
`
