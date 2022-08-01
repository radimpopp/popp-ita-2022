import React from 'react'
import styled from 'styled-components'

type ImageProps = {
  src: string
  alt?: string
}

export const ImageLogo = (props: ImageProps) => {
  return <StyledImgLogo src={props.src} alt={props.alt} />
}

export const Image = (props: ImageProps) => {
  return <StyledImg src={props.src} alt={props.alt} />
}

const StyledImgLogo = styled.img`
  width: 40px;
  padding: 5px 0px;
`
const StyledImg = styled.img`
  width: 100%;
`
