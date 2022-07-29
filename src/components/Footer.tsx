import { BodyText } from './BodyText'
import { Link } from './Link'
import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <BodyText className='footer-text'>
        Most of the text used for the website was stolen from{' '}
        <Link
          href='https://dev.to/dboateng/history-of-javascript-how-it-all-began-92a'
          target='_blank'
          className='footer-link'
        >
          this page.
        </Link>
      </BodyText>
    </footer>
  )
}
