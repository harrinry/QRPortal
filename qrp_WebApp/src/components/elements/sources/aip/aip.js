import React from 'react';
import {BodyElement, BodyBlock, BodyTitle, SlidedownMenu, Radio} from '../../../index';

const idPrefix = 'AIP_',
  MainDivClassName = 'bodyRow container block';

export default class AIPSources extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

  }

  render(){
    return (<div className={MainDivClassName}>
      <BodyTitle value={''}/>
      <BodyBlock></BodyBlock>
      <SlidedownMenu visible={this.state.menuVisible}>{this.state.menuData}</SlidedownMenu>
    </div>);
  }

  determineMenuVisibility( nextScope ){
    return ( (this.state.scope === nextScope && this.state.menuVisible ) ? false : true );
  }

  buildSlideDownMenuElements( data ){
    return data.map( e => <BodyElement key={e.name + e.id} value={e.name} onclick={() => Radio.emit(LOADRULESLIST, e.href, e.name)} id={e.id} title={e.title}/> );
  }
}
