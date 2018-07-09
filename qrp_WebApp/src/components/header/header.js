import React from 'react';
import { Radio, RETURNTOSTART, LOADRULESLIST, Search, dynOvlSettings, SHOWOVERLAY,BodyElement, Column, HIDEOVERLAY, lOADDETAILS, APIQuery, LOADRULESLISTSANDDETAILS} from '../index';
import Axios from 'axios';

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

    Radio.listen(LOADRULESLISTSANDDETAILS, function( url, url2, techName){
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
          <div className='menu-icon square30 borderWhite pointerOnHover' onClick={this.loadAbout.bind(this)}>
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
      Search( this.refs.searchInput.value, 'qualityrules' )
        .then(res => this.displaySearchResults(res.data));
      this.refs.searchInput.value = '';
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
    return (<Column key={0} width={'97%'} textAlign={'left'}>
      {data.map( e => {
        return e.resString.map( (res, index) => <BodyElement key={res + index} value={res} onclick={()=> {
          Radio.emit( LOADRULESLIST, e.technologies[index].href, e.technologies[index].name);
          Radio.emit( lOADDETAILS, e.href);
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

  loadAbout(){
    if (this.state.backButton === 'visible') return ;
    const title = 'About CAST Structural Rules';
    Axios.get('about') 
      .then( res => {
        const aboutContent = this.aboutOverlayElements(res.data);
        Radio.emit( SHOWOVERLAY, dynOvlSettings(aboutContent, title.concat(' ', res.data.version), 50));
      }) 
      .catch((err)=>{
        const aboutContent = <p>{err}</p>;
        Radio.emit( SHOWOVERLAY, dynOvlSettings(aboutContent, title, 50));
      });
  }

  aboutOverlayElements( data ){
    return (<Column key={0} width={'97%'} textAlign={'left'} marginBottom={'20px'}>
      <h2>LICENSE</h2>
      <p>{data.licence}</p>
      <h3>What's new:</h3>
      <tr>
        {data.news.map( (info, idx) => <li key={idx}>{info}</li> )}
      </tr>
    </Column>);
  }
}
