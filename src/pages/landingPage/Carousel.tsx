import { Card } from './Card'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { sliderData } from './sliderData'
import { theme } from '../../helpers/themes'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

type SlideProps = {
  next?: boolean
  prev?: boolean
}

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState(false)
  const [prev, setPrev] = useState(false)
  const length = sliderData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    setPrev(false)
    setNext(true)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    setNext(false)
    setPrev(true)
  }

  return (
    <Div_Slider>
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div key={index}>
            {index === current ? (
              <Div_ActiveSlide next={next} prev={prev}>
                {index === current && (
                  <Div_Card>
                    <Card
                      title={slide.title}
                      toApp={slide.toApp}
                      toGit={slide.toGit}
                      srcPreview={slide.srcPreview}
                      srcGit={slide.srcGit}
                      altGit={slide.altGit}
                      altPreview={slide.altPreview}
                    />
                  </Div_Card>
                )}
              </Div_ActiveSlide>
            ) : (
              <Div_Slide>
                {index === current && (
                  <Div_Card>
                    <Card
                      title={slide.title}
                      toApp={slide.toApp}
                      toGit={slide.toGit}
                      srcPreview={slide.srcPreview}
                      srcGit={slide.srcGit}
                      altGit={slide.altGit}
                      altPreview={slide.altPreview}
                    />
                  </Div_Card>
                )}
              </Div_Slide>
            )}
          </div>
        )
      })}
    </Div_Slider>
  )
}

const Div_Slider = styled.div`
  position: relative;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: ${theme.spacing.small};
  font-size: 3rem;
  color: ${theme.color.black};
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 0;
  margin-right: ${theme.spacing.small};
  font-size: 3rem;
  color: ${theme.color.black};
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const Div_Card = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  border-radius: 10px;
`

const Div_ActiveSlide = styled.div<SlideProps>`
  animation: slide-in 0.25s forwards;
  -webkit-animation: slide-in 0.25s forwards;
  @keyframes slide-in {
    100% {
      transform: translateX(0%);
    }
  }
  @-webkit-keyframes slide-in {
    100% {
      -webkit-transform: translateX(0%);
    }
  }
  ${({ next }) =>
    next &&
    css`
      transform: translateX(100%);
      -webkit-transform: translateX(100%);
    `}
  ${({ prev }) =>
    prev &&
    css`
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    `}
`

const Div_Slide = styled.div`
  opacity: 0;
  animation: slide-out 0.25s forwards;
  -webkit-animation: slide-out 0.25s forwards;
  @keyframes slide-out {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  @-webkit-keyframes slide-out {
    0% {
      -webkit-transform: translateX(0%);
    }
    100% {
      -webkit-transform: translateX(100%);
    }
  }
`
