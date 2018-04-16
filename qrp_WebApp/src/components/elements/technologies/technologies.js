import React from 'react';
import Axios from 'axios';
import {BodyElementTechno, BodyBlock, BodyTitle, Radio, LOADRULESLIST} from '../../index';

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

  render(){
    if( this.state.data ){
      let technos = this.state.data.map(t => <BodyElementTechno value={t.name} className="bodyElementTechno inline" onclick={() => Radio.emit(LOADRULESLIST, t.href, t.name)} id={t.id} title={t.title}/>);

      return ( <div className='bodyRow container block'>
        <BodyTitle value='Technologies' />
        <BodyBlock value={technos}/>
      </div> );
    }

    return (<div></div>);
  }
}
