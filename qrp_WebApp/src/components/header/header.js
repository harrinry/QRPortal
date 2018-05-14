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
      Search( this.refs.searchInput.value, 'qualityRules' )
        .then(res => this.displaySearchResults(res.data));
    }
  }

  displaySearchResults(searchResults){
    const els = this.buildOverlayElemnents( searchResults );
    let resulttitle = '';

    if(searchResults.length>=1) {
      resulttitle = searchResults.length+' results found';
    } else {
      resulttitle = 'No Rule Found';
    }

    Radio.emit( SHOWOVERLAY, dynOvlSettings(els,resulttitle, searchResults.length, 'Select one of the found rules to have more details'));
  }

  buildOverlayElemnents( data ){
    return (<Column key={0} width={'100%'} textAlign={'left'}>
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
