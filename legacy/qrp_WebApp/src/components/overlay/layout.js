import React, { Component } from 'react';
import {HIDEOVERLAY, Radio} from '../index';
export default class Layout extends Component{


  render(){

    return (
      <div className={'layoutContainer'}>
        <div className={'layoutTitleContainer'}>
          <h1 className={'layoutTitle'}>{this.props.title}</h1>
          <button className={'OverlayCloseBtn'} type={'button'} onClick={() => Radio.emit(HIDEOVERLAY)}></button>
          <p className="sectiontitle">{this.props.sectiontitle}</p>
        </div>
        {this.props.children}
      </div>
    );
  }
}
