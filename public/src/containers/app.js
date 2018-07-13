import React from 'react';
import '../style/app.css';
import NavBar from './NavBar';

export default class App extends React.PureComponent{
  render(){
    return (
      <div className={'App'}>
        <NavBar />
      </div>
    );
  }
}