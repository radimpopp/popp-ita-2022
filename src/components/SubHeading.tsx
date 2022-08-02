import React from 'react'
import styled from 'styled-components'

type SubHeadingProps = {
  subHeadingText: string
}

export const H2_SubHeading = (props: SubHeadingProps) => {
  return <StyledSubHeading>{props.subHeadingText}</StyledSubHeading>
}

const StyledSubHeading = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  padding-bottom: 20px;
`
