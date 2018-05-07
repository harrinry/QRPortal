import React from 'react';
import {OverlayContainer} from '../index';

const className = ['overlay'];

export default class Overlay extends React.Component{
  render(){
    const visible = this.props.visible ? 'visible' : undefined;
    return (
      <div className={className.concat( visible ).join(' ')}>
        <OverlayContainer>
          {this.props.children}
        </OverlayContainer>
      </div>
    );
  }
}

