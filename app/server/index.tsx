import fs from 'fs';
import express from 'express';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from '../src/view/home';
import createStore from '../src/store/configureStore';
import { html } from './renderFullPage';

const scripts = JSON.parse(fs.readFileSync('./dist/public/stats.json', 'utf8'));
const app = express();
const port = 3000;

app.use('/static', express.static('dist'));

app.get('*', async (req, res) => {
  const store = createStore();
  const preloadedState = store.getState();
  const sheet = new ServerStyleSheet();
  const body = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <App />
    </Provider>
  ));
  const styles = sheet.getStyleTags();

  res.send(html({
    body,
    styles,
    scripts,
    preloadedState
  }));
});

app.listen(port, () => console.log('App listening on port 3000!'));
