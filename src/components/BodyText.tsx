import { fonts, mediaQueries, spacing } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

type BodyTextProps = {
  children: React.ReactChild | React.ReactChild[]
}

export const P_BodyText = (props: BodyTextProps) => {
  return <StyledBodyText>{props.children}</StyledBodyText>
}

const StyledBodyText = styled.p`
  font-size: ${fonts.fontSmall};
  &:not(:last-child) {
    padding-bottom: ${spacing.medium};
  }
  ${mediaQueries.tablet} {
    width: 100%;
  }
`
