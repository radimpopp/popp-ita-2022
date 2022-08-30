import { Button_CustomButton } from '../../components/Button'
import { CreateStateContext } from './CreateArticleContext'
import { H2_FormHeading } from '../../components/SubHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Input_Input } from '../../components/input'
import { P_BodyText, P_BodyTextWhiteEdition } from '../../components/BodyText'
import { RouterLink } from '../../components/RouterLink'
import { theme } from '../../helpers/themes'
import { urls } from '../../helpers/urls'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const CreateArticle = () => {
  const blogLogic = useContext(CreateStateContext)

  return (
    <HelmetProvider>
      <Helmet>
        <title>Radim Popp / Blog / Create Article</title>
      </Helmet>
      <Div_CreateContainer>
        <Form_Styled
          onSubmit={e => {
            e.preventDefault()
            blogLogic.newArticle()
          }}
        >
          <Div_InputsContainer>
            <Div_InputContainer>
              <H2_BlogInputLabel>Title:</H2_BlogInputLabel>
              <Input_Styled
                type='text'
                value={blogLogic.title}
                onChange={e => blogLogic.setTitle(e.target.value)}
                autoComplete='off'
                spellCheck={'false'}
              />
            </Div_InputContainer>
            <Div_InputContainer>
              <H2_BlogInputLabel>Author:</H2_BlogInputLabel>
              <Input_Styled
                type='text'
                value={blogLogic.author}
                onChange={e => blogLogic.setAuthor(e.target.value)}
                autoComplete='off'
                spellCheck={'false'}
              />
            </Div_InputContainer>
          </Div_InputsContainer>
          <Div_ErrContainer>
            <P_BodyTextWhiteBlog>
              {blogLogic.titleErr}
              {blogLogic.authorErr}
              {blogLogic.contentErr}
            </P_BodyTextWhiteBlog>
          </Div_ErrContainer>
          <H2_FormHeading>Content:</H2_FormHeading>
          <Textarea_Styled
            value={blogLogic.content}
            onChange={e => blogLogic.setContent(e.target.value)}
            spellCheck={'false'}
          />
          <Div_ButtonContainer>
            <Button_BlogSubmit type='submit'>
              <P_BodyText>submit</P_BodyText>
            </Button_BlogSubmit>
          </Div_ButtonContainer>
        </Form_Styled>
        <RouterLink to={urls.homeUrl}>
          <P_BodyTextWhiteEdition>Return home</P_BodyTextWhiteEdition>
        </RouterLink>
      </Div_CreateContainer>
    </HelmetProvider>
  )
}

const Div_CreateContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Textarea_Styled = styled.textarea`
  margin: ${theme.spacing.medium} 0 ${theme.spacing.large} 0;
  width: 80vw;
  height: 32vh;
  padding: ${theme.spacing.medium};
  border: 2px solid ${theme.color.orangeBright};
  border-radius: 10px;
  background-color: ${theme.color.black};
  color: #ffffff;
  resize: none;
  font-size: ${theme.fontSize.medium};
  word-break: break-all;
  hyphens: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Div_InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${theme.mediaQueries.tablet} {
    width: 90%;
    margin-top: ${theme.spacing.large};
    flex-direction: column;
    align-items: center;
  }
  ${theme.mediaQueries.phone} {
    margin-top: 100px;
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
  }
  ${theme.mediaQueries.phone} {
    width: 80vw;
  }
`

const Button_BlogSubmit = styled(Button_CustomButton)`
  width: 200px;
`

const Form_Styled = styled.form`
  width: 80%;
  margin-top: 130px;
  ${theme.mediaQueries.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacing.medium};
`

const H2_BlogInputLabel = styled(H2_FormHeading)`
  width: 80px;
  text-align: right;
  ${theme.mediaQueries.phone} {
    text-align: left;
  }
`

const P_BodyTextWhiteBlog = styled(P_BodyTextWhiteEdition)`
  margin: unset;
`
