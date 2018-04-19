import React from 'react';

const localClassName = ['RuleInfo-container', 'R50-margins'],
  sp = ' ';

export default class RuleDetails extends React.Component{
  render(){
    if (this.props.data){
      return (
        <div className={localClassName.join( sp )}>
          <h2 className='ruleTitle'>{this.props.data.name}</h2>
          <div className='tags-container'>
            <ul>{this.props.data.qualityStandards.id}</ul>
          </div>
          <div className='weight-container'>
            {this.props.data.weight}
          </div>
          <div className='critical-container'>
            {this.props.data.critical ? 'nbsp;':undefined}
          </div>
          <div className='description-container'>
            <p className='rulesection'>Description</p>
            <p>{this.props.data.description}</p>
          </div>
          <div className='rationale-container'>
            <p className='rulesection'>Rationale</p>
            <p>{this.props.data.rationale}</p>
          </div>
          <div className='remediation-container'>
            <p className='rulesection'>Remediation</p>
            <p>{this.props.data.remediation}</p>
          </div>
          <div className='sample-container'>
            <p className="rulesection">Sample</p>
            <pre><code>{this.props.data.sample}</code></pre>
          </div>
          <div className='remediationsample-container'>
            <p className='rulesection'>Remediation Sample</p>
            <pre><code>{this.props.data.remediationSample}</code></pre>
          </div>
          <div className='reference-container'>
            <p className='rulesection'>Reference</p>
            <p className='textrule'>{this.props.data.reference}</p>
          </div>
          <div className='output-container'>
            <p className='rulesection'>Output</p>
            <p className='textrule'>{this.props.data.output}</p>
          </div>
        </div>
      );
    }
    return (<div></div>);
  }

  parseCodeSample(sample){
    const newLine = /\\n/g, htmlBR = /\\/;
    return sample.replace(newLine, htmlBR);
  }
}
