import React from 'react'

import { fetchDeck, setAICards, setUserCards, hitAI, hitUser } from '../actions/blackjack_actions'
import UserBlackjack from './user_blackjack';
import AIBlackjack from './ai_blackjack';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.hitMe = this.hitMe.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    this.calculateUserScore = this.calculateUserScore.bind(this);
    this.calculateAiScore = this.calculateAiScore.bind(this);
    this.stay = this.stay.bind(this);
    this.winner = this.winner.bind(this);
    
    this.state={winner: undefined}
  }
  
  winner(theWinner){
    this.setState({winner: theWinner})
  }
  
  hitMe(isUser){
    const deck = this.props.store.getState().deck;
    const action = (isUser ? hitUser(deck) : hitAI(deck))
    this.props.store.dispatch(action);
    if (this.calculateUserScore() > 21){
      this.winner("Computer");
    }
  }
  
  calculateScore(hand){
    return hand.reduce((total, card) => {
      return total+card.value
    }, 0)
  }
  
  calculateUserScore(){
    return this.calculateScore(this.props.store.getState().userCards);
  }
  
  calculateAiScore(){
    return this.calculateScore(this.props.store.getState().aiCards);
  }
  
  stay(){
    if(this.calculateUserScore() === 21){
      this.winner("Player")
    }else if(this.calculateUserScore() > 21){
      this.winner("Computer")
    }else{
      while(this.calculateAiScore() < this.calculateUserScore()){
        this.hitMe(false);
      }
      (this.calculateAiScore() <= 21) ? this.winner("Computer") : this.winner("Player")
    }
  }
  
  render(){
    const { userCards, aiCards } = this.props.store.getState()
    return(
      <div>
        <h1>{this.state.winner ? `The winner is ${this.state.winner}!` : ''}</h1>
        <UserBlackjack 
          userCards={userCards}
          hitMe={this.hitMe.bind(null, true)}
          stay={this.stay}
          score={this.calculateUserScore}
        />
        <AIBlackjack
          aiCards={aiCards}
          hitMe={this.hitMe.bind(null, false)}
          score={this.calculateAiScore}
          stay={this.stay}
        />
      </div>
    )
  }
}

module.exports = App