import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './app/app';
import './common/style.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('react-root'));