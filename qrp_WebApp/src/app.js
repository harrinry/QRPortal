import React from 'react';
import ReactDOM from 'react-dom';
import { StaticOverlay, Header, Body, ParseQueryString, Radio, LOADRULESLIST, GetTitleFromURL, lOADDETAILS, SELECTME } from './components/index';

class App extends React.Component {

  componentDidMount(){
    let url = window ? window.location : undefined;

    if (!url) return;
    if (url.search === '') return;
    const qryParams = ParseQueryString( url.search );
    const { rlH, rlDH } = qryParams;
    let urlApprouved = true;

    GetTitleFromURL( rlH, 
      ( title ) => {
        Radio.emit( LOADRULESLIST, rlH, title );}, 
      ( err ) => {
        urlApprouved = false;
        console.log('An error occured while trying to load this url : '+ err);
      });

    if ( rlDH && urlApprouved ){
      Radio.emit( lOADDETAILS, rlDH );
      Radio.emit( SELECTME, rlDH );
    }
  }

  render(){
    return (
      <div>
        <Header/>
        <Body/>
        <StaticOverlay/>
      </div>
    );
  }
}

const app = document.getElementById('react-root');

ReactDOM.render(<App />, app);