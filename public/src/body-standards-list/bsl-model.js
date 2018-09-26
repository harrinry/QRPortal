import React from 'react';
import PropTypes from 'prop-types';
import VerticalArray from 'components/array/';
import { compareFunction } from './bsl-lib';
import { HEADER, NOSTANDARDS, FILTERPLACEHOLDER, STANDARDS, CLASSES } from './bsl-constants';
import { Overlay } from '../components';
import './style.css';

const StandardsListArray = ( props ) => {
  const info = props.info.data;
  return(
    <span className={CLASSES.container}>
      <Overlay onMouseClickOut={props.hideOverlay} visible={props.info.visible}>
        <div className={CLASSES.overlayBody}>
          <div className={CLASSES.overlayBodyTitle}><h3>{info.id}</h3></div>
          <div className={CLASSES.overlayBodyInfoName}><p>{info.name}</p></div>
          <div className={CLASSES.overlayBodynRules}><p>Contains {info.count} Rules</p></div>
          { props.info.url ? (<div className={CLASSES.overlayBodyExtLink}><span>Reference: </span><a href={info.url}>{info.url}</a></div>) : undefined }
        </div>
      </Overlay>
      <VerticalArray isLoading={props.loading} childConstructor={props.arrayChildConstructor} filterPlaceholder={FILTERPLACEHOLDER} itemCountTitle={STANDARDS} onEmpty={NOSTANDARDS} headers={[HEADER]} compare={compareFunction}>
        {props.data}
      </VerticalArray>
    </span>);
};

StandardsListArray.propTypes = {
  data: PropTypes.array.isRequired,
  arrayChildConstructor: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  info: PropTypes.object,
  hideOverlay: PropTypes.func.isRequired
};

export default StandardsListArray;
