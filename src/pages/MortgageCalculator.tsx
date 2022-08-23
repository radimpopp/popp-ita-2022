import { H1_MainHeadingYellow } from '../components/MainHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Input_Input } from '../components/input'
import { P_BodyText, P_BodyTextWhiteEdition } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { breakpointsMediaQueries, theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const formatter = (amount: number) =>
  new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
  })
    .format(amount)
    .replace(/-/g, '')

const calculatePayment = (arg: { loan: number; rate: number; months: number }) => {
  const rateMonthlyPercentage = arg.rate / 100 / 12
  const monthlyPaymentFormula =
    (arg.loan * rateMonthlyPercentage * Math.pow(1 + rateMonthlyPercentage, arg.months)) /
    (Math.pow(1 + rateMonthlyPercentage, arg.months) - 1)

  const calculateMortgage = [
    {
      monthlyPaidAmount: monthlyPaymentFormula,
      monthlyPaidPrincipal: monthlyPaymentFormula - arg.loan * rateMonthlyPercentage,
      monthlyPaidInterest: arg.loan * rateMonthlyPercentage,
      remain: arg.loan - (monthlyPaymentFormula - arg.loan * rateMonthlyPercentage),
    },
  ]

  Array.from({ length: arg.months - 1 }).forEach((x, i) => {
    const monthlyPaidAmount = monthlyPaymentFormula
    const monthlyPaidPrincipal =
      monthlyPaymentFormula - calculateMortgage[i].remain * rateMonthlyPercentage
    const monthlyPaidInterest = calculateMortgage[i].remain * rateMonthlyPercentage
    const remain =
      calculateMortgage[i].remain -
      (monthlyPaymentFormula - calculateMortgage[i].remain * rateMonthlyPercentage)
    calculateMortgage.push({
      monthlyPaidAmount: monthlyPaidAmount,
      monthlyPaidPrincipal: monthlyPaidPrincipal,
      monthlyPaidInterest: monthlyPaidInterest,
      remain: remain,
    })
  })

  return calculateMortgage
}

export const MortgageCalculator = () => {
  const [loan, setLoan] = useState(100000)
  const [rate, setRate] = useState(5)
  const [months, setMonths] = useState(48)
  const [windowWidth, setWindowWidth] = useState(0)

  const mortgageData = calculatePayment({ loan, rate, months })
  useEffect(() => {
    const resizeHandler = () => setWindowWidth(window.innerWidth)
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

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
              defaultValue={loan}
              onChange={e => setLoan(Number(e.target.value))}
              autoComplete='off'
              min='0'
            />
            <P_BodyTextYellow>Interest rate (%):</P_BodyTextYellow>
            <Input_MortgageInput
              type='number'
              defaultValue={rate}
              onChange={e => setRate(Number(e.target.value))}
              autoComplete='off'
              min='0'
            />
            <P_BodyTextYellow>Loan term (months):</P_BodyTextYellow>
            <Input_MortgageInput
              type='number'
              defaultValue={months}
              onChange={e => setMonths(Number(e.target.value))}
              autoComplete='off'
              min='0'
            />
          </Div_InputContainer>
        </form>
        {windowWidth > breakpointsMediaQueries.table ? (
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
                        {formatter(data.monthlyPaidAmount)}
                      </P_BodyTextWhiteEdition>
                    </td>
                    <td>
                      <P_BodyTextWhiteEdition>
                        {formatter(data.monthlyPaidInterest)}
                      </P_BodyTextWhiteEdition>
                    </td>
                    <td>
                      <P_BodyTextWhiteEdition>
                        {formatter(data.monthlyPaidPrincipal)}
                      </P_BodyTextWhiteEdition>
                    </td>
                    <td>
                      <P_BodyTextWhiteEdition>{formatter(data.remain)}</P_BodyTextWhiteEdition>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table_Styled>
          </Div_Table>
        ) : (
          <>
            {mortgageData.map((data, i) => (
              <Div_MobileTable key={i}>
                <P_BodyTextWhiteTable>Month: {i + 1}.</P_BodyTextWhiteTable>
                <P_BodyTextWhiteTable>
                  Monthly Payment: {formatter(data.monthlyPaidAmount)}
                </P_BodyTextWhiteTable>
                <P_BodyTextWhiteTable>
                  Interest Paid: {formatter(data.monthlyPaidInterest)}
                </P_BodyTextWhiteTable>
                <P_BodyTextWhiteTable>
                  Principal Paid: {formatter(data.monthlyPaidPrincipal)}
                </P_BodyTextWhiteTable>
                <P_BodyTextWhiteTable>Remain: {formatter(data.remain)}</P_BodyTextWhiteTable>
              </Div_MobileTable>
            ))}
          </>
        )}
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

const Div_MobileTable = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding-left: ${theme.spacing.extraSmall};
  margin-bottom: ${theme.spacing.medium};
  ${theme.mediaQueries.phone} {
    width: 80vw;
  }
  ${theme.mediaQueries.galaxyFold} {
    width: 95vw;
  }
`

const P_BodyTextWhiteTable = styled(P_BodyTextWhiteEdition)`
  padding: unset;
  margin: ${theme.spacing.small};
  &:not(:last-child) {
    padding-bottom: unset;
  }
`
