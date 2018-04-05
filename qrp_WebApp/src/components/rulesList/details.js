import React from 'react';

const localClassName = ['RuleInfo-container', 'R50-margins'],
  sp = ' ';

export default class RuleDetails extends React.Component{
  render(){
    return (
      <div className={localClassName.join( sp )}>
        <h2 className='ruleTitle'>{ this.props.data ? this.props.data.name : undefined}</h2>
        <div className='description-container'>
          <p>{this.props.data ? this.props.data.description : undefined}</p>
        </div>
        <div className='rationale-container'>
          <p>{this.props.data ? this.props.data.rationale : undefined}</p>
        </div>
        <div className='sample-container'>
          <pre><code>{this.props.data ? this.props.data.sample : undefined}</code></pre>
        </div>
      </div>
    );
  }

  parseCodeSample(sample){
    const newLine = /\\n/g, htmlBR = /\\/;
    return sample.replace(newLine, htmlBR);
  }
}