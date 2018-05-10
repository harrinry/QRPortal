import React from 'react';
import { Radio, RETURNTOSTART, LOADRULESLIST, Search, dynOvlSettings, SHOWOVERLAY,BodyElement, Column, HIDEOVERLAY} from '../index';

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
          <div className='titleheader'>{this.state.ruleName ? this.state.ruleName : 'CAST Structural Rules'}</div>
        </div>
        <div className='search-container right'>
          <div className='search-icon inline'></div>
          <div className='search-input-container'>
            <input type='text' placeholder='Search Rules' className='searchInput botBorder' ref='searchInput' onKeyPress={this.handleInput.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

  handleInput( e ){
    const key = e.key;
    if (key === 'Enter') {
      Search( this.refs.searchInput.value )
        .then(res => this.displaySearchResults(res.data));
    }
  }

  displaySearchResults(searchResults){
    const els = this.buildOverlayElemnents( searchResults );

    Radio.emit( SHOWOVERLAY, dynOvlSettings(els, 'Search Results ...', searchResults.length));
  }

  buildOverlayElemnents( data ){
    return (<Column key={0} width={'100%'} textAlign={'center'}>
      {data.map( e => {
        return e.resString.map( (res, index) => <BodyElement key={res + index} value={res} onclick={()=> {
          Radio.emit( LOADRULESLIST, e.technologies[index].href, e.technologies[index].name);
          Radio.emit( HIDEOVERLAY );
        }} id={e.id} />);
      })}
    </Column>);
  }

  returnToMain(){
    this.setState({
      backButton: 'hidden',
      ruleName: undefined
    });
    return Radio.emit(RETURNTOSTART);
  }
}
