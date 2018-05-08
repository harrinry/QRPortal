import React from 'react';
import {OverlayContainer, Layout} from '../index';

const className = ['overlay'];

export default class Overlay extends React.Component{
  render(){
    const visible = this.props.visible ? 'visible' : undefined;
    return (
      <div className={className.concat( visible ).join(' ')}>
        <OverlayContainer height={this.props.height} width={this.props.width} backgroundColor={this.props.backgroundColor}>
          <Layout title={this.props.title}>
            {this.props.children}
          </Layout>
        </OverlayContainer>
      </div>
    );
  }
}

