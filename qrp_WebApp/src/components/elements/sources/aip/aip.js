import React from 'react';
import {BodyElementSources, BodyElement, Column, Radio, APIQuery, SHOWOVERLAY, HIDEOVERLAY, LOADRULESLIST, dynOvlSettings} from '../../../index';
import formatVersionName from '../versionNamePP';

const id = 'AIP_id',
  ClassName = 'bodyElementTechno element-inline',
  val ='CAST AIP',
  aipQuery = 'AIP/versions.json';


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
    ret[0] = ref.filter( e => (e.version >= 830 && e.version < 840) ).reverse();
    ret[1] = ref.filter( e => (e.version >= 820 && e.version < 830) || e.version === 8210 ).reverse();
    ret[2] = ref.filter( e => (e.version >= 810 && e.version < 820)).reverse();
    ret[3] = ref.filter( e => (e.version >= 800 && e.version < 810)).reverse();

    const menuEls = ret.map( e => this.buildOverlayElemnents( e ) );
    return Radio.emit( SHOWOVERLAY, dynOvlSettings(menuEls, val, ret[1].length,'Select one of the following version:'));
  }

  buildOverlayElemnents( data ) {
    return (<Column key={JSON.stringify(data)} width={'20%'} textAlign={'left'}>
      {data.map( e => <BodyElement key={e.id} value={formatVersionName(e.name)} onclick={()=> {
        Radio.emit( LOADRULESLIST, e.href+'/quality-rules', val.concat(' ', e.name));
        Radio.emit( HIDEOVERLAY );
      }} id={e.id} /> )}
    </Column>);
  }
}
