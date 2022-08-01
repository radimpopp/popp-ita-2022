import React from 'react'

type LinkProps = {
  href: string
  target?: string
  className?: string
  children: string
}
export const Link = (props: LinkProps) => {
  return (
    <a href={props.href} className={props.className} target={props.target}>
      {props.children}
    </a>
  )
}
