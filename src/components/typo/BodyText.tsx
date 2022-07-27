import React from 'react'

export interface BodyTextProps {
  className?: string
  children: React.ReactChild | React.ReactChild[]
}

const BodyText = ({ className, children }: BodyTextProps) => {
  return <p className={className}>{children}</p>
}

export default BodyText
