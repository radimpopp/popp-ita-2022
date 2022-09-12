import { theme } from '../helpers/themes'
import React, { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

export const buttonStyles = css`
  margin: ${theme.spacing.small};
  font-size: ${theme.fontSize.medium};
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${theme.color.black};
`

export const Button_Button = styled.button`
  ${buttonStyles}
  width: ${theme.spacing.superSize};
  height: ${theme.spacing.large};
`

export const Button_CustomButton = styled(Button_Button)`
  width: 200px;
  height: 40px;
  padding: ${theme.spacing.small};
  border-radius: 10px;
  background: ${theme.color.white};
  color: ${theme.color.black};
  &:hover {
    background: ${theme.color.salmon};
    color: ${theme.color.white};
    transition: 0.3s;
  }
`
