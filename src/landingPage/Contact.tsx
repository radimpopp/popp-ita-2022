import { P_BodyTextWhiteEdition } from '../components/BodyText'
import { theme } from '../helpers/themes'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

export const Contact = () => {
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputMessage, setInputMessage] = useState('')
  const form = useRef(null as HTMLFormElement | null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const currentForm = form.current
    if (currentForm === null) return
    emailjs.sendForm('service_7pu1fgj', 'template_uifmyby', currentForm, 'RqtRSlR0xLa53cJ0G').then(
      res => {
        alert('The email was sent.')
        setInputEmail('')
        setInputName('')
        setInputMessage('')
      },
      error => {
        alert('Something went wrong. ' + error)
      }
    )
  }

  return (
    <Div_StyledContactForm>
      <Form_Styled ref={form} onSubmit={sendEmail}>
        <P_BodyTextWhiteEdition>Name:</P_BodyTextWhiteEdition>
        <Input_Styled
          value={inputName}
          type='text'
          name='user_name'
          required
          onChange={e => {
            setInputName(e.target.value)
          }}
        />
        <P_BodyTextWhiteEdition>Email:</P_BodyTextWhiteEdition>
        <Input_Styled
          value={inputEmail}
          type='email'
          name='user_email'
          required
          onChange={e => {
            setInputEmail(e.target.value)
          }}
        />
        <P_BodyTextWhiteEdition>Message:</P_BodyTextWhiteEdition>
        <Textarea_styled
          value={inputMessage}
          name='message'
          required
          onChange={e => {
            setInputMessage(e.target.value)
          }}
        />
        <Input_Button type='submit' value='Send' />
      </Form_Styled>
    </Div_StyledContactForm>
  )
}

const Div_StyledContactForm = styled.div`
  width: 500px;
  height: 60vh;
  ${theme.mediaQueries.tablet} {
    width: 80%;
  }
`

const Form_Styled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
`

const Input_Styled = styled.input`
  width: 100%;
  height: 35px;
  padding: 7px;
  outline: none;
  border-radius: 5px;
  border: 2px solid ${theme.color.white};
  &:focus {
    border: 2px solid ${theme.color.salmon};
  }
  ${theme.mediaQueries.tablet} {
    height: 20px;
  }
`

const Textarea_styled = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  max-height: 100px;
  min-height: 100px;
  padding: 7px;
  outline: none;
  border-radius: 5px;
  border: 2px solid ${theme.color.white};
  &:focus {
    border: 2px solid ${theme.color.salmon};
  }
`

const Input_Button = styled.input`
  width: 40%;
  height: ${theme.spacing.extraLarge};
  margin-top: 3rem;
  font-size: ${theme.fontSize.medium};
  cursor: pointer;
  background: ${theme.color.white};
  color: ${theme.color.black};
  border-radius: 10px;
  &:hover {
    background: ${theme.color.salmon};
    color: ${theme.color.white};
    transition: 0.3s;
  }
`
