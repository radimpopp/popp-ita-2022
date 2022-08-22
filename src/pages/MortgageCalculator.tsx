import { H1_MainHeadingYellow } from '../components/MainHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Input_Input } from '../components/input'
import { P_BodyText, P_BodyTextWhiteEdition } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

// https://stackoverflow.com/questions/16637051/adding-space-between-numbers
const spaceBetweenThreeNumbers = (amount: number) =>
  Math.abs(amount)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const calculatePayment = (loan: number, rate: number, months: number) => {
  const rateMonthlyPercentage = rate / 100 / 12
  const monthlyPaymentFormula =
    (loan * rateMonthlyPercentage * Math.pow(1 + rateMonthlyPercentage, months)) /
    (Math.pow(1 + rateMonthlyPercentage, months) - 1)

  const calculateMortgage = [
    {
      monthlyPaidAmount: monthlyPaymentFormula,
      monthlyPaidPrincipal: monthlyPaymentFormula - loan * rateMonthlyPercentage,
      monthlyPaidInterest: loan * rateMonthlyPercentage,
      remain: loan - (monthlyPaymentFormula - loan * rateMonthlyPercentage),
    },
  ]

  for (let i = 1; i < months; i++) {
    calculateMortgage.push({
      monthlyPaidAmount: monthlyPaymentFormula,
      monthlyPaidPrincipal:
        monthlyPaymentFormula - calculateMortgage[i - 1].remain * rateMonthlyPercentage,
      monthlyPaidInterest: calculateMortgage[i - 1].remain * rateMonthlyPercentage,
      remain:
        calculateMortgage[i - 1].remain -
        (monthlyPaymentFormula - calculateMortgage[i - 1].remain * rateMonthlyPercentage),
    })
  }

  return calculateMortgage
}

export const MortgageCalculator = () => {
  const [totalLoanAmount, setTotalLoanAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(5)
  const [loanTerm, setLoanTerm] = useState(48)

  const mortgageData = calculatePayment(totalLoanAmount, interestRate, loanTerm)

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
              defaultValue={totalLoanAmount}
              onChange={e => setTotalLoanAmount(Number(e.target.value))}
              autoComplete='off'
              min='0'
            />
            <P_BodyTextYellow>Interest rate (%):</P_BodyTextYellow>
            <Input_MortgageInput
              type='number'
              defaultValue={interestRate}
              onChange={e => setInterestRate(Number(e.target.value))}
              autoComplete='off'
              min='0'
            />
            <P_BodyTextYellow>Loan term (months):</P_BodyTextYellow>
            <Input_MortgageInput
              type='number'
              defaultValue={loanTerm}
              onChange={e => setLoanTerm(Number(e.target.value))}
              autoComplete='off'
              min='0'
            />
          </Div_InputContainer>
        </form>
        <Div_Table>
          <Table_Styled>
            <thead>
              <tr>
                <th>
                  <P_BodyTextWhiteEdition>Month</P_BodyTextWhiteEdition>
                </th>
                <th>
                  <P_BodyTextWhiteEdition>Monthly Payment</P_BodyTextWhiteEdition>
                </th>
                <th>
                  <P_BodyTextWhiteEdition>Interest Paid</P_BodyTextWhiteEdition>
                </th>
                <th>
                  <P_BodyTextWhiteEdition>Principal Paid</P_BodyTextWhiteEdition>
                </th>
                <th>
                  <P_BodyTextWhiteEdition>Remain</P_BodyTextWhiteEdition>
                </th>
              </tr>
            </thead>
            <tbody>
              {mortgageData.map((data, i) => (
                <tr key={i}>
                  <td>
                    <P_BodyTextWhiteEdition>{i + 1}.</P_BodyTextWhiteEdition>
                  </td>
                  <td>
                    <P_BodyTextWhiteEdition>
                      {spaceBetweenThreeNumbers(data.monthlyPaidAmount)}
                    </P_BodyTextWhiteEdition>
                  </td>
                  <td>
                    <P_BodyTextWhiteEdition>
                      {spaceBetweenThreeNumbers(data.monthlyPaidInterest)}
                    </P_BodyTextWhiteEdition>
                  </td>
                  <td>
                    <P_BodyTextWhiteEdition>
                      {spaceBetweenThreeNumbers(data.monthlyPaidPrincipal)}
                    </P_BodyTextWhiteEdition>
                  </td>
                  <td>
                    <P_BodyTextWhiteEdition>
                      {spaceBetweenThreeNumbers(data.remain)}
                    </P_BodyTextWhiteEdition>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table_Styled>
        </Div_Table>
        <RouterLink to={urls.homeUrl}>
          <P_BodyTextWhiteEdition>Return home</P_BodyTextWhiteEdition>
        </RouterLink>
      </Div_MortgageAppContainer>
    </HelmetProvider>
  )
}

const Div_MortgageAppContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.black};
`

const Div_InputContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.large} 0 ${theme.spacing.extraLarge} 0;
  ${theme.mediaQueries.tablet} {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

const P_BodyTextYellow = styled(P_BodyText)`
  margin-top: ${theme.spacing.medium};
  padding-bottom: ${theme.spacing.medium};
  color: ${theme.color.yellowBright};
`

const Input_MortgageInput = styled(Input_Input)`
  margin: unset;
  ${theme.mediaQueries.tablet} {
    width: 60vw;
  }
`

const Div_Table = styled.div`
  border: 1px solid #ffffff;
  border-radius: 10px;
`

const Table_Styled = styled.table`
  text-align: center;
  width: 85vw;
`
