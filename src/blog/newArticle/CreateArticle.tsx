import { Button_CustomButton } from '../../components/Button'
import { CreateStateContext } from './CreateArticleContext'
import { H2_FormHeading } from '../../components/SubHeading'
import { Helmet } from 'react-helmet-async'
import { Input_Input } from '../../components/input'
import { P_BodyText, P_BodyTextWhiteEdition } from '../../components/BodyText'
import { theme } from '../../helpers/themes'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const CreateArticle = () => {
  const blogLogic = useContext(CreateStateContext)

  return (
    <Div_CreateContainer>
      <Helmet>
        <title>Radim Popp / Blog / Create Article</title>
      </Helmet>
      <Form_Styled
        onSubmit={e => {
          e.preventDefault()
          const isValid = blogLogic.validateInputs()
          if (!isValid) return
          blogLogic.newArticle()
        }}
      >
        <Div_InputsContainer>
          <Div_InputContainer>
            <H2_BlogInputLabel>Title:</H2_BlogInputLabel>
            <Input_Styled
              type='text'
              value={blogLogic.title}
              onChange={e => {
                blogLogic.setTitleErr(null)
                blogLogic.setTitle(e.target.value)
              }}
              autoComplete='off'
              spellCheck={'false'}
            />
          </Div_InputContainer>
          <Div_InputContainer>
            <H2_BlogInputLabel>Author:</H2_BlogInputLabel>
            <Input_Styled
              type='text'
              value={blogLogic.author}
              onChange={e => {
                blogLogic.setAuthorErr(null)
                blogLogic.setAuthor(e.target.value)
              }}
              autoComplete='off'
              spellCheck={'false'}
            />
          </Div_InputContainer>
        </Div_InputsContainer>
        <Div_ErrContainer>
          <P_BodyTextWhiteBlog>{blogLogic.titleErr}</P_BodyTextWhiteBlog>
          <P_BodyTextWhiteBlog>{blogLogic.authorErr}</P_BodyTextWhiteBlog>
          <P_BodyTextWhiteBlog>{blogLogic.contentErr}</P_BodyTextWhiteBlog>
        </Div_ErrContainer>
        <H2_FormHeading>Content:</H2_FormHeading>
        <Div_Textarea>
          <Textarea_Styled
            value={blogLogic.content}
            onChange={e => {
              blogLogic.setContentErr(null)
              blogLogic.setContent(e.target.value)
            }}
            spellCheck={'false'}
          />
        </Div_Textarea>
        <Div_ButtonContainer>
          <Button_BlogSubmit type='submit'>
            <P_BodyText>submit</P_BodyText>
          </Button_BlogSubmit>
        </Div_ButtonContainer>
      </Form_Styled>
    </Div_CreateContainer>
  )
}

const Div_CreateContainer = styled.div`
  max-width: 100vw;
  min-height: 80vh;
  background-color: ${theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div_Textarea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Textarea_Styled = styled.textarea`
  margin: ${theme.spacing.medium} 0 ${theme.spacing.large} 0;
  width: 92%;
  height: 29vh;
  border: 2px solid ${theme.color.salmon};
  border-radius: 10px;
  background-color: ${theme.color.black};
  color: ${theme.color.white};
  resize: none;
  font-size: ${theme.fontSize.medium};
  word-break: break-all;
  hyphens: none;
`

const Div_InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${theme.mediaQueries.tablet} {
    width: 90%;
    margin-top: ${theme.spacing.small};
    flex-direction: column;
    align-items: center;
  }
  ${theme.mediaQueries.phone} {
    margin-top: ${theme.spacing.medium};
  }
`
const Div_InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${theme.mediaQueries.tablet} {
    justify-content: space-evenly;
  }
  ${theme.mediaQueries.phone} {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Input_Styled = styled(Input_Input)`
  width: 30vw;
  ${theme.mediaQueries.tablet} {
    width: 70vw;
    margin-top: ${theme.spacing.medium};
  }
  ${theme.mediaQueries.phone} {
    width: 80vw;
    margin-top: unset;
  }
`

const Button_BlogSubmit = styled(Button_CustomButton)`
  width: 200px;
`

const Form_Styled = styled.form`
  width: 90%;
  ${theme.mediaQueries.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Div_ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  ${theme.mediaQueries.tablet} {
    justify-content: center;
    width: 100%;
  }
`

const Div_ErrContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: ${theme.spacing.medium};
  padding-bottom: ${theme.spacing.small};
  ${theme.mediaQueries.tablet} {
    padding-top: ${theme.spacing.medium};
  }
  ${theme.mediaQueries.phone} {
    padding-top: ${theme.spacing.small};
  }
`

const H2_BlogInputLabel = styled(H2_FormHeading)`
  width: 80px;
  text-align: right;
  ${theme.mediaQueries.tablet} {
    margin-top: ${theme.spacing.medium};
  }
  ${theme.mediaQueries.phone} {
    text-align: left;
    margin-top: unset;
  }
`

const P_BodyTextWhiteBlog = styled(P_BodyTextWhiteEdition)`
  margin: unset;
  &:not(:last-child) {
    padding-bottom: ${theme.spacing.small};
  }
`
