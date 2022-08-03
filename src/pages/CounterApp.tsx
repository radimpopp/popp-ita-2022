import { CounterButton } from '../components/CounterButton'
import { StyledMainHeadings } from '../components/MainHeading'
import React from 'react'
import styled from 'styled-components'

type Props = {}
type State = {
  counter: number
}

export class CounterApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }
  render() {
    return (
      <Div_StyledCounterApp>
        <H1_CounterHeading>{this.state.counter}</H1_CounterHeading>
        <CounterButton
          onClick={() => {
            this.setState({
              counter: this.state.counter - 1,
            })
          }}
        >
          -
        </CounterButton>
        <CounterButton
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            })
          }}
        >
          +
        </CounterButton>
      </Div_StyledCounterApp>
    )
  }
}

const Div_StyledCounterApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const H1_CounterHeading = styled.h1`
  ${StyledMainHeadings}
`
