import React from 'react';
import Axios from 'axios';

export default class Technologies extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    Axios.get( 'technologies.json' )
      .then((res)=> this.setState({data: res.data}))
      .catch(err=>console.error(err.stack));
  }

  render(){
    if( this.state.data ){
      let tech = this.state.data.map( t => t.name ),
        jsx = tech.map(name => <div className='bodyElement tech inline'>{name}</div>);
      

      return ( <div className='bodyRow container block'>
        <div className='title-container'>
          <h2 className='title transformCaps'>Technologies</h2>
        </div>
        <div className='bodyElement-container scroll-x-overflow scrollbar-small'>
          {jsx}
        </div>
      </div> );
    }
    
    return (<div></div>);
  }
}
