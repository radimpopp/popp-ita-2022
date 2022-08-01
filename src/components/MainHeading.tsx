import React from 'react'
type MainHeadingProps = {
  className?: string
  headingText: string
}

export const MainHeading = (props: MainHeadingProps) => {
  return <h1 className={props.className}>{props.headingText}</h1>
}
