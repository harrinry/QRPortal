import React from 'react';

export default class BodyBlock extends React.Component{
  render(){
    return (<div className='bodyElement-container'>
      {this.props.children}
    </div>);
  }
}