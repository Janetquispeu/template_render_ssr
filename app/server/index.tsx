import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import createStore from '../src/store/configureStore';
import { Provider } from 'react-redux';
import App from '../src/view/home';
import { incrementData, decrementData } from '../src/view/home/state/counter/action';
import { renderFullPage } from './renderFullPage';


const app = express();
const port = 3000;

app.use('/static', express.static('dist'));
app.get('*', async (req, res) => {
  const store = createStore();
  await store.dispatch(incrementData());
  await store.dispatch(decrementData());

  console.log(store, 'store');

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
});

app.listen(port, () => console.log('Example app listening on port 3000!'));
