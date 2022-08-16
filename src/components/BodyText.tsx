import { theme } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

export const P_BodyText = styled.p`
  font-size: ${theme.fontSize.small};
  &:not(:last-child) {
    padding-bottom: ${theme.spacing.medium};
  }
  ${theme.mediaQueries.tablet} {
    width: 100%;
  }
`
export const P_BodyTextWhiteEdition = styled(P_BodyText)`
  margin-top: ${theme.spacing.medium};
  padding-bottom: ${theme.spacing.medium};
  color: white;
`
