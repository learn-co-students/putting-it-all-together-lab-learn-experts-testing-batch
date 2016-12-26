import React from 'react'

const UserBlackjack = props => {
  return (
    <div>
      <h1>Player1</h1>
      <h2>
        Score: {props.score()}
      </h2>
      {props.userCards.map((c, i) => <li key={i}>{c.name}</li>)}
      <button onClick={props.hitMe}>Hit Me</button>
      <button onClick={props.stay}>Stay</button>
    </div>
  )
}

module.exports = UserBlackjack