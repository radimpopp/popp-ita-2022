import { theme } from '../helpers/themes'
import React from 'react'
import styled, { css } from 'styled-components'

export const styledMainHeadings = css`
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.large};
`
export const H1_MainHeading = styled.h1`
  ${styledMainHeadings}
  padding-bottom: ${theme.spacing.medium};
`

export const H1_HomeHeading = styled.h1`
  ${styledMainHeadings};
  width: 25vw;
  padding: ${theme.spacing.small};
  border: ${theme.spacing.extraSmall} inset ${theme.color.orangeBright};
  ${theme.mediaQueries.tablet} {
    text-align: center;
  }
  ${theme.mediaQueries.phone} {
    width: 60vw;
  }
`