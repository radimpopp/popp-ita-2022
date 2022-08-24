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

export const H1_MainHeadingYellow = styled.h1`
  ${H1_MainHeading};
  color: ${theme.color.yellowBright};
  font-size: ${theme.fontSize.large};
  padding-top: ${theme.spacing.large};
  font-family: 'Permanent Marker', cursive;
  text-align: center;
`
