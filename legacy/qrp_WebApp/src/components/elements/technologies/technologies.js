import React from 'react';
import Axios from 'axios';
import {BodyElementTechno, BodyBlock, BodyTitle, Radio, LOADRULESLIST} from '../../index';

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
    Axios.get( 'rules/technologies.json' )
      .then((res)=> this.setState({data: res.data}))
      .catch(err=> console.error(err.stack));
  }

  render(){
    if( this.state.data ){
      return ( <div className='bodyRow container block'>
        <BodyTitle value='Technologies' />
        <p className="bodySection">Browse the CAST Structural Rules by Technologies</p>
        <BodyBlock>{this.state.data.map(t => {
          if( t.name.toLowerCase() === 'no label' ) return;
          return <BodyElementTechno key={t.id} value={t.name} className="bodyElementTechno element-inline" onclick={() => Radio.emit(LOADRULESLIST, t.href, t.name)} id={t.id} title={t.title}/>;
        })}</BodyBlock>
      </div> );
    }

    return (<div></div>);
  }
}
