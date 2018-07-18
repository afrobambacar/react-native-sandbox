import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Navigator from './config/routes';
import store from './store';

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
