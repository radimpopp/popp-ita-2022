import { theme } from '../helpers/themes'
import React, { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

export const buttonStyles = css`
  background-color: ${theme.color.orangeBright};
  margin: ${theme.spacing.small};
  font-size: ${theme.fontSize.medium};
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Button = (props: ComponentProps<'button'>) => {
  return <button {...props}>{props.children}</button>
}

export const Button_CustomButton = styled(Button)`
  ${buttonStyles}
  width: ${theme.spacing.superSize};
  height: ${theme.spacing.large};
`
