import { theme } from '../helpers/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'

type Markdown = {
  children: string
}

export const Markdown = (props: Markdown) => (
  <MarkdownStyled>
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.children}</ReactMarkdown>
  </MarkdownStyled>
)

const MarkdownStyled = styled.div`
  & > h1 {
    font-size: ${theme.fontSize.large};
    color: ${theme.color.yellowBright};
  }
  & > h2 {
    font-size: 2.8rem;
    color: ${theme.color.yellowBright};
  }
  & > h3 {
    font-size: 2.6rem;
    color: ${theme.color.yellowBright};
  }
  & > h4 {
    font-size: 2.4rem;
    color: ${theme.color.orangeBright};
  }
  & > h5 {
    font-size: 2.2rem;
    color: ${theme.color.orangeBright};
  }
  & > h6 {
    font-size: ${theme.fontSize.medium};
    color: ${theme.color.orangeBright};
  }
  & > p {
    font-size: ${theme.fontSize.small};
    color: #ffffff;
  }
  & > ul {
    font-size: ${theme.fontSize.medium};
    color: ${theme.color.yellowBright};
  }
  & > ol {
    font-size: ${theme.fontSize.medium};
    color: ${theme.color.yellowBright};
  }
  & > table {
    width: 100%;
    font-size: ${theme.fontSize.medium};
    color: #ffffff;
    text-align: center;
    padding: ${theme.spacing.small};
    border-collapse: collapse;
  }
  & > tr,
  td,
  th {
    border: 1px solid #ffffff;
    padding: ${theme.spacing.extraSmall};
  }
  img {
    width: 100%;
  }
  a {
    color: ${theme.color.yellowBright};
  }
`
