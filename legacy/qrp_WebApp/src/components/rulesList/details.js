import React from 'react';
import {LOADRULESLIST, Radio} from '../index';

const localClassName = 'RuleInfo-container',
  standardClass = 'R50-margins',
  nStdClass = 'D40-margins',
  sp = ' ';

function queryFromTag( tagValue ){
  const url = `AIP/quality-standards/${tagValue.standard}/items/${tagValue.id}/quality-rules`;
  Radio.emit(LOADRULESLIST, url, tagValue.id);
}

export default class RuleDetails extends React.Component{
  render(){
    if (this.props.data){

      const criticalblock = this.props.data.critical ? (<div className='critical-container'>{' '}</div>) : ('');
      const weightblock = this.props.data.maxWeight ? (<div className='weight-container'>{this.props.data.maxWeight}</div>) : ('');
      const remediationblock = this.props.data.remediation ? (<div className='remediation-container detailssection'><p className='rulesection'>Remediation</p><p>{this.props.data.remediation}</p></div>) : ('');
      const rationaleblock = this.props.data.rationale ? (<div className='rationale-container detailssection'><p className='rulesection'>Rationale</p><p>{this.props.data.rationale}</p></div>) : ('');
      const sampleblock = this.props.data.sample ? (<div className='sample-container detailssection'><p className="rulesection">Sample</p><pre><code>{this.props.data.sample}</code></pre></div>) : ('');
      const remediationsampleblock = this.props.data.remediationSample ? (<div className='remediationsample-container detailssection'><p className='rulesection'>Remediation Sample</p><pre><code>{this.props.data.remediationSample}</code></pre></div>) : ('');
      const referenceblock = this.props.data.reference ? (<div className='reference-container detailssection'><p className='rulesection'>Reference</p><p className='textrule'>{this.props.data.reference}</p></div>) : ('');
      const outputblock = this.props.data.output ? (<div className='output-container detailssection'><p className='rulesection'>Output</p><p className='textrule'>{this.props.data.output}</p></div>) : ('');
      //const techCriteria = this.props.data.
      const length = this.props.data.qualityStandards.length;
      let tagsblock = ('');

      if(length>0)
      {
        tagsblock = (<ul className='details-tag'>{this.props.data.qualityStandards.map(function(listValue){return <li key={listValue.id} className='detail-tag' onClick={() => queryFromTag(listValue)}>{listValue.id}</li>;})}</ul>);
      }

      // optional at the end of the block
      /*{outputblock}*/


      return (
        <div className={this.props.isStandard
          ? localClassName.concat(sp, standardClass)
          : localClassName.concat(sp, nStdClass)}>
          {criticalblock}
          {weightblock}
          <h2 className='ruleTitle'>{this.props.data.name}</h2>
          <div className='tags-container'>
            {tagsblock}
          </div>
          <div className='description-container detailssection'>
            <p className='rulesection'>Description</p>
            <p>{this.props.data.description}</p>
          </div>
          {rationaleblock}
          {remediationblock}
          {sampleblock}
          {remediationsampleblock}
          {referenceblock}
        </div>
      );
    }
    return (<div className="noruleselected">No Rule Selected</div>);
  }

  parseCodeSample(sample){
    const newLine = /\\n/g, htmlBR = /\\/;
    return sample.replace(newLine, htmlBR);
  }
}
