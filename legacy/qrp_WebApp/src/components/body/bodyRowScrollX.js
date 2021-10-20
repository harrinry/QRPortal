import React from 'react';

export default class BodyRowScrollX extends React.Component{
  render(){
    return (<div className='bodyElement-container scroll-x-overflow scrollbar-small'>
      {this.props.value}
    </div>);
  }
}