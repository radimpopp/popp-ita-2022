import { P_BodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { theme } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

type CardProps = {
  toApp: string
  toGit: string
  srcPreview: string
  srcGit: string
  altPreview: string
  altGit: string
  title: string
}

export const Card = (props: CardProps) => {
  return (
    <Div_CardContainer>
      <Div_CardTitle>
        <RouterLink to={props.toApp}>
          <P_CardText>{props.title}</P_CardText>
        </RouterLink>
        <a href={props.toGit}>
          <Img_Logo src={props.srcGit} alt={props.altGit} />
        </a>
      </Div_CardTitle>
      <RouterLink to={props.toApp}>
        <Img_Card src={props.srcPreview} alt={props.altPreview} />
      </RouterLink>
    </Div_CardContainer>
  )
}

const Div_CardContainer = styled.div`
  width: 40vw;
  min-width: 230px;
  background-color: ${theme.color.white};
  border: 4px solid ${theme.color.black};
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s ease;
  transform: scale(1);
  &:hover {
    transition: 1s ease;
    transform: scale(1.1);
  }
  ${theme.mediaQueries.galaxyFold} {
    min-width: 180px;
  }
`

const Div_CardTitle = styled.div`
  width: 90%;
  border-bottom: 4px solid ${theme.color.black};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Img_Card = styled.img`
  width: 90%;
  height: 90%;
  margin: ${theme.spacing.large};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const P_CardText = styled(P_BodyText)`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
  text-align: center;
  margin: ${theme.spacing.large};
  &:not(:last-child) {
    padding-bottom: unset;
  }
  ${theme.mediaQueries.tablet} {
    margin: ${theme.spacing.medium};
  }
  ${theme.mediaQueries.phone} {
    margin: ${theme.spacing.small};
    font-size: ${theme.fontSize.medium};
  }
`

const Img_Logo = styled.img`
  width: 40px;
  ${theme.mediaQueries.phone} {
    width: 35px;
  }
`
