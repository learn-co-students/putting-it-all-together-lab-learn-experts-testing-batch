import React from 'react'
import UserBlackJack from './user_blackjack'
import AIBlackJack from './ai_blackjack'

import {hitUser, hitAI} from '../actions/blackjack_actions'

class App extends React.Component {
  constructor(props){
    super(props)

    this.hitMe = this.hitMe.bind(this)
    this.stay = this.stay.bind(this)
    this.calculateAiScore = this.calculateAiScore.bind(this)
    this.calculateUserScore = this.calculateUserScore.bind(this)
  }

  hitMe(user){
    if(user === "user"){
      this.props.store.dispatch(hitUser(this.props.store.getState()))
    } else {
      this.props.store.dispatch(hitAI(this.props.store.getState()))
    }
  }

  calculateAiScore(){
      const score = this.props.store.getState().aiCards.reduce((prevCard, nextCard) =>
        prevCard + nextCard.value
      , 0)
      return score > 21 ? "BUST" : score
  }

  calculateUserScore(){
      const score = this.props.store.getState().userCards.reduce((prevCard, nextCard) =>
        prevCard + nextCard.value
      , 0)
      return score > 21 ? "BUST" : score
  }

  stay(e){
    e.preventDefault()
    let userScore = this.calculateUserScore()
    let aiScore = this.calculateAiScore()
    if(userScore !== "BUST"){
      while(userScore > aiScore && aiScore !== "BUST"){
        this.props.store.dispatch(hitAI(this.props.store.getState()))
        aiScore = this.calculateAiScore()
      }
    }
  }


  render(){
    const {userCards, aiCards} = this.props.store.getState()
    return(
      <div>
        <UserBlackJack score={this.calculateUserScore} userCards={userCards} hitMe={this.hitMe} stay={this.stay} />
        <AIBlackJack score={this.calculateAiScore} aiCards={aiCards} />
      </div>
    )
  }
}

module.exports = App;
