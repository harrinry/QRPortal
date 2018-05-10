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
      title: undefined,
      sectiontitle: undefined,
      backgroundColor: undefined
    };

    Radio.listen( SHOWOVERLAY, ( params ) => this.setState( {
      visible: true,
      children: params.children,
      height: params.height,
      width: params.width,
      title: params.title,
      sectiontitle: params.sectiontitle,
      backgroundColor: params.backgroundColor
    }));

    const resetState = () => this.setState({
      visible: undefined,
      children: undefined,
      height: undefined,
      width: undefined,
      title: undefined,
      sectiontitle: undefined,
      backgroundColor: undefined
    });

    Radio.listen( HIDEOVERLAY, resetState.bind(this) );
  }

  render(){
    return (
      <Overlay visible={this.state.visible} height={this.state.height} width={this.state.width} title={this.state.title} sectiontitle={this.state.sectiontitle} backgroundColor={this.state.backgroundColor}>
        {this.state.children}
      </Overlay>
    );
  }
}
