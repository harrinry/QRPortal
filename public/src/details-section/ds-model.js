import React from 'react';
import './style.css';
import { createClassName } from 'common/';

const DetailsPanel = ( props ) => {

  if (props.data){

    const criticalblock = props.data.critical ? <div className='critical-container'>{' '}</div> : '';
    const weightblock = props.data.maxWeight ? <div className='weight-container'>{props.data.maxWeight}</div> : '';
    const remediationblock = props.data.remediation ? <div className='remediation-container detailssection'><p className='rulesection'>Remediation</p><p>{props.data.remediation}</p></div> : '';
    const rationaleblock = props.data.rationale ? <div className='rationale-container detailssection'><p className='rulesection'>Rationale</p><p>{props.data.rationale}</p></div> : '';
    const sampleblock = props.data.sample ? <div className='sample-container detailssection'><p className="rulesection">Sample</p><pre><code>{props.data.sample}</code></pre></div> : '';
    const remediationsampleblock = props.data.remediationSample ? <div className='remediationsample-container detailssection'><p className='rulesection'>Remediation Sample</p><pre><code>{props.data.remediationSample}</code></pre></div> : '';
    const referenceblock = props.data.reference ? <div className='reference-container detailssection'><p className='rulesection'>Reference</p><p className='textrule'>{props.data.reference}</p></div> : '';
    //const outputblock = props.data.output ? <div className='output-container detailssection'><p className='rulesection'>Output</p><p className='textrule'>{props.data.output}</p></div> : '';
    //const techCriteria = props.data.
    let tagsblock;

    if( props.data.qualityStandards && props.data.qualityStandards.length > 0)
    {
      tagsblock = <ul className='details-tag'>{props.data.qualityStandards.map(function(listValue){return <li key={listValue.id} className='detail-tag' onClick={() => props.onTagClick(listValue)}>{listValue.id}</li>;})}</ul>;
    }

    // optional at the end of the block
    /*{outputblock}*/

    return (
      <div className={createClassName('flxc', 'flxShnk4', 'ovfy')}>
        {criticalblock}
        {weightblock}
        <h2 className='ruleTitle'>{props.data.name}</h2>
        <div className='tags-container'>
          {tagsblock}
        </div>
        <div className='description-container detailssection'>
          <p className='rulesection'>Description</p>
          <p>{props.data.description}</p>
        </div>
        {rationaleblock}
        {remediationblock}
        {sampleblock}
        {remediationsampleblock}
        {referenceblock}
      </div>
    );
  }
  return (<div className={createClassName('flxc', 'flxGrw1', 'txtcenter', 'fright')}>No Rule Selected</div>);
};

export default DetailsPanel;