import React from 'react'
export interface ImageProps {
  src: string
  className?: string
  alt?: string
}

const Image = ({ src, className, alt }: ImageProps) => {
  return <img src={src} className={className} alt={alt} />
}

export default Image
