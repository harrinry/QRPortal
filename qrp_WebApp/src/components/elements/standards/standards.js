import React from 'react';
import {BodyElement, BodyBlock, BodyTitle, dynOvlSettings, Column, APIQuery, Radio} from '../../index';
import {CAST, CISQ, OWASP, CWE} from './elements';
import {businessCrit, qualityStandards} from './queries';
import {Title,SectionStandard} from './title';
import {LOADRULESLIST, SHOWOVERLAY, HIDEOVERLAY} from '../../actions/actions';

const idPrefix = 'BC_',
  MainDivClassName = 'bodyRow container block';

//const casticon = '/img/castsoftware.svg';

export default class Standards extends React.Component {
  /*constructor(props){
    super(props);
    this.state = {
      menuVisible: false,
      menuData: undefined,
      scope: undefined
    };

    Radio.listen( LOADRULESLIST, () =>
      this.setState( _state => {
        return {
          menuVisible: false,
          menuData: _state.menuData,
          scope: undefined
        };
      }));
  }*/

  render(){
    let key = 0;
    return (<div className={MainDivClassName}>
      <BodyTitle value={Title}/>
      <p className="bodySection">{SectionStandard}</p>
      <BodyBlock>{[
        <BodyElement key={key++} slideDown={true} value={CAST} className="bodyElement inline casticon" onclick={()=> APIQuery(businessCrit, this.getBusinessCritera.bind(this))}/>,
        <BodyElement key={key++} slideDown={true} value={CISQ} className="bodyElement inline cisqicon" onclick={()=> APIQuery(qualityStandards, this.getCisqStandards.bind(this))}/>,
        <BodyElement key={key++} slideDown={true} value={OWASP} className="bodyElement inline owaspicon" onclick={()=> APIQuery(qualityStandards, this.getOwaspStandards.bind(this))}/>,
        <BodyElement key={key++} slideDown={true} value={CWE} className="bodyElement inline cweicon" onclick={()=> APIQuery(qualityStandards, this.getCweStandards.bind(this))}/>
      ]}</BodyBlock>
    </div>);
  }

  getCisqStandards( res ){
    const data = res.data,
      name = CISQ,
      href = data.find( ( e ) => e.name === name ).href;

    APIQuery( href, rr =>{
      let d = rr.data,
        out = d.map( c => {
          return { name: c.name, href: c.href };
        } ),
        menuEls = this.buildSlideDownMenuElements( out );
      return Radio.emit(SHOWOVERLAY, dynOvlSettings(menuEls,'CISQ Standards', out.length,"Select one of the following category:"));
    });
  }

  getOwaspStandards( res ){
    const data = res.data,
      name = OWASP,
      href = data.find( ( e ) => e.name === name ).href;

    APIQuery( href, rr =>{
      let d = rr.data,
        out = d.map( c => {
          return { name: c.name, href: c.href };
        } ),
        menuEls = this.buildSlideDownMenuElements( out );
      return Radio.emit(SHOWOVERLAY, dynOvlSettings(menuEls,'OWASP Standards', out.length,"Select one the following Top Ten:"));
    });
  }

  getCweStandards( res ){
    const data = res.data,
      name = CWE,
      href = data.find( ( e ) => e.name === name ).href;

    APIQuery( href, rr =>{
      let d = rr.data,
        out = d.map( c => {
          return { name: c.name, href: c.href };
        } ),
        menuEls = this.buildSlideDownMenuElements( out );
      return Radio.emit(SHOWOVERLAY, dynOvlSettings(menuEls,'CWE Standards', out.length,"Select one if the following category:"));
    });
  }

  getBusinessCritera( res ){
    const data = res.data,
      out = data.map( ( c ) => {
        return { id: idPrefix + c.id, name: c.name, href: c.href};
      });

    const menuEls = this.buildSlideDownMenuElements( out );
    return Radio.emit(SHOWOVERLAY, dynOvlSettings(menuEls, 'Business Criteria', out.length,"Select one of the following criteria:"));
  }

  determineMenuVisibility( nextScope ){
    return ( (this.state.scope === nextScope && this.state.menuVisible ) ? false : true );
  }

  buildSlideDownMenuElements( data ){
    return (<Column width={'100%'} textAlign={'left'}>{data.map( e => <BodyElement key={e.name + e.id} value={e.name} onclick={() => {
      Radio.emit( LOADRULESLIST, e.href, e.name);
      Radio.emit( HIDEOVERLAY );
    }} id={e.id} title={e.title}/>)}
    </Column>);
  }
}
