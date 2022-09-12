import { A_Link } from '../../../components/Link'
import { theme } from '../../../helpers/themes'
import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Footer_Footer>
      <P_FooterText>
        Most of the text used for the website was provided by{' '}
        <A_Link
          href='https://dev.to/dboateng/history-of-javascript-how-it-all-began-92a'
          target='_blank'
        >
          this page.
        </A_Link>
      </P_FooterText>
    </Footer_Footer>
  )
}

const Footer_Footer = styled.footer`
  background-color: ${theme.color.black};
  border-top: 1px solid ${theme.color.white};
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`
const P_FooterText = styled.p`
  padding: ${theme.spacing.medium} 0;
  font-size: ${theme.fontSize.small};
  color: ${theme.color.white};
`
