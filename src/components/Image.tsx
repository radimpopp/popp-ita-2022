import { theme } from '../helpers/themes'
import React from 'react'
import styled from 'styled-components'

type ImageProps = {
  src: string
  alt?: string
}

export const Img_ImageLogo = (props: ImageProps) => {
  return <StyledImgLogo src={props.src} alt={props.alt} />
}

export const Img_Image = (props: ImageProps) => {
  return <StyledImg src={props.src} alt={props.alt} />
}

const StyledImgLogo = styled.img`
  width: 40px;
  padding: ${theme.spacing.small} 0;
`
const StyledImg = styled.img`
  width: 100%;
`
