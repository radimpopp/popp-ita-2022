import { Button_CustomButton } from '../components/Button'
import { H1_MainHeadingYellow } from '../components/MainHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Input_Input } from '../components/input'
import { P_BodyText, P_BodyTextWhiteEdition } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

const mortgageFormula = (loan: number, rate: number, months: number) => {
  const rateMonthlyPercentage = rate / 100 / 12
  if (loan > 0 && rate > 0 && months > 0)
    return (
      (loan * rateMonthlyPercentage * Math.pow(1 + rateMonthlyPercentage, months)) /
      (Math.pow(1 + rateMonthlyPercentage, months) - 1)
    )
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  else return null
}

export const MortgageCalculator = () => {
  const [totalLoanAmount, setTotalLoanAmount] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [loanTerm, setLoanTerm] = useState(0)
  const totalMonthlyPayment = mortgageFormula(totalLoanAmount, interestRate, loanTerm)

  const handleReset = () => {
    setTotalLoanAmount(0)
    setInterestRate(0)
    setLoanTerm(0)
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Radim Popp / Mortgage Calculator</title>
      </Helmet>
      <Div_MortgageAppContainer>
        <H1_MainHeadingYellow>Mortgage Calculator</H1_MainHeadingYellow>
        <form>
          <Div_InputContainer>
            <P_BodyTextYellow>Total loan amount (CZK):</P_BodyTextYellow>
            <Input_MortgageInput
              type='number'
              value={totalLoanAmount}
              onChange={e => setTotalLoanAmount(parseInt(e.target.value))}
              autoFocus={true}
              autoComplete='off'
            />
            <P_BodyTextYellow>Interest rate (%):</P_BodyTextYellow>
            <Input_MortgageInput
              type='number'
              value={interestRate}
              onChange={e => setInterestRate(parseInt(e.target.value))}
              autoFocus={false}
              autoComplete='off'
            />
            <P_BodyTextYellow>Loan term (months):</P_BodyTextYellow>
            <Input_MortgageInput
              type='number'
              value={loanTerm}
              onChange={e => setLoanTerm(parseInt(e.target.value))}
              autoFocus={false}
              autoComplete='off'
            />
          </Div_InputContainer>
        </form>
        <Div_ButtonContainer>
          <P_BodyTextWhiteEdition>
            The estimated monthly payment is: {totalMonthlyPayment} CZK.
          </P_BodyTextWhiteEdition>
          <Button_CustomButton onClick={handleReset}>Reset</Button_CustomButton>
        </Div_ButtonContainer>
        <RouterLink to={urls.homeUrl}>
          <P_BodyTextWhiteEdition>Return home</P_BodyTextWhiteEdition>
        </RouterLink>
      </Div_MortgageAppContainer>
    </HelmetProvider>
  )
}

const Div_MortgageAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.black};
`

const Div_InputContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.large} 0 ${theme.spacing.superSize} 0;
  ${theme.mediaQueries.tablet} {
    text-align: center;
  }
`

const Div_ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  white-space: unset;
  width: 80%;
`
const P_BodyTextYellow = styled(P_BodyText)`
  margin-top: ${theme.spacing.medium};
  padding-bottom: ${theme.spacing.medium};
  color: ${theme.color.yellowBright};
`

const Input_MortgageInput = styled(Input_Input)`
  margin: unset;
`
