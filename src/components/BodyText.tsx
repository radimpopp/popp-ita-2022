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

export const P_TodoBodyText = styled.p`
  font-size: ${theme.fontSize.small};
  padding: ${theme.spacing.small};
  word-break: break-all;
  width: 90%;
  ${theme.mediaQueries.tablet} {
    width: 85%;
  }
  ${theme.mediaQueries.phone} {
    width: 60%;
  }
  &[aria-checked='true'] {
    text-decoration: line-through;
  }
`
