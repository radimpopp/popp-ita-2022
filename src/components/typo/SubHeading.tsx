import React from 'react'
export interface SubHeadingProps {
  className?: string
  children: string
}

const SubHeading = ({ className, children }: SubHeadingProps) => {
  return <h2 className={className}>{children}</h2>
}

export default SubHeading
