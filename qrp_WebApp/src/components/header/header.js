import React from 'react';
import { Radio, RETURNTOSTART, LOADRULESLIST } from '../index';

export default class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      backButton: 'hidden'
    };

    Radio.listen(LOADRULESLIST, function(){
      return this.setState({
        backButton: 'visible'
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
          <div className='titleheader'><b>CAST</b> Structural Rules</div>
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
      backButton: 'hidden'
    });
    return Radio.emit(RETURNTOSTART);
  }
}
