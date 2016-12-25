export const fetchDeck = () => {
  return { type:"FETCH_DECK" }
}

export const setAICards = (state) => {
  const twoCards = getTwoRandCard(state.deck)
  return { 
    type:"SET_AI_CARDS", 
    payload: {
      aiCards: twoCards,
      deck: removeCardsFromDeck(state.deck, twoCards)
    }
  }
}

export const setUserCards = (state) => {
  const twoCards = getTwoRandCard(state.deck)
  return { 
    type:"SET_USER_CARDS", 
    payload: {
      userCards: twoCards,
      deck: removeCardsFromDeck(state.deck, twoCards)
    }
  }
}

export const hitAI = (deck) => {
  const drawnCard = getRandCard(deck)
  return { 
    type:"HIT_AI", 
    payload: {
      drawnCard: drawnCard,
      deck: removeCardsFromDeck(state.deck, [drawnCard])
    }
  }
}

export const hitUser = () => {
  const drawnCard = getRandCard(deck)
  return { 
    type:"HIT_USER", 
    payload: {
      drawnCard: drawnCard,
      deck: removeCardsFromDeck(state.deck, [drawnCard])
    }
  }
}

const getRandCard = (deck) => {
  const i = Math.floor(deck.length * Math.random());
  return deck[i];
}

const getTwoRandCard = (deck) => {
  let card1, card2
  card1 = getRandCard(deck)
  card2 = getRandCard(deck)
  while (card1 === card2 ){
    card2 = getRandCard(deck)
  }
  return [card1, card2]
}

const removeCardsFromDeck =(deck, cards) => {
  return deck.filter( deckCard => {
    return cards.reduce((pre, handCard)=> {
      return (deckCard.name !== handCard.name) && pre
    }, true)
  })
}