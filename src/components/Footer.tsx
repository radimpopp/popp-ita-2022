import { A_Link } from './Link'
import { theme } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Footer_Footer>
      <P_FooterText>
        Most of the text used for the website was stolen from{' '}
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
  background-color: ${theme.color.greyDark};
  box-shadow: 0 2px 4px 0 ${theme.color.blackBoxShadow};
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`
const P_FooterText = styled.p`
  padding: ${theme.spacing.medium} 0;
  font-size: ${theme.fontSize.small};
`
