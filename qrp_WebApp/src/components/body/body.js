import React from 'react';
import { Technologies, Standards, RulesBody, Radio, LOADRULESLIST } from '../index';

export default class Body extends React.Component{
  constructor(props){
    super(props);

    this.state = {};

    Radio.listen( LOADRULESLIST, this.LoadRuleList.bind(this) );
  }
  
  LoadRuleList( url, name ){
    this.setState({
      rulesVisible: true,
      title: name,
      rulesHref: url
    });
  }

  render(){
    return (
      <div className='body'>
        <div className='static-UI'>
          <Standards />
          <Technologies />
        </div>
        <div className='rules'>
          <RulesBody visible={this.state.rulesVisible} 
            icon={this.state.title} 
            title={this.state.title}
            href={this.state.rulesHref}/>
        </div>
      </div>
    );
  }
}