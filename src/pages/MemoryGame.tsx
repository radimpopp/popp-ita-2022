import { Button_CustomButton } from '../components/Button'
import { H1_MainHeadingYellow } from '../components/MainHeading'
import { H2_SubHeading } from '../components/SubHeading'
import { Helmet } from 'react-helmet-async'
import { P_BodyTextWhiteEdition } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { createId, shuffleArray } from '../helpers/utils'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

const cardEmojis = ['😏', '🤔', '🙃', '🤯', '😡', '🥴', '💪', '🤌']
const cardBackEmoji = '🕸️'

const delay = (time: number) => {
  return new Promise(resolve => setTimeout(() => resolve(null), time))
}

type CardType = {
  id: string
  value: string
  flipped: boolean
  clickable: boolean
}

const double = cardEmojis.flatMap(x => [x, x])

const renderBoard = () =>
  shuffleArray(
    double.map(
      cardEmoji =>
        ({
          id: createId(),
          value: cardEmoji,
          flipped: false,
          clickable: true,
        } as CardType)
    )
  )

export const MemoryGame = () => {
  const [cards, setCards] = useState(renderBoard())
  const [selectedCard, setSelectedCard] = useState(null as CardType | null)
  const [pairs, setPairs] = useState(0)
  const [turns, setTurns] = useState(0)

  const handleReset = () => {
    setCards(renderBoard())
    setPairs(0)
    setTurns(0)
  }

  async function wait(currentClickedCard: CardType) {
    setTurns(turns + 1)
    setCards(
      cards.map(card =>
        (selectedCard && card.id === selectedCard.id) || card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : { ...card, clickable: false }
      )
    )
    await delay(750)
    setCards(
      cards.map(card =>
        (selectedCard && card.id === selectedCard.id) || card.id === currentClickedCard.id
          ? { ...card, flipped: false, clickable: true }
          : card
      )
    )
    setSelectedCard(null)
  }

  const handleCardClick = (currentClickedCard: CardType) => {
    setCards(
      cards.map(card =>
        card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card
      )
    )

    if (!selectedCard) {
      setSelectedCard(currentClickedCard)
      return
    }

    if (selectedCard.value === currentClickedCard.value) {
      setTurns(turns + 1)
      setPairs(pairs + 1)
      setCards(
        cards.map(card =>
          card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card
        )
      )
      setSelectedCard(null)
    } else if (selectedCard.value !== currentClickedCard.value) {
      wait(currentClickedCard)
    }
  }

  const handleClick = (card: CardType) => {
    if (card.clickable) {
      handleCardClick(card)
    }
  }

  return (
    <Div_MemoryAppContainer>
      <Helmet>
        <title>Radim Popp/Memory Game</title>
        <meta
          name='Description'
          content='Practice your memory. Can you beat the game in 8 turns? '
        />
      </Helmet>
      <H1_MainHeadingYellow>Memory Game</H1_MainHeadingYellow>
      <H2_SubheadingYellow>
        {turns} turns | {pairs} pairs
      </H2_SubheadingYellow>
      <Div_ButtonContainer>
        <Button_CustomButton onClick={handleReset}>Reset</Button_CustomButton>
      </Div_ButtonContainer>
      <Div_MemoryGameContainer>
        <div></div>
        <Div_Grid>
          {cards.map(card => (
            <Div_Emoji key={card.id} onClick={() => handleClick(card)}>
              <div>{card.flipped ? card.value : cardBackEmoji}</div>
            </Div_Emoji>
          ))}
        </Div_Grid>
      </Div_MemoryGameContainer>
      <RouterLink to={urls.home}>
        <P_BodyTextWhiteEdition>Return home</P_BodyTextWhiteEdition>
      </RouterLink>
    </Div_MemoryAppContainer>
  )
}

const Div_Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  border: 1px solid ${theme.color.orangeBright};
`

const Div_Emoji = styled.div`
  font-size: 8rem;
  user-select: none;
  ${theme.mediaQueries.phone} {
    font-size: 4.7rem;
  }
`

const Div_MemoryGameContainer = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.black};
  ${theme.mediaQueries.tablet} {
    height: 60vh;
  }
  ${theme.mediaQueries.phone} {
    height: 55vh;
  }
`

const Div_MemoryAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.color.black};
`

const Div_ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${theme.mediaQueries.tablet} {
    width: 80%;
  }
  ${theme.mediaQueries.phone} {
    flex-direction: column;
  }
`

const H2_SubheadingYellow = styled(H2_SubHeading)`
  color: ${theme.color.yellowBright};
  padding-top: ${theme.spacing.small};
`
