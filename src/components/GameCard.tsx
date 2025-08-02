import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'

interface Props{
  game:Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Header />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
}

export default GameCard