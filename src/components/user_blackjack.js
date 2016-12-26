import React from 'react'

const UserBlackjack = props => {
  return (
    <div>
      <h1>Player 1</h1>
      <h2>Score: {props.score}</h2>
      {props.userCards.map(c => <li>{c.name}</li>)}
    </div>
  )
}

module.exports = UserBlackjack