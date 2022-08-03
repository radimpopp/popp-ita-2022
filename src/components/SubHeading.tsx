import { fontWeight, fonts, spacing } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

type SubHeadingProps = {
  subHeadingText: string
}

export const H2_SubHeading = (props: SubHeadingProps) => {
  return <StyledSubHeading>{props.subHeadingText}</StyledSubHeading>
}

const StyledSubHeading = styled.h2`
  font-weight: ${fontWeight.fontWeightLarge};
  font-size: ${fonts.fontMedium};
  padding-bottom: ${spacing.medium};
`
