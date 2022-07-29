import React from 'react'
type SubHeadingProps = {
  className?: string
  subHeadingText: string
}

export const SubHeading = (props: SubHeadingProps) => {
  return <h2 className={props.className}>{props.subHeadingText}</h2>
}
