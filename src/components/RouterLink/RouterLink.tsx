import { Link } from 'react-router-dom'
import React from 'react'

type RouterLinkProps = {
  to: string
  children: JSX.Element
  className?: string
}

export const RouterLink = (props: RouterLinkProps) => {
  return (
    <Link to={props.to} className={props.className}>
      {props.children}
    </Link>
  )
}
