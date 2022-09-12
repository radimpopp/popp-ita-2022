import { Button_Button } from '../components/Button'
import { H1_MainHeading } from '../components/MainHeading'
import { Helmet } from 'react-helmet-async'
import { P_BodyTextWhiteEdition } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { theme } from '../helpers/themes'
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
        <Helmet>
          <title>Radim Popp/CounterApp</title>
          <meta
            name='Description'
            content='CounterApp - a good helper for anyone who cannot count to one!'
          />
        </Helmet>
        <H1_MainHeading>Counter App</H1_MainHeading>
        <H1_MainHeadingCounter>{this.state.counter}</H1_MainHeadingCounter>
        <Button_Button
          onClick={() => {
            this.setState({
              counter: this.state.counter - 1,
            })
          }}
        >
          -
        </Button_Button>
        <Button_Button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            })
          }}
        >
          +
        </Button_Button>
        <RouterLink to={urls.home}>
          <P_BodyTextWhiteEdition>Return home</P_BodyTextWhiteEdition>
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
  background-color: ${theme.color.black};
`

const H1_MainHeadingCounter = styled(H1_MainHeading)`
  font-family: 'Roboto', sans-serif;
  font-size: 4rem;
  padding-bottom: ${theme.spacing.large};
`
