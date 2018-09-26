import React from 'react';
import PropTypes from 'prop-types';
import VerticalArray from 'components/array/';
import { compareFunction } from './bsl-lib';
import { HEADER, NOSTANDARDS, FILTERPLACEHOLDER, STANDARDS, CLASSES } from './bsl-constants';
import { Overlay } from '../components';
import './style.css';

const StandardsListArray = ( props ) => {
  return(
    <span className={CLASSES.container}>
      <Overlay onMouseClickOut={props.hideOverlay} visible={props.info.visible}>
        <div className={'test'}><a href={'/rest/' + props.info.query}>test url, click me</a></div>
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
