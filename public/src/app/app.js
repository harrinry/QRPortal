import React from 'react';
import './style.css';
import NavBar from '../containers/NavBar';

export default class App extends React.PureComponent{
  render(){
    return (
      <div className={'App'}>
        <NavBar />
      </div>
    );
  }
}