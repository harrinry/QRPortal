import React from 'react';
import {Overlay, Radio, SHOWOVERLAY, HIDEOVERLAY } from '../index';

export default class StaticOverlay extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      visible: undefined,
      children: undefined
    };
    const boundSetState = ( state, callback ) => this.setState.bind(this, state, callback);
    Radio.listen( SHOWOVERLAY, ( params ) => this.setState( { 
      visible: true,
      children: params.children
    }));

    Radio.listen( HIDEOVERLAY, resetState );

    const resetState = () => this.setState({visible: undefined, children: undefined});
  }

  render(){
    return (
      <Overlay visible={this.state.visible}>
        {this.state.children}
      </Overlay>
    );
  }
}
