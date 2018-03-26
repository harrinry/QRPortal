import React from 'react';

export default class Header extends React.Component{
  render(){
    return (
      <div className='fixedTop header'>
        <div className='left menu-container'>
          <div className='menu-icon square30 borderWhite'>icon</div>
          <div className='hidden menu-elements'></div>
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
}