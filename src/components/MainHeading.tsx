import { fontWeight, fonts, spacing } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

type MainHeadingProps = {
  headingText: string
}

export const H1_MainHeading = (props: MainHeadingProps) => {
  return <StyledMainHeading>{props.headingText}</StyledMainHeading>
}

const StyledMainHeading = styled.h1`
  font-weight: ${fontWeight.fontWeightLarge};
  font-size: ${fonts.fontLarge};
  padding-bottom: ${spacing.large};
`
