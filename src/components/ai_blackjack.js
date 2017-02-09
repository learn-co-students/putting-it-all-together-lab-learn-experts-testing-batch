import React from 'react';

export default (props) => {
  return(
    <div>
      <h1>Computer</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
          {props.aiCards.map(card =>
            <li>{card.name}</li>
          )}
      </ul>
    </div>
  )
}
