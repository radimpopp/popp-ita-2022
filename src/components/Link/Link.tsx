import React from 'react'

export interface LinkProps {
  href: string
  target?: string
  className?: string
  children: string
}
const Link = ({ href, target, className, children }: LinkProps) => {
  return (
    <a href={href} className={className} target={target}>
      {children}
    </a>
  )
}

export default Link
