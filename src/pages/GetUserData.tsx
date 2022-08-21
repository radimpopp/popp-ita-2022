import { H1_MainHeadingYellow } from '../components/MainHeading'
import { Input_Input } from '../components/input'
import { P_BodyTextWhiteEdition } from '../components/BodyText'
import { theme } from '../helpers/themes'
import React, { useState } from 'react'
import styled from 'styled-components'

export const GetUserData = () => {
  const [userData, setUserData] = useState(
    [] as { id: number; name: string; email: string; gender: string }[]
  )
  const [err, setErr] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isData, setIsData] = useState(false)

  return (
    <Div_BackendContainer>
      <H1_MainHeadingYellow>Get user data</H1_MainHeadingYellow>
      <Form_Styled
        onSubmit={async e => {
          e.preventDefault()
          if (searchTerm.length === 0) {
            return
          } else {
            try {
              const response = await fetch('http://localhost:3500/' + searchTerm)
              setUserData(await response.json())
              setErr(false)
              setIsData(true)
            } catch (err) {
              setErr(true)
              setIsData(false)
            }
          }
        }}
      >
        <Input_Http
          type='text'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          autoFocus={true}
          autoComplete='off'
        />
      </Form_Styled>
      {err && <P_BodyTextWhiteEdition>Data unavailable</P_BodyTextWhiteEdition>}
      {isData ? (
        <div>
          <Div_GridTitles>
            <P_BodyTextWhite>User ID</P_BodyTextWhite>
            <P_BodyTextWhite>Name</P_BodyTextWhite>
            <P_BodyTextWhite>Email</P_BodyTextWhite>
            <P_BodyTextWhite>Gender</P_BodyTextWhite>
          </Div_GridTitles>
          {userData.map(i => (
            <Div_Grid key={i.id}>
              <P_BodyTextWhite>{i.id}:</P_BodyTextWhite>
              <P_BodyTextWhite>{i.name}</P_BodyTextWhite>
              <P_BodyTextWhite>{i.email}</P_BodyTextWhite>
              <P_BodyTextWhite>{i.gender}</P_BodyTextWhite>
            </Div_Grid>
          ))}
        </div>
      ) : (
        ''
      )}
    </Div_BackendContainer>
  )
}
const Div_BackendContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.black};
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const P_BodyTextWhite = styled(P_BodyTextWhiteEdition)`
  padding: unset;
  margin: unset;
  &:not(:last-child) {
    padding-bottom: ${theme.spacing.medium};
  }
`

const Input_Http = styled(Input_Input)`
  margin: ${theme.spacing.medium} 0 ${theme.spacing.large} 0;
`

const Form_Styled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Div_Grid = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  ${theme.mediaQueries.tablet} {
    grid: unset;
    display: flex;
    flex-direction: column;
    padding-bottom: ${theme.spacing.extraLarge};
  }
`

const Div_GridTitles = styled(Div_Grid)`
  ${theme.mediaQueries.tablet} {
    display: none;
  }
`
