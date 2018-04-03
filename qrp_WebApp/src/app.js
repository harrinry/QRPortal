import React from 'react';
import ReactDOM from 'react-dom';
import {Header, Body} from './components/index';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

const app = document.getElementById('react-root');

ReactDOM.render(<App />, app);