import React from 'react'

import { fetchDeck, setAICards, setUserCards, hitAI, hitUser } from '../actions/blackjack_actions'
import UserBlackjack from './user_blackjack';
import AIBlackjack from './ai_blackjack';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.hitMe = this.hitMe.bind(this);
    
    this.state = props.store.getState();
  }
  
  hitMe(isUser){
    isUser ? hitUser : hitAI
  }
  
  render(){
    const { userCards, aiCards } = this.state
    return(
      <div>
        <UserBlackjack 
          userCards={userCards}
          hitMe={this.hitMe.bind(null, true)}
        />
        <AIBlackjack
          aiCards={aiCards}
          hitMe={this.hitMe.bind(null, false)}
        />
      </div>
    )
  }
}

module.exports = App