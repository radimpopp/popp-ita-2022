import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { H1_MainHeading } from '../components/MainHeading'
import { Helmet } from 'react-helmet-async'
import { Input_Input } from '../components/input'
import { P_BodyText, P_BodyTextWhiteEdition } from '../components/BodyText'
import { breakpointsMediaQueries, theme } from '../helpers/themes'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const formatMoney = (amount: number) =>
  new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
  })
    .format(amount)
    .replace(/-/g, '')

const decimals = (amount: number) => Math.round(amount * 1e2) / 1e2
const calculatePayment = (arg: {
  loan: number
  rate: number
  years: number
  inflation: number
}) => {
  const months = arg.years * 12
  const rateMonthlyPercentage = arg.rate / 100 / 12
  const monthlyPaymentFormula =
    (arg.loan * rateMonthlyPercentage * Math.pow(1 + rateMonthlyPercentage, months)) /
    (Math.pow(1 + rateMonthlyPercentage, months) - 1)
  const loanInflation = (i: number) => Math.pow(1 + -arg.inflation / 100, i / 12)
  const propertyValueMonthlyIncrease = (i: number) => Math.pow(1 + arg.inflation / 100, i / 12)

  const calculateMortgage = [
    {
      monthlyPaidAmount: monthlyPaymentFormula,
      monthlyPaidPrincipal: monthlyPaymentFormula - arg.loan * rateMonthlyPercentage,
      monthlyPaidInterest: arg.loan * rateMonthlyPercentage,
      remain: arg.loan - (monthlyPaymentFormula - arg.loan * rateMonthlyPercentage),
      remainInflation: arg.loan - (monthlyPaymentFormula - arg.loan * rateMonthlyPercentage),
      monthlyPaidPrincipalInflation: monthlyPaymentFormula - arg.loan * rateMonthlyPercentage,
      monthlyPaidInterestInflation: arg.loan * rateMonthlyPercentage,
      propertyValue: arg.loan * propertyValueMonthlyIncrease(1),
    },
  ]

  Array.from({ length: months - 1 }).forEach((x, i) => {
    const monthlyPaidAmount = monthlyPaymentFormula
    const propertyValue = arg.loan * propertyValueMonthlyIncrease(2)
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
      remainInflation: remain * loanInflation(i),
      monthlyPaidPrincipalInflation: monthlyPaidPrincipal * loanInflation(i),
      monthlyPaidInterestInflation: monthlyPaidInterest * loanInflation(i),
      propertyValue: propertyValue * propertyValueMonthlyIncrease(i),
    })
  })

  return calculateMortgage
}

type DataCalculatePayment = ReturnType<typeof calculatePayment>

