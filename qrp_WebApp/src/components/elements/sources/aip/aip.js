import React from 'react';
import {BodyElementSources, BodyElement, Column, Radio, APIQuery, SHOWOVERLAY, HIDEOVERLAY, LOADRULESLIST, dynOvlSettings} from '../../../index';

const id = 'AIP_id',
  ClassName = 'bodyElementTechno element-inline',
  val ='CAST AIP',
  aipQuery = 'CAST_AIP.json';


export default class AIPSources extends React.Component {
  render(){
    return (<BodyElementSources key={id} className={ClassName} id={id}
      value={val} onclick={()=> {
        APIQuery(aipQuery, this.onClickHandler.bind(this));}}/>);
  }

  onClickHandler( res ) {
    const data = res.data;
    let ref = data.map( e => {
      const name = e.name.substring(0, e.name.search(/_/g) );
      return {
        id: e.name,
        name: name,
        version: parseInt(name.replace(/\./g,'')),
        href: e.href
      };
    });
    ref.sort(( a , b ) => a.version - b.version );
    let ret = [];
    ret[0] = ref.filter( e => (e.version >= 800 && e.version < 810) );
    ret[1] = ref.filter( e => (e.version >= 810 && e.version < 820));
    ret[2] = ref.filter( e => (e.version >= 820 && e.version < 830) || e.version === 8210 );
    ret[3] = ref.filter( e => (e.version >= 830 && e.version < 840));
  
    const menuEls = ret.map( e => this.buildOverlayElemnents( e ) );
    return Radio.emit( SHOWOVERLAY, dynOvlSettings(menuEls, val, ret[2].length));
  }

  buildOverlayElemnents( data ) {
    return (<Column key={JSON.stringify(data)} width={'20%'} textAlign={'center'}>
      {data.map( e => <BodyElement key={e.id} value={e.name} onclick={()=> {
        Radio.emit( LOADRULESLIST, e.href, val.concat(' ', e.name));
        Radio.emit( HIDEOVERLAY );
      }} id={e.id} /> )}
    </Column>);
  }
}

