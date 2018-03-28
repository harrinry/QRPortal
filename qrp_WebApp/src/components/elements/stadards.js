import React from 'react';
import {BodyElement, BodyBlock, BodyTitle, SlidedownMenu, APIQuery} from '../index';

export default class Standards extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (<div className='bodyRow container block'>
      <BodyTitle value='Standards'/>
      <BodyBlock value={[
        <BodyElement value='CAST' onclick={()=> APIQuery('business-criteria', this.getBusinessCritera.bind(this))}/>,
        <BodyElement value='CISQ'/>,
        <BodyElement value='OWASP'/>,
        <BodyElement value='CWE'/>
      ]}/>
      <SlidedownMenu value={this.state.menuData} visible={this.state.menuVisible} />
    </div>);
  }

  getBusinessCritera( res ){
    let data = res.data,
      idPrefix = 'BC_';

    let out = data.map( ( c ) => { 
      return { id: idPrefix + c.id, name: c.name, href: c.href} ;
    });
    // do something with output
    let menuEls = this.buildSlideDownMenuElements( out ),
      nextScope = 'CAST';
    return this.setState({ menuData: menuEls, menuVisible: this.determineMenuVisibility( nextScope ), scope: nextScope });
  }

  determineMenuVisibility( nextScope ){
    return ( (this.state.scope === nextScope && this.state.menuVisible ) ? false : true );
  }

  buildSlideDownMenuElements( data ){
    return data.map( e => <BodyElement value={e.name} href={e.href} id={e.id}/> );
  }
}
