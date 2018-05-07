import React from 'react';
import { Radio, RETURNTOSTART, LOADRULESLIST } from '../index';

export default class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      backButton: 'hidden',
      ruleName: undefined
    };

    Radio.listen(LOADRULESLIST, function( url, techName){
      return this.setState({
        backButton: 'visible',
        ruleName: techName
      });
    }.bind(this));

  }

  render(){
    return (
      <div className='fixedTop header'>
        <div className='left menu-container'>
          <div className='menu-icon square30 borderWhite'>
            <div className={this.state.backButton}><button type='button' onClick={this.returnToMain.bind(this)}></button></div>
          </div>
          <div className='hidden menu-elements'></div>
          <div className='titleheader'><b>CAST</b> Structural Rules <span>{this.state.ruleName ? '- '.concat( this.state.ruleName.replace(/(%20)/g, ' ') ): undefined}</span></div>
        </div>
        <div className='search-container right'>
          <div className='search-icon inline'></div>
          <div className='search-input-container'>
            <input type='text' className='searchInput botBorder' />
          </div>
        </div>
      </div>
    );
  }

  returnToMain(){
    this.setState({
      backButton: 'hidden',
      ruleName: undefined
    });
    return Radio.emit(RETURNTOSTART);
  }
}
