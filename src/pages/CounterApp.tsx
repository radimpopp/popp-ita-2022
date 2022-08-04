import { CounterButton } from '../components/CounterButton'
import { H1_MainHeading } from '../components/MainHeading'
import { P_BodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { urls } from '../helpers/urls'
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
        <H1_MainHeading>{this.state.counter}</H1_MainHeading>
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
        <RouterLink to={urls.homeUrl}>
          <P_BodyText>Return home</P_BodyText>
        </RouterLink>
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
