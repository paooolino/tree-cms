/*
    internal imports
*/

import * as types from './actionTypes';

/*
    setup
*/

export const initialState = {
  counter: 0
};

/*
    reducer definition
*/

export default (state=initialState, action) => {
  
  switch(action.type) {      
  
    case types.COUNTER_ADD:
      return {
        ...state,
        counter: state.counter + 1
      }
        
    default:
      return state;
  
  }
  
}
