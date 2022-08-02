import React from 'react'
import styled from 'styled-components'

type BodyTextProps = {
  children: React.ReactChild | React.ReactChild[]
}

export const P_BodyText = (props: BodyTextProps) => {
  return <StyledBodyText>{props.children}</StyledBodyText>
}

const StyledBodyText = styled.p`
  font-size: 1.5rem;
  &:not(:last-child) {
    padding-bottom: 20px;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
`
