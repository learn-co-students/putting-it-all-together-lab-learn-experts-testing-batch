import React from 'react';

export default (props) => {
  function handleSubmit(e){
    e.preventDefault()
    props.hitMe("user")
  }

  return(
    <div>
      <h1>Player1</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {props.userCards.map(card =>
          <li>{card.name}</li>
        )}
      </ul>
      <form onSubmit={handleSubmit}>
        <button> Hit Me </button>
      </form>
      <form onSubmit={props.stay}>
        <button> Stay </button>
      </form>
    </div>
  )
}
