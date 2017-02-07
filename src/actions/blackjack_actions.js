export function fetchDeck(){
  return {
    type: 'FETCH_DECK'
  }
}

function randomNum(state){
  return Math.floor(Math.random() * state.deck.length - 1)
}

export function setAICards(state){
  const deck = [...state.deck]
  return {
    type: 'SET_AI_CARDS',
    payload: {
      aiCards: deck.splice(randomNum(state), 1).concat(deck.splice(randomNum(state), 1)),
      deck: deck
    }
  }
}

export function setUserCards(state){
  const deck = [...state.deck]
  return {
    type: 'SET_USER_CARDS',
    payload: {
      userCards: deck.splice(randomNum(state), 1).concat(deck.splice(randomNum(state), 1)),
      deck: deck
    }
  }
}

export function hitUser(state){
  const deck = [...state.deck]
  return {
    type: 'HIT_USER',
    payload: {
      userCard: deck.splice(randomNum(state), 1)[0],
      deck: deck
    }
  }
}

export function hitAI(state){
  const deck = [...state.deck]
  return {
    type: 'HIT_AI',
    payload: {
      aiCard: deck.splice(randomNum(state), 1)[0],
      deck: deck
    }
  }
}
