import { Helmet } from 'react-helmet-async'
import { hackerCode } from './hackercode'
import { theme } from '../../helpers/themes'
import { useState } from 'react'
import React from 'react'
import styled, { css } from 'styled-components'

export const HackerTyper = () => {
  const [codeDelimiterIndex, setCodeDelimiterIndex] = useState(0)
  const [accessAlertMessage, setAccessAlertMessage] = useState<
    'ACCESS DENIED!!!' | 'ACCESS GRANTED' | null
  >(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.shiftKey) {
      setAccessAlertMessage('ACCESS DENIED!!!')
    } else if (e.key === 'Enter') {
      setAccessAlertMessage('ACCESS GRANTED')
    } else if (e.key === 'Escape') {
      setAccessAlertMessage(null)
    }
  }

  const startHacking = () => {
    const codeFragment = codeDelimiterIndex + 4
    if (!accessAlertMessage)
      setCodeDelimiterIndex(codeFragment >= hackerCode.length ? 0 : codeFragment)
  }

  return (
    <Div_HackerContainer>
      <Helmet>
        <title>Radim Popp/HackerTyper</title>
        <meta
          name='Description'
          content='Do you want to become a hacker? This app is a good start!'
        />
      </Helmet>
      {accessAlertMessage ? (
        <div>
          {accessAlertMessage === 'ACCESS DENIED!!!' ? (
            <Div_AccessDenied>{accessAlertMessage}</Div_AccessDenied>
          ) : (
            <Div_AccessGranted>{accessAlertMessage}</Div_AccessGranted>
          )}
        </div>
      ) : null}
      <Textarea_HackerArea
        onKeyDown={handleKeyDown}
        value={hackerCode.substring(0, codeDelimiterIndex)}
        onChange={startHacking}
        spellCheck={'false'}
        autoFocus={true}
      />
    </Div_HackerContainer>
  )
}

const Div_HackerContainer = styled.div`
  width: 100vw;
  height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${theme.color.black};
`

const Textarea_HackerArea = styled.textarea`
  width: 90%;
  height: 78%;
  margin: ${theme.spacing.small} 0 ${theme.spacing.large} 0;
  padding: ${theme.spacing.large};
  background: ${theme.color.black};
  color: #03a062;
  resize: none;
  font-size: ${theme.fontSize.small};
  word-break: break-all;
  hyphens: none;
  border-radius: 5px;
  border: 1px solid ${theme.color.greyDark};
  ${theme.mediaQueries.phone} {
    width: 80%;
  }
`

const alertStyles = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${theme.spacing.large};
  font-size: 7vw;
  font-weight: ${theme.fontWeight.bold};
  white-space: nowrap;
  background-color: ${theme.color.black};
  ${theme.mediaQueries.phone} {
    font-size: 8vw;
  }
`

const Div_AccessDenied = styled.div`
  ${alertStyles}
  color: red;
  border: ${theme.spacing.extraSmall} solid red;
`

const Div_AccessGranted = styled.div`
  ${alertStyles}
  color: green;
  border: ${theme.spacing.extraSmall} solid green;
  animation: blinker 1s infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`
