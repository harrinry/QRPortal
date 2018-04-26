import React from 'react';
import Axios from 'axios';
import {BodyElementTechno, BodyBlock, BodyTitle, Radio, TechnoFilter, LOADRULESLIST} from '../../index';

export default class Technologies extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState){
    if ( !nextProps && !nextState ) return false;
    if ( this.state.data ) return false;

    return true;
  }

  componentDidMount(){
    Axios.get( 'technologies.json' )
      .then((res)=> this.setState({data: TechnoFilter(res.data)}))
      .catch(err=> console.error(err.stack));
  }

  render(){
    if( this.state.data ){
      return ( <div className='bodyRow container block'>
        <BodyTitle value='Technologies' />
        <BodyBlock>{this.state.data.map(t => {
          return <BodyElementTechno key={t.id} value={t.name} className="bodyElementTechno element-inline" onclick={() => Radio.emit(LOADRULESLIST, t.href, t.name)} id={t.id} title={t.title}/>;
        })}</BodyBlock>
      </div> );
    }

    return (<div></div>);
  }
}
