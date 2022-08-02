import React from 'react'
import styled from 'styled-components'

type MainHeadingProps = {
  headingText: string
}

export const H1_MainHeading = (props: MainHeadingProps) => {
  return <StyledMainHeading>{props.headingText}</StyledMainHeading>
}

const StyledMainHeading = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  padding-bottom: 30px;
`
