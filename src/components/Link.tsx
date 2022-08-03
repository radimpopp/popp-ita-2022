import { colors } from '../helpers/themes'
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
  color: ${colors.yellow600};
  text-decoration: none;
  &:visited {
    color: ${colors.orange600};
  }
`
