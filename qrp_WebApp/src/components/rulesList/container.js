import React from 'react';
import { RulesList, RuleDetails, Radio, APIQuery } from '../index';
import {lOADDETAILS} from './actions';

const localClassName = ['rule-container', 'block'],
  sp = ' ';

export default class RulesContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {};

    Radio.listen(lOADDETAILS, function( url ) {
      APIQuery(url, res => 
        this.setState({ 
          details: res.data
        }));
    }.bind(this));
  }

  render(){
    return (
      <div className={localClassName.join( sp )} >
        <RulesList href={this.props.href}/>
        <RuleDetails href={this.state.details}/>
      </div>
    );
  }
}