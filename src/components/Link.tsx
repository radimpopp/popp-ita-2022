import React from 'react'
import styled from 'styled-components'

type LinkProps = {
  href: string
  target?: string
  children: string
}
export const Link = (props: LinkProps) => {
  return (
    <StyledLink href={props.href} target={props.target}>
      {props.children}
    </StyledLink>
  )
}
const StyledLink = styled.a`
  color: #d29909;
  text-decoration: none;
  &:visited {
    color: #f26005a3;
  }
`
