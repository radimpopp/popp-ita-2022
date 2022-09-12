import { theme } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

export const H2_SubHeading = styled.h2`
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.medium};
  padding-bottom: ${theme.spacing.medium};
`

export const H2_FormHeading = styled(H2_SubHeading)`
  white-space: nowrap;
  padding-bottom: unset;
  color: ${theme.color.white};
`
