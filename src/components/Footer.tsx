import { A_Link } from './Link'
import { colors, fonts, spacing } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Footer_StyledFooter>
      <P_FooterText>
        Most of the text used for the website was stolen from{' '}
        <A_Link
          href='https://dev.to/dboateng/history-of-javascript-how-it-all-began-92a'
          target='_blank'
        >
          this page.
        </A_Link>
      </P_FooterText>
    </Footer_StyledFooter>
  )
}

const Footer_StyledFooter = styled.footer`
  background-color: ${colors.grey600};
  box-shadow: 0 2px 4px 0 ${colors.blackBoxShadow};
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`
const P_FooterText = styled.p`
  padding: ${spacing.medium} 0;
  font-size: ${fonts.fontSmall};
`
