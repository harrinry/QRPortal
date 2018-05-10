import React from 'react';
import Axios from 'axios';
import {BodyElementSources, BodyElement, Column,BodyBlock, BodyTitle, Radio, APIQuery, AIPSources, dynOvlSettings, LOADRULESLIST, SHOWOVERLAY, HIDEOVERLAY} from '../../index';

export default class Sources extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: undefined
    };
  }
  /*
  shouldComponentUpdate(nextProps, nextState){
    if ( !nextProps && !nextState ) return false;
    if ( this.state.data ) return false;
    return true;
  }*/

  componentDidMount(){
    const OnMountFilter = ( data ) =>{
      let ref = data.map( e => {

        return {
          id: e.name,
          name: e.name.substring(17), // FIXME : need a prettyprint name of the extension
          href: e.href
        };
      });
      ref.sort(( a , b ) => a.name.toUpperCase() - b.name.toUpperCase() );

      const res = ref.filter( e => e.id !== 'com.castsoftware.internal.platform' );
      return res;
    };

    APIQuery( 'extensions.json', (res)=> this.setState({data: OnMountFilter(res.data)}));
  }

  render(){
    if( this.state.data ){
      return ( <div className='bodyRow container block'>
        <BodyTitle value='Sources' />
        <p className="bodySection">Browse the CAST Structural Rules by Sources/Release Versions</p>
        <BodyBlock>
          <AIPSources key={'cast_aip_souce'} />
          {this.state.data.map(t => {
            return <BodyElementSources key={t.id} value={t.name} className="bodyElementTechno element-inline" onclick={() => Axios.get(t.href).then( res => this.onClickHandler(res, t.name)).catch(err => console.log(err.stack))} id={t.id} />;
          })}</BodyBlock>
      </div>);
    }

    return (<div></div>);
  }

  onClickHandler( res, name ){
    const data = res.data;
    let ref = data.map( e => {
      return {
        id: e.name,
        name: e.name,
        href: e.href
      };
    });
    const menuEls = this.buildOverlayElemnents( ref, name );
    Radio.emit( SHOWOVERLAY, dynOvlSettings(menuEls, name, ref.length,"Select one of the following version:"));
  }

  buildOverlayElemnents( data, name ){
    return (<Column key={JSON.stringify(data)} width={'100%'} textAlign={'left'}>
      {data.map( e => <BodyElement key={e.id + name} value={e.name} onclick={()=> {
        Radio.emit( LOADRULESLIST, e.href, name);
        Radio.emit( HIDEOVERLAY );
      }} id={e.id} /> )}
    </Column>);
  }
}
