import React from 'react';
import ReactDOM from 'react-dom';
import { StaticOverlay, Header, Body, ParseQueryString, Radio, GetTitleFromURL, lOADDETAILS, LOADRULESLISTSANDDETAILS, UpdateURL } from './components/index';

class App extends React.Component {

  componentDidMount(){
    let url = window ? window.location : undefined;

    if (!url) return;
    if (url.search === '') return;
    const qryParams = ParseQueryString( url.search );
    const { rlH, rlH2, rlDH } = qryParams;
    let urlApprouved = true;
    UpdateURL(rlH, rlDH, rlH2);
    GetTitleFromURL( rlH, 
      ( title ) => {
        Radio.emit( LOADRULESLISTSANDDETAILS, rlH, rlH2, title );
        if ( rlDH && urlApprouved ){
          Radio.emit( lOADDETAILS, rlDH );
        }
      },
      ( err ) => {
        urlApprouved = false;
        console.log('An error occured while trying to load this url : '+ err);
      });
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