import { Link } from 'react-router-dom'
import { colors, fonts, spacing } from '../helpers/themes'
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
  padding: ${spacing.medium};
  color: ${colors.black900};
`
