import { theme } from '../helpers/themes'
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

  ${theme.mediaQueries.tablet} {
    max-height: 60%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${theme.spacing.extraLarge};
    text-align: center;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ${theme.mediaQueries.phone} {
    margin-top: ${theme.spacing.extraLarge};
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
  font-weight: ${theme.fontWeight.light};
  width: 50%;
`

export const Div_ImagesContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};
  ${theme.mediaQueries.tablet} {
    width: 80%;
  }
`
