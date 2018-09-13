import React from 'react';
import PropTypes from 'prop-types';
import VerticalArray from 'components/array/';
import { compareFunction } from './bsl-lib';
import { HEADER, NOSTANDARDS, FILTERPLACEHOLDER, STANDARDS } from './bsl-constants';
import './style.css';

const StandardsListArray = ( props ) => {
  return(
    <VerticalArray childConstructor={props.arrayChildConstructor} filterPlaceholder={FILTERPLACEHOLDER} itemCountTitle={STANDARDS} onEmpty={NOSTANDARDS} headers={[HEADER]} compare={compareFunction}>
      {props.data}
    </VerticalArray>);
};

StandardsListArray.propTypes = {
  data: PropTypes.array.isRequired,
  arrayChildConstructor: PropTypes.func.isRequired
};

export default StandardsListArray;
