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
  return { type:"FETCH_DECK", payload: getTwoRandCard() }
}

export const hitAI = () => {
  console.log("Hello")
}

export const hitUser = () => {
  console.log("Hello")
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
  return deck.filter( c => c.name !== cards[0].name && c.name !== cards[1].name)
}