import { theme } from '../helpers/themes'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Input = (props: ComponentProps<'input'>) => {
  return <input {...props}>{props.children}</input>
}

export const Input_Input = styled(Input)`
  width: 500px;
  height: ${theme.spacing.large};
  margin-left: ${theme.spacing.medium};
  padding-left: ${theme.spacing.medium};
  border: 3px solid ${theme.color.blackBoxShadow};
  border-radius: 5px;
  background-color: ${theme.color.yellowBright};
  ${theme.mediaQueries.tablet} {
    width: 80%;
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
  ${theme.mediaQueries.phone} {
    margin: unset;
    margin: ${theme.spacing.small} 0 ${theme.spacing.medium} 0;
  }
`

export const Input_Checkbox = styled(Input)`
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
