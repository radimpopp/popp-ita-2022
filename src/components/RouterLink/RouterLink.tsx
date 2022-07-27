import { Link } from 'react-router-dom'
import React from 'react'

export interface RouterLinkProps {
  to: string
  children: JSX.Element
  className?: string
}

const RouterLink = ({ to, children, className }: RouterLinkProps) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default RouterLink
Link
