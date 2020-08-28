import { INCREMENT, DECREMENT } from './actionTypes';

const initialState = 0;

export const counter = (state = initialState, action) => {

  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state
  }
}
