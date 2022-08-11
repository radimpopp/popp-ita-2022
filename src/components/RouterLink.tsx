import { Link } from 'react-router-dom'
import { theme } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

type RouterLinkProps = {
  to: string
  children: JSX.Element
}

export const RouterLink = (props: RouterLinkProps) => {
  return <StyledLink to={props.to}>{props.children}</StyledLink>
}

const StyledLink = styled(Link)`
  padding: ${theme.spacing.small};
  color: ${theme.color.black};
`
