import React from 'react';

const AIBlackjack = props => {
  return(
    <div>
      <h1>Computer</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {props.aiCards.map((c, i) => <li key={i}>{c.name}</li>)}
      </ul>
    </div>
  )
}

module.exports = AIBlackjack;