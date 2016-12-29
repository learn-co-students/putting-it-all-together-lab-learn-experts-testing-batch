import React from 'react';
import {userHit, aiHitMe} from '../actions/blackjack_actions'
import AIBlackjack from './ai_blackjack'
import UserBlackjack from './user_blackjack'

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = props.store.getState();
    this.hitMe = this.hitMe.bind(this);
    this.calculateAiScore = this.calculateAiScore.bind(this);
    this.calculateUserScore = this.calculateUserScore.bind(this);
    this.stay = this.stay.bind(this);
  }

  stay(){
    if (this.calculateUserScore() !== "BUST"){
      while(this.calculateAiScore() < this.calculateUserScore()){
        if(this.calculateAiScore() === "BUST"){
          return
        }
        this.hitMe("ai")
      }
    }
  }

  hitMe(user){
    const store = this.props.store;
    if (user == 'user'){
      store.dispatch(userHit(store.getState()));
    } else {
      store.dispatch(aiHitMe(store.getState()));
    }
  }

  calculateAiScore(){
    const {store} = this.props;
    var aiScore = store.getState().aiCards.reduce((prev, next) => {
      return prev += next.value;
    }, 0);
    if (aiScore > 21){
      return "BUST";
    } else {
      return aiScore;
    }
  }

  calculateUserScore(){
    const {store} = this.props;
    var userScore = store.getState().userCards.reduce((prev, next) => {
      return prev += next.value;
    }, 0);
    if (userScore > 21){
      return "BUST";
    } else if (this.calculateAiScore() === "BUST") {
      return "Winner!";
    }
    return userScore;
  }

  render(){
    const {store} = this.props;
    return(
      <div>
        <AIBlackjack aiCards={store.getState().aiCards} score={this.calculateAiScore}/>
        <UserBlackjack
          userCards={store.getState().userCards}
          score={this.calculateUserScore}
          hitMe={this.hitMe}
          stay={this.stay}
        />
      </div>
    )
  }
}
