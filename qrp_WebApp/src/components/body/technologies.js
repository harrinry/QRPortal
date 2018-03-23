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
      .catch(err=>console.log(err));
  }

  render(){
      if( this.state.data ){
        let tech = this.state.data.map( t => t.name );
        
        return ( tech.map(name => <div>{name}</div>) )
      }
      
      return <div></div>
  }
}
