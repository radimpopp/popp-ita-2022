import { H1_MainHeadingYellow } from '../components/MainHeading'
import { Input_Input } from '../components/input'
import { P_BodyTextWhiteEdition } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { serviceLayers } from '../helpers/serviceLayers'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

export const GetUserData = () => {
  const [userData, setUserData] = useState(
    [] as { id: number; name: string; email: string; gender: string }[]
  )
  const [err, setErr] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <Div_BackendContainer>
      <H1_MainHeadingYellow>Get user data</H1_MainHeadingYellow>
      <Form_Styled
        onSubmit={async e => {
          e.preventDefault()
          if (searchTerm.length === 0) return
          try {
            setLoading(true)
            const response = await fetch(serviceLayers.apiUrl + searchTerm)
            if (!response.ok) {
              throw err
            }
            setUserData(await response.json())
            setErr(false)
          } catch (err) {
            setErr(true)
          } finally {
            setLoading(false)
          }
        }}
      >
        <Input_Http
          type='text'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          autoFocus={true}
          autoComplete='off'
          spellCheck={false}
        />
      </Form_Styled>
      {loading && <P_BodyTextWhite>Loading...</P_BodyTextWhite>}
      {err && <P_BodyTextWhite>Data unavailable</P_BodyTextWhite>}
      {userData.length > 0 && (
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
      )}
      <RouterLink to={urls.homeUrl}>
        <P_BodyTextWhiteEdition>Return home</P_BodyTextWhiteEdition>
      </RouterLink>
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
  text-align: center;
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
