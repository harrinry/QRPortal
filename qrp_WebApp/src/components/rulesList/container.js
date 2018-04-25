import React from 'react';
import { RulesList, RuleDetails, Radio, APIQuery, RETURNTOSTART, UpdateURL, isStandard } from '../index';
import {lOADDETAILS, SELECTME} from './actions';

const localClassName = ['rule-container', 'block'],
  sp = ' ';

export default class RulesContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {};

    Radio.listen(lOADDETAILS, function( url ) {
      if (!url) return;
      APIQuery(url, (res) => {
        this.setState({ details: res.data });
        UpdateURL( null, null, url );
        Radio.emit( SELECTME, url);
      });
    }.bind(this));

    Radio.listen(RETURNTOSTART, () => this.setState({details: undefined}));
  }

  render(){
    const isStand = isStandard(this.props.href);
    return (
      <div className={localClassName.join( sp )}>
        <RulesList href={this.props.href} isStandard={isStand}/>
        <RuleDetails data={this.state.details} isStandard={isStand}/>
      </div>
    );
  }
}