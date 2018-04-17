import React from 'react';

const localClassName = ['RuleInfo-container', 'R50-margins'],
  sp = ' ';

export default class RuleDetails extends React.Component{
  render(){
    return (
      <div className={localClassName.join( sp )}>
        <h2 className='ruleTitle'>{ this.props.data ? this.props.data.name : undefined}</h2>
        <div className='tags-container'>
        <ul>{this.props.data ? this.props.data.qualityStandards.id : undefined}</ul>
        </div>
        <div className='critical-container'>
        <p>{this.props.data ? this.props.data.critical : undefined}</p>
        </div>
        <div className='weight-container'>
        <p>{this.props.data ? this.props.data.weight : undefined}</p>
        </div>
        <div className='description-container'>
        <p className='rulesection'>Description</p>
          <p>{this.props.data ? this.props.data.description : undefined}</p>
        </div>
        <div className='rationale-container'>
          <p className='rulesection'>Rationale</p>
          <p>{this.props.data ? this.props.data.rationale : undefined}</p>
        </div>
        <div className='remediation-container'>
          <p className='rulesection'>Remediation</p>
          <p>{this.props.data ? this.props.data.remediation : undefined}</p>
        </div>
        <div className='sample-container'>
        <p className="rulesection">Sample</p>
          <pre><code>{this.props.data ? this.props.data.sample : undefined}</code></pre>
        </div>
        <div className='remediationsample-container'>
        <p className='rulesection'>Remediation Sample</p>
          <pre><code>{this.props.data ? this.props.data.remediationSample : undefined}</code></pre>
        </div>
        <div className='reference-container'>
        <p className='rulesection'>Reference</p>
          <p className='textrule'>{this.props.data ? this.props.data.reference : undefined}</p>
        </div>
        <div className='output-container'>
        <p className='rulesection'>Output</p>
          <p className='textrule'>{this.props.data ? this.props.data.output : undefined}</p>
        </div>
      </div>
    );
  }

  parseCodeSample(sample){
    const newLine = /\\n/g, htmlBR = /\\/;
    return sample.replace(newLine, htmlBR);
  }
}
