import React from 'react';
import ReactDOM from 'react-dom';
import { StaticOverlay, Header, Body, ParseQueryString, Radio, LOADRULESLIST, GetTitleFromURL/*, lOADDETAILS, SELECTME */} from './components/index';
import { Provider } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    let url = window ? window.location : undefined;

    if (!url) return;
    if (url.search === '') return;
    const qryParams = ParseQueryString( url.search );
    const { rlH/*, rlName/*, rlDH */} = qryParams;

    GetTitleFromURL( rlH, 
      ( title ) => Radio.emit( LOADRULESLIST, rlH, title ), 
      ( err ) => console.log('An error occured while trying to load this url'));

    /*if ( rlDH ){
      Radio.emit( lOADDETAILS, rlDH );
      Radio.emit( SELECTME, rlDH );
    }*/
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