import { fontWeight, mediaQueries, spacing } from '../helpers/themes'
import styled, { css } from 'styled-components'

const ContainerStyles = css`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  ::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries.tablet} {
    max-height: 60%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${spacing.extraLarge};
    text-align: center;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ${mediaQueries.phone} {
    margin-top: ${spacing.extraLarge};
    max-height: 45%;
  }
`

export const Div_Container = styled.div`
  ${ContainerStyles}
`
export const Div_ReverseContainer = styled.div`
  ${ContainerStyles};
  flex-direction: row-reverse;
`
export const Div_TextContainer = styled.div`
  font-weight: ${fontWeight.fontWeightSmall};
  width: 50%;
`

export const Div_ImagesContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};
  ${mediaQueries.tablet} {
    width: 80%;
  }
`
