import React from 'react';

export default class OverlayContainer extends React.PureComponent{
  render(){
    return (
      <div className='ovlContainer'>
        <div className='ovl-body'>
          {this.props.children}
        </div>
      </div> 
    );
  }
}