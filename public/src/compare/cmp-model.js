import React from 'react';
import PropTypes from 'prop-types';
import { VerticalArray } from 'components/';
import { compareFunction } from './cmp-lib';
import { HEADERS, NORULES, FILTERPLACEHOLDER, RULES } from './cmp-constants';

const CompareListArray = ( props ) => {
  return(
    <VerticalArray childConstructor={props.arrayChildConstructor} filterPlaceholder={FILTERPLACEHOLDER} itemCountTitle={RULES} onEmpty={NORULES} headers={[HEADERS.id, HEADERS.name, HEADERS.version, HEADERS.critical]} compare={compareFunction}>
      {props.data}
    </VerticalArray>);
};

CompareListArray.propTypes = {
  data: PropTypes.array.isRequired,
  arrayChildConstructor: PropTypes.func.isRequired
};

export default CompareListArray;