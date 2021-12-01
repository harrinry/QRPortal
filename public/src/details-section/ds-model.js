import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { createClassName, COMMON_CLASSES, isEcho } from '../common/';
import { CLASSES, NORULESSELECTED, NOBPSSELECTED } from './ds-constants';
import LoadingSpinner from 'components/loading-spinner';

const RulesDetails = ( { data, loading, onTagClick, onTechnologyTagClick, searchVisible, gsQuery } ) => {
  let qualityStandardsTags, technologiesTags, qsTagData = [];

  if (data){

    if( (data.qualityStandards || []).length > 0 ){
      for (const qualityStandard of (data.qualityStandards || [])) {
        const exists = qsTagData.find( e => e.id === qualityStandard.id );
        if(exists) continue;
        qsTagData.push(qualityStandard);
      }
    }

    qualityStandardsTags = qsTagData.map(function(listValue, index){
      return <div key={index} className={CLASSES.tag} onClick={() => {
        if(!searchVisible || gsQuery !== listValue.id)
          onTagClick(listValue);
      }}>{listValue.id}</div>;
    });

    technologiesTags = (data.technologies || []).length > 0 ?
      (data.technologies || []).map((t, i)=>{
        return <div key={i+'techno'} className={CLASSES.technoTag} onClick={() => {
          if(!searchVisible || gsQuery !== t.id)
            onTechnologyTagClick(t);
        }}>{t.name}</div>;
      }) : [] ;
  }
  return (
    <div className={createClassName(COMMON_CLASSES.flexCol, CLASSES.detailsContainer)}>
      { loading ? <LoadingSpinner/> :
        ( data ?
          <div className={CLASSES.subContainer}>
            <div className={CLASSES.headerContainer}>
              <h2 className={CLASSES.title}>{(isEcho() ? (data.alternativeName ? data.alternativeName : data.name) : data.name)}</h2>
              { isEcho() ? undefined : ( data.critical ? <div className={createClassName(CLASSES.weightContainer,COMMON_CLASSES.critical)}></div> : <div className={createClassName(CLASSES.weightContainer, data.critical ? COMMON_CLASSES.critical : CLASSES.weightIcon)}>
                <span className={CLASSES.weight}>{data.maxWeight}</span>
              </div>)}
            </div>
            <div className={CLASSES.tagContainer}>
              {qualityStandardsTags}
            </div>
            <div className={CLASSES.tagContainer}>
              {technologiesTags}
            </div>
            {isEcho() ? undefined : ( data.description ? <div className={CLASSES.descriptionContainer}>
              <p className={CLASSES.textArea}>Description</p>
              <p>{data.description}</p>
            </div> : undefined ) }
            {isEcho() ? (data.rationale ? <div className={CLASSES.rationaleContainer}><p>{data.rationale}</p></div> : undefined) :

              (data.rationale ? <div className={CLASSES.rationaleContainer}>
                <p className={CLASSES.textArea}>Rationale</p>
                <p>{data.rationale}</p>
              </div> : undefined)}
            {data.remediation ? <div className={CLASSES.remediation}>
              <p className={CLASSES.textArea}>Remediation</p>
              <p>{data.remediation}</p>
            </div> : undefined}
            {data.sample ? <div className={CLASSES.sampleContainer}>
              <p className={CLASSES.textArea}>Sample</p>
              <pre><code>{data.sample}</code></pre>
            </div> : undefined}
            {data.remediationSample ? <div className={CLASSES.remediationSample}>
              <p className={CLASSES.textArea}>Remediation Sample</p>
              <pre><code>{data.remediationSample}</code></pre>
            </div> : undefined}
            {data.reference ? <div className={CLASSES.refContainer}>
              <p className={CLASSES.textArea}>Reference</p>
              <p className={CLASSES.textAreaRule}>{parseLinks(data.reference)}</p>
            </div> : undefined}
          </div>
          : <div className={createClassName(CLASSES.noRules , COMMON_CLASSES.txtCenter)}>{ (isEcho() ? NOBPSSELECTED : NORULESSELECTED)}</div> )
      }
    </div>
  );
};

function parseLinks( text ){
  if (!text) return text;
  const reg = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
    matches = text.match(reg), ml = matches ? matches.length : 0;
  let idxStart = 0, idxEnd = 0;

  let str = [];

  for (let i = 0; i < ml; i++) {
    const url = matches[i];
    idxStart = text.indexOf(url);
    const node = (<span key={'node-'+i}>{text.substring(idxEnd, idxStart)}</span>),
      ahrefBlock = (<a key={'anchor-'+i} href={url}>{url}</a>);
    str.push(node, ahrefBlock);
    idxEnd = idxStart + url.length;
  }
  return ml > 0 ? str : text;
}

RulesDetails.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  onTagClick: PropTypes.func.isRequired
};

export default RulesDetails;
