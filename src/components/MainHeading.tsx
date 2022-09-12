import { theme } from '../helpers/themes'
import React from 'react'
import styled, { css } from 'styled-components'

const styledMainHeadings = css`
  font-weight: ${theme.fontWeight.light};
  font-size: ${theme.fontSize.large};
`
export const H1_MainHeading = styled.h1`
  ${styledMainHeadings}
  color: ${theme.color.white};
  padding-top: ${theme.spacing.large};
  text-align: center;
`
