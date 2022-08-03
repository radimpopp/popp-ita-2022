import { colors, fonts, spacing } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

type CounterButtonProps = {
  onClick: () => void
  children: string
}

export class CounterButton extends React.Component<CounterButtonProps> {
  render() {
    return (
      <StyledCounterButton onClick={this.props.onClick}>{this.props.children}</StyledCounterButton>
    )
  }
}

const StyledCounterButton = styled.button`
  background-color: ${colors.orange100};
  padding: ${spacing.small} ${spacing.large};
  margin: ${spacing.medium};
  font-size: ${fonts.fontMedium};
  border-radius: 10%;
`
