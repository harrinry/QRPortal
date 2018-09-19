import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { createClassName, COMMON_CLASSES } from '../common/';
import { CLASSES, NORULESSELECTED } from './ds-constants';
import LoadingSpinner from 'components/loading-spinner';

const RulesDetails = ( { data, loading, onTagClick } ) => {
  return (
    <div className={createClassName(COMMON_CLASSES.flexCol, CLASSES.detailsContainer)}>
      { loading ? <LoadingSpinner/> : 
        ( data ? 
          <div className={CLASSES.subContainer}>
            <div className={CLASSES.headerContainer}>
              <h2 className={CLASSES.title}>{data.name}</h2>
              <div className={createClassName(CLASSES.weightContainer, data.critical ? COMMON_CLASSES.critical : undefined)}>{data.maxWeight}</div>
            </div>
            <div className={CLASSES.tagContainer}>
              {data.qualityStandards.length > 0 ? 
                data.qualityStandards.map(function(listValue){
                  return <div key={listValue.id} className={CLASSES.tag} onClick={() => onTagClick(listValue)}>{listValue.id}</div>;
                }) : undefined }
            </div>
            <div className={CLASSES.descriptionContainer}>
              <p className={CLASSES.textArea}>Description</p>
              <p>{data.description}</p>
            </div>
            <div className={CLASSES.rationaleContainer}>
              <p className={CLASSES.textArea}>Rationale</p>
              <p>{data.rationale}</p>
            </div>
            <div className={CLASSES.remediation}>
              <p className={CLASSES.textArea}>Remediation</p>
              <p>{data.remediation}</p>
            </div>
            <div className={CLASSES.sampleContainer}>
              <p className={CLASSES.textArea}>Sample</p>
              <pre><code>{data.sample}</code></pre>
            </div>
            <div className={CLASSES.remediationSample}>
              <p className={CLASSES.textArea}>Remediation Sample</p>
              <pre><code>{data.remediationSample}</code></pre>
            </div>
            <div className={CLASSES.refContainer}>
              <p className={CLASSES.textArea}>Reference</p>
              <p className={CLASSES.textAreaRule}>{data.reference}</p>
            </div>
          </div>
          : <div className={COMMON_CLASSES.txtCenter}>{NORULESSELECTED}</div> )
      }
    </div>
  );
};

RulesDetails.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  onTagClick: PropTypes.func.isRequired
};

export default RulesDetails;