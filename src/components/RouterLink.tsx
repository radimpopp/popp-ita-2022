import { Link } from 'react-router-dom'
import React from 'react'

type RouterLinkProps = {
  to: string
  children: JSX.Element
}

export const RouterLink = (props: RouterLinkProps) => {
  return <Link to={props.to}>{props.children}</Link>
}
