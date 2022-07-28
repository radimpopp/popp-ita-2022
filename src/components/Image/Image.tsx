import React from 'react'
type ImageProps = {
  src: string
  className?: string
  alt?: string
}

export const Image = (props: ImageProps) => {
  return <img src={props.src} className={props.className} alt={props.alt} />
}
