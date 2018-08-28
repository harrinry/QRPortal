import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'app/';
import 'common/style.css';
import 'common/keyframes.css';

import * as actions from './body/body-actions';

window.STORE = store;
window.actions = actions;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('react-root'));