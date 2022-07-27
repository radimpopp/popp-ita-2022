import React from 'react'
export interface MainHeadingProps {
  className?: string
  children: string
}

const MainHeading = ({ className, children }: MainHeadingProps) => {
  return <h1 className={className}>{children}</h1>
}

export default MainHeading
