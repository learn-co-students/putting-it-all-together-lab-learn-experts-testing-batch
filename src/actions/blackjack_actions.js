import React from 'react';

export const fetchDeck = () => {
  return {
    type: "FETCH_DECK"
  }
}

export const setAICards = (state) => {
  const deck = [...state.deck];
  const cardOne = deck[Math.floor(Math.random()*deck.length-1)];
  deck.splice(deck.indexOf(cardOne), 1);
  const cardTwo = deck[Math.floor(Math.random()*deck.length-1)];
  deck.splice(deck.indexOf(cardTwo), 1);
  const aiCards = [...state.aiCards, cardOne, cardTwo];

  return {
    type: "SET_AI_CARDS",
    payload: {
      deck: deck,
      aiCards: aiCards
    }
  }
}

export const setUserCards = (state) => {
  const deck = [...state.deck];
  const cardOne = deck[Math.floor(Math.random()*deck.length-1)];
  deck.splice(deck.indexOf(cardOne), 1);
  const cardTwo = deck[Math.floor(Math.random()*deck.length-1)];
  deck.splice(deck.indexOf(cardTwo), 1);
  const userCards = [...state.userCards, cardOne, cardTwo];

  return {
    type: "SET_USER_CARDS",
    payload: {
      deck: deck,
      userCards: userCards
    }
  }
}

export const userHit = (state) => {
  const deck = [...state.deck];
  const card = deck[Math.floor(Math.random()*deck.length-1)];
  deck.splice(deck.indexOf(card), 1);
  const userCards = [...state.userCards, card];

  return {
    type: "USER_HIT_ME",
    payload: {
      deck: deck,
      userCards: userCards
    }
  }
}

export const aiHitMe = (state) => {
  const deck = [...state.deck];
  const card = deck[Math.floor(Math.random()*deck.length-1)];
  deck.splice(deck.indexOf(card), 1);
  const aiCards = [...state.aiCards, card];

  return {
    type: "AI_HIT_ME",
    payload: {
      deck: deck,
      aiCards: aiCards
    }
  }
}
