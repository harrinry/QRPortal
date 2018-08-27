import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'app/';
import 'common/style.css';
import 'common/keyframes.css';

// import { fetchSearchResults } from './global-search/gs-actions';

window.STORE = store;
// window.query = ( query ) => fetchSearchResults(query);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('react-root'));