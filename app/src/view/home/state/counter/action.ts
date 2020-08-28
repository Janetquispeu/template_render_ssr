import { INCREMENT, DECREMENT } from './actionTypes';

export const incrementData = () => {
  return {
    type: INCREMENT
  }
};

export const decrementData = () => {
  return {
    type: DECREMENT
  }
};