import { Button_CustomButton } from '../../components/Button'
import { H1_MainHeading } from '../../components/MainHeading'
import { H2_SubHeading } from '../../components/SubHeading'
import { Helmet } from 'react-helmet-async'
import { createId, shuffleArray } from '../../helpers/utils'
import { theme } from '../../helpers/themes'
import React, { useState } from 'react'
import styled from 'styled-components'

const cardEmojis = ['π', 'π€', 'π', 'π€―', 'π‘', 'π₯΄', 'πͺ', 'π€']
const cardBackEmoji = 'πΈοΈ'

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
      <H1_MemoryHeading>Memory Game</H1_MemoryHeading>
      <H2_SubHeadingSalmon>
        {turns} turns | {pairs} pairs
      </H2_SubHeadingSalmon>
      <Div_ButtonContainer>
        <Button_Memory onClick={handleReset}>Reset</Button_Memory>
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
    </Div_MemoryAppContainer>
  )
}

const Div_Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  border: 1px solid ${theme.color.salmon};
`

const Div_Emoji = styled.div`
  font-size: 8rem;
  user-select: none;
  ${theme.mediaQueries.tablet} {
    font-size: 8rem;
  }
  ${theme.mediaQueries.phone} {
    font-size: 4.7rem;
  }
`

const Div_MemoryGameContainer = styled.div`
  width: 80vw;
  height: 60vh;
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
  height: 90vh;
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

const H2_SubHeadingSalmon = styled(H2_SubHeading)`
  color: ${theme.color.salmon};
  padding-top: ${theme.spacing.small};
  padding-bottom: unset;
`

const H1_MemoryHeading = styled(H1_MainHeading)`
  padding: unset;
`

const Button_Memory = styled(Button_CustomButton)`
  margin-bottom: ${theme.spacing.large};
`
