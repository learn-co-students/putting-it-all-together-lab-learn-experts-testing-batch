export const createStore = (reducer) => {
  let state;
  let listeners = [];
  const getState = () => state;
  
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach( l => l());
  }
  
  const subscribe = (newListener) => {
    listeners.push(newListener);
  }
  
  // Set's default state
  dispatch({})
  
  return{
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }
}