import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CenterBox } from './styled';
import { getCounterData } from './state/counter/selector';
import { incrementData, decrementData } from './state/counter/action';

export const App = ({increment, decrement, counterData}) => {

  return(
    <CenterBox>
      <div>Number:</div>
      <button onClick={increment}>Increment</button>
      <span>{counterData}</span>
      <button onClick={decrement}>Decrement</button>
    </CenterBox>
  );
};


const mapStateToProps = (state) => ({
  counterData: getCounterData(state)
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementData()),
  decrement: () => dispatch(decrementData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
