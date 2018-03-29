import React from 'react';
import Axios from 'axios';
import {BodyElement, BodyBlock, BodyTitle} from '../../index';

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
      let technos = this.state.data.map(t => <BodyElement value={t.name} href={t.href}/>);

      return ( <div className='bodyRow container block'>
        <BodyTitle value='Technologies' />
        <BodyBlock value={technos}/>
      </div> );
    }
    
    return (<div></div>);
  }
}
