import React from 'react';

const localClassName = ['RuleInfo-container', 'R50-margins'],
  sp = ' ';

export default class RuleDetails extends React.Component{
  render(){
    return (
      <div className={localClassName.join( sp )}>
        {this.props.href}
      </div>
    );
  }
}