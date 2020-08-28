import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { counter } from '../view/home/state/counter/reducer';

if (process.env.NODE_SSR) { global.window = {}; }

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      counter
    }),
    (window as any).__PRELOADED_STATE__,
    composeEnhancers(
      applyMiddleware(
        thunk
      )
    )
  );
  return store;
}
