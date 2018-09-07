import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import store from 'store';
import history from './history';
import App from 'app/';
import 'common/style.css';
import 'common/keyframes.css';

window.STORE = store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route render={() => <App />}/>
    </ConnectedRouter>

  </Provider>, document.getElementById('react-root'));