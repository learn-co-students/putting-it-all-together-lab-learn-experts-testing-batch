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
    
    // this.state = props.store.getState();
  }
  
  // componentWillUpdate(){
  //   this.state = this.props.store.getState()
  // }
  
  hitMe(isUser){
    isUser ? hitUser() : hitAI()
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
    return (this.calculateAiScore() >= this.calculateUserScore())
  }
  
  render(){
    const { userCards, aiCards } = this.props.store.getState()
    return(
      <div>
        <UserBlackjack 
          userCards={userCards}
          hitMe={this.hitMe.bind(null, true)}
          score={this.calculateUserScore()}
        />
        <AIBlackjack
          aiCards={aiCards}
          hitMe={this.hitMe.bind(null, false)}
          score={this.calculateAiScore()}
          stay={this.stay}
        />
      </div>
    )
  }
}

module.exports = App