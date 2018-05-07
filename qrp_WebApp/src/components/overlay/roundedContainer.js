import React from 'react';

export default class OverlayContainer extends React.PureComponent{
  render(){
    const styles = {
      height: this.props.float,
      width: this.props.width,
      backgroundColor: this.props.backgroundColor,
    };
    return (
      <div className='ovlContainer' style={styles}>
        <div className='ovl-body'>
          {this.props.children}
        </div>
      </div> 
    );
  }
}