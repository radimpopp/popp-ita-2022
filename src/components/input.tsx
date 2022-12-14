import { theme } from '../helpers/themes'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

export const Input_Input = styled.input`
  width: 500px;
  height: ${theme.spacing.large};
  margin-left: ${theme.spacing.medium};
  padding-left: ${theme.spacing.medium};
  border: 3px solid ${theme.color.blackBoxShadow};
  border-radius: 5px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${theme.mediaQueries.tablet} {
    width: 45vw;
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
  ${theme.mediaQueries.phone} {
    width: 220px;
    margin: unset;
    margin: ${theme.spacing.small} 0 ${theme.spacing.medium} 0;
  }
`

export const Input_Checkbox = styled.input`
  margin: ${theme.spacing.small};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.spacing.medium};
  height: ${theme.spacing.medium};
  position: absolute;
  top: 0;
  left: 0;
`
