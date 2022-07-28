import React from 'react'

type BodyTextProps = {
  className?: string
  children: React.ReactChild | React.ReactChild[]
}

export const BodyText = (props: BodyTextProps) => {
  return <p className={props.className}>{props.children}</p>
}