export const MortgageCalculator = () => {
  const [loan, setLoan] = useState(5_000_000)
  const [rate, setRate] = useState(5)
  const [years, setYears] = useState(15)
  const [windowWidth, setWindowWidth] = useState(0)
  const [inflation, setInflation] = useState(4)

  const mortgageData = calculatePayment({ loan, rate, years, inflation })

  useEffect(() => {
    const resizeHandler = () => setWindowWidth(window.innerWidth)
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  const isData = loan > 0 && rate > 0 && years > 0

  return (
    <Div_MortgageAppContainer>
      <Helmet>
        <title>Radim Popp / Mortgage Calculator</title>
      </Helmet>
      <H1_MainHeading>Mortgage Calculator</H1_MainHeading>
      <form>
        <Div_InputContainer>
          <P_BodyTextGrey>Total loan amount (CZK):</P_BodyTextGrey>
          <Input_MortgageInput
            type='number'
            defaultValue={loan}
            onChange={e => setLoan(Number(e.target.value))}
            autoComplete='off'
            min='0'
          />
          <P_BodyTextGrey>Interest rate (%):</P_BodyTextGrey>
          <Input_MortgageInput
            type='number'
            defaultValue={rate}
            onChange={e => setRate(Number(e.target.value))}
            autoComplete='off'
            min='0'
          />
          <P_BodyTextGrey>Loan term (years):</P_BodyTextGrey>
          <Input_MortgageInput
            type='number'
            defaultValue={years}
            onChange={e => setYears(Number(e.target.value))}
            autoComplete='off'
            min='0'
          />
          <P_BodyTextGrey>Inflation (%):</P_BodyTextGrey>
          <Input_MortgageInput
            type='number'
            defaultValue={inflation}
            onChange={e => setInflation(Number(e.target.value))}
            autoComplete='off'
          />
        </Div_InputContainer>
      </form>
      {isData && <Charts calculatePayment={mortgageData} />}
      {isData && (
        <>
          {windowWidth > breakpointsMediaQueries.bigPhone ? (
            <Div_Table>
              <Table_Styled>
                <thead>
                  <tr>
                    <th>
                      <P_BodyTextWhiteEdition>Month / Year</P_BodyTextWhiteEdition>
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
                        <P_BodyTextWhiteEdition>
                          {Math.ceil((i + 1) / 12) > 1
                            ? i + 1 - 12 * (Math.ceil((i + 1) / 12) - 1)
                            : i + 1}
                          {''} / {Math.ceil((i + 1) / 12)}
                        </P_BodyTextWhiteEdition>
                      </td>
                      <td>
                        <P_BodyTextWhiteEdition>
                          {formatMoney(data.monthlyPaidAmount)}
                        </P_BodyTextWhiteEdition>
                      </td>
                      <td>
                        <P_BodyTextWhiteEdition>
                          {formatMoney(data.monthlyPaidInterest)}
                        </P_BodyTextWhiteEdition>
                      </td>
                      <td>
                        <P_BodyTextWhiteEdition>
                          {formatMoney(data.monthlyPaidPrincipal)}
                        </P_BodyTextWhiteEdition>
                      </td>
                      <td>
                        <P_BodyTextWhiteEdition>{formatMoney(data.remain)}</P_BodyTextWhiteEdition>
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
                    Monthly Payment: {formatMoney(data.monthlyPaidAmount)}
                  </P_BodyTextWhiteTable>
                  <P_BodyTextWhiteTable>
                    Interest Paid: {formatMoney(data.monthlyPaidInterest)}
                  </P_BodyTextWhiteTable>
                  <P_BodyTextWhiteTable>
                    Principal Paid: {formatMoney(data.monthlyPaidPrincipal)}
                  </P_BodyTextWhiteTable>
                  <P_BodyTextWhiteTable>Remain: {formatMoney(data.remain)}</P_BodyTextWhiteTable>
                </Div_MobileTable>
              ))}
            </>
          )}
        </>
      )}
    </Div_MortgageAppContainer>
  )
}

const Charts = (props: { calculatePayment: DataCalculatePayment }) => {
  const chartData = props.calculatePayment.map((data, i) => ({
    months: i + 1,
    'Interest Paid': decimals(data.monthlyPaidInterest),
    'Interest Paid Inflation': decimals(data.monthlyPaidInterestInflation),
    'Principal Paid': decimals(data.monthlyPaidPrincipal),
    'Principal Paid Inflation': decimals(data.monthlyPaidPrincipalInflation),
    Remain: decimals(data.remain),
    'Remain Inflation': decimals(data.remainInflation),
    'Property Value': decimals(data.propertyValue),
  }))

  return (
    <Div_Charts>
      <ResponsiveContainer width='80%' height={400}>
        <LineChart
          width={450}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 40,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke={theme.color.white} strokeDasharray='1 1' />
          <XAxis dataKey='months' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='Remain' stroke={theme.color.orangeBright} />
          <Line type='monotone' dataKey='Remain Inflation' stroke={theme.color.yellowBright} />
          <Line type='monotone' dataKey='Property Value' stroke={theme.color.salmon} />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width='80%' height={400}>
        <LineChart
          width={450}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 40,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke={theme.color.white} strokeDasharray='1 1' />
          <XAxis dataKey='months' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='Interest Paid' stroke={theme.color.orangeBright} />
          <Line type='monotone' dataKey='Interest Paid Inflation' stroke='red' />
          <Line type='monotone' dataKey='Principal Paid' stroke={theme.color.yellowBright} />
          <Line type='monotone' dataKey='Principal Paid Inflation' stroke={theme.color.salmon} />
        </LineChart>
      </ResponsiveContainer>
    </Div_Charts>
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

const P_BodyTextGrey = styled(P_BodyText)`
  margin-top: ${theme.spacing.medium};
  padding-bottom: ${theme.spacing.medium};
  color: ${theme.color.greyBright};
`

const Input_MortgageInput = styled(Input_Input)`
  margin: unset;
  border-radius: 5px;
  border: 2px solid ${theme.color.greyBright};
  &:focus {
    border: 2px solid ${theme.color.salmon};
  }
  ${theme.mediaQueries.tablet} {
    width: 60vw;
  }
`

const Div_Table = styled.div`
  border: 1px solid ${theme.color.white};
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
  border: 1px solid ${theme.color.white};
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

const Div_Charts = styled.div`
  width: 90vw;
  min-height: 100%;
  margin: ${theme.spacing.small} 0 ${theme.spacing.extraLarge} 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${theme.mediaQueries.tablet} {
    flex-direction: column;
    align-items: center;
  }
`
