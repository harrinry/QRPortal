import React from 'react';

export default class BodyTitle extends React.Component{
  render(){
    return (<div className='title-container'>
      <h2 className='title transformCaps'>{this.props.value}</h2>
    </div>);
  }
}