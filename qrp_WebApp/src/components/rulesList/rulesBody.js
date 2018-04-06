import React from 'react';
import { RulesTitle, RulesContainer } from '../index';


const localClassName = ['rulesList-container', 'static-overlay'],
  visibleClass = 'visible',
  sp = ' ';

export default class RulesBody extends React.Component{

  render(){
    return (
      <div className={this.getContainerClass( this.props )}>
        <RulesTitle icon={this.props.icon} title={this.props.title} />
        <RulesContainer href={this.props.href} />
      </div>
    );
  }

  getContainerClass( props ){
    return ((props && props.visible) ? localClassName.concat( visibleClass ).join( sp ) : localClassName.join( sp ));
  }
}