import { hackerCode } from './hackercode'
import { theme } from '../helpers/themes'
import { useState } from 'react'
import React from 'react'
import styled, { css } from 'styled-components'

export const HackerTyper = () => {
  const [codeInterface, setCodeInterface] = useState(0)
  const [alert, setAlert] = useState<'ACCESS DENIED!!!' | 'ACCESS GRANTED' | null>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.shiftKey) {
      setAlert('ACCESS DENIED!!!')
    } else if (e.key === 'Enter') {
      setAlert('ACCESS GRANTED')
    } else if (e.key === 'Escape') {
      setAlert(null)
    }
  }

  const startHacking = () => {
    const codeFragment = codeInterface + 4
    !alert && setCodeInterface(codeFragment >= hackerCode.length ? 0 : codeFragment)
  }

  return (
    <Div_HackerContainer>
      {alert ? (
        <div>
          {alert === 'ACCESS DENIED!!!' ? (
            <Div_AccessDenied>{alert}</Div_AccessDenied>
          ) : (
            <Div_AccessGranted>{alert}</Div_AccessGranted>
          )}
        </div>
      ) : null}
      <Textarea_HackerArea
        onKeyDown={handleKeyDown}
        value={hackerCode.substring(0, codeInterface)}
        onChange={startHacking}
        spellCheck={'false'}
        autoFocus={true}
      />
    </Div_HackerContainer>
  )
}

const Div_HackerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: black;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Textarea_HackerArea = styled.textarea`
  width: 90%;
  height: 90%;
  padding: ${theme.spacing.large};
  background: ${theme.color.black};
  color: #03a062;
  resize: none;
  font-size: ${theme.fontSize.small};
  word-break: break-all;
  hyphens: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
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
