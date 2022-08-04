import { theme } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

type CounterButtonProps = {
  onClick: () => void
  children: string
}

export class CounterButton extends React.Component<CounterButtonProps> {
  render() {
    return (
      <Button_CounterButton onClick={this.props.onClick}>
        {this.props.children}
      </Button_CounterButton>
    )
  }
}

const Button_CounterButton = styled.button`
  background-color: ${theme.color.orangeBright};
  margin: ${theme.spacing.small};
  font-size: ${theme.fontSize.medium};
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.spacing.superSize};
  height: ${theme.spacing.large};
`
