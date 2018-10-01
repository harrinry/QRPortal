import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hydrate } from '../path-navigation/nv-actions';
import store from './store';
import App from 'app/';
import 'common/style.css';
import 'common/keyframes.css';

window.STORE = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('react-root'));

if (window.location.search !== '') {
  store.dispatch(hydrate());
}