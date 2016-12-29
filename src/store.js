import React from 'react';
export const createStore = (reducer) => {
  let state;
  let listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
  }

  const getState = () => {
    return state;
  }

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach( listener => listener());
  }

  dispatch({});

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }
}
