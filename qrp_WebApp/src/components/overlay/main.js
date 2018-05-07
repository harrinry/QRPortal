import React from 'react';
import {Overlay, Radio, SHOWOVERLAY, HIDEOVERLAY } from '../index';

export default class StaticOverlay extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      visible: undefined,
      children: undefined,
      height: undefined,
      width: undefined,
      title: undefined
    };
    
    Radio.listen( SHOWOVERLAY, ( params ) => this.setState( { 
      visible: true,
      children: params.children,
      height: params.height,
      width: params.width,
      title: params.title
    }));

    const resetState = () => this.setState({
      visible: undefined,
      children: undefined,
      height: undefined,
      width: undefined,
      title: undefined
    });

    Radio.listen( HIDEOVERLAY, resetState.bind(this) );
  }

  render(){
    return (
      <Overlay visible={this.state.visible} height={this.state.height} width={this.state.width} title={this.state.title}>
        {this.state.children}
      </Overlay>
    );
  }
}
