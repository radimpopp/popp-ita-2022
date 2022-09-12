import { theme } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

type ImageProps = {
  src: string
  alt?: string
  onClick?(): void
}

export const Img_ImageLogo = (props: ImageProps) => {
  return <StyledImgLogo src={props.src} alt={props.alt} onClick={props.onClick} />
}

export const Img_Image = (props: ImageProps) => {
  return <StyledImg src={props.src} alt={props.alt} />
}

const StyledImgLogo = styled.img`
  width: 50px;
  border-radius: 5%;
`
const StyledImg = styled.img`
  width: 90%;
  border-radius: 10px;
`
