import React from 'react';
import Axios from 'axios';
import {BodyElementTechno, BodyBlock, BodyTitle, Radio, MultiQuery, LOADRULESLIST} from '../../index';
import Filters from './filters';

export default class Technologies extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    Axios.get( 'technologies.json' )
      .then((res)=> this.setState({data: res.data}))
      .catch(err=> console.error(err.stack));
  }

  filterIndex ( id ){
    const index = Filters.all.indexOf( id );
    return index;
  }

  render(){
    if( this.state.data ){
      let key = 0, cpp, dotNet, rpm;
      const technos = this.state.data.map(t => {
        const i = this.filterIndex( t.id );
        if( i !== -1 ){
          if( i < 3 && !cpp ){
            cpp = true;
            const u = this.state.data.filter( e => {
                const idx = this.filterIndex( e.id );
                if( idx !== -1 && idx < 3 ){
                  return e;
                }
              },this ),
              urls = u.map( o => o.href );
            t.href = MultiQuery( ...urls );
            t.name = 'C/C++';
            return <BodyElementTechno key={key++} /*url={ICONURLS[t.name]}*/ value={t.name} className="bodyElementTechno element-inline" onclick={() => Radio.emit(LOADRULESLIST, t.href, t.name)} id={t.id} title={t.title}/>;
          } else if ( i === 3 && !dotNet ){
            dotNet = true;
            return ;
          } else if ( i > 3 && !rpm ){
            rpm = true;
            const u = this.state.data.filter( e => this.filterIndex( e.id ) > 3),
              urls = u.map( o => o.href );
            t.href = MultiQuery( ...urls );
            t.name = 'RPG';
            return <BodyElementTechno key={key++} /*url={ICONURLS[t.name]}*/ value={t.name} className="bodyElementTechno element-inline" onclick={() => Radio.emit(LOADRULESLIST, t.href, t.name)} id={t.id} title={t.title}/>;
          }
          return;
        }
        return <BodyElementTechno key={key++} /*url={ICONURLS[t.name]}*/ value={t.name} className="bodyElementTechno element-inline" onclick={() => Radio.emit(LOADRULESLIST, t.href, t.name)} id={t.id} title={t.title}/>;
      });

      return ( <div className='bodyRow container block'>
        <BodyTitle value='Technologies' />
        <BodyBlock value={technos}/>
      </div> );
    }

    return (<div></div>);
  }
}
