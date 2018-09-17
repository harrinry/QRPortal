import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES } from './nv-constants';

const HeaderPathElement = ( props ) => {
  return (
    <span className={CLASSES.pathElement}>
      {props.icon ? <div className={CLASSES.pathElementIcon} 
        style={{backgroundImage: 'url('+ props.icon +')'}}></div> : undefined}
      <div className={CLASSES.pathElementText} onClick={() => props.gotoLocation ? props.gotoLocation(props) : undefined} >{props.name}</div>
      {props.closeBtn ? <div className={CLASSES.closeBtn} onClick={ () => props.onCloseBtnClick(props) }> x </div> : undefined }
      {props.separator ? <div className={CLASSES.pathSeparator}> > </div> : undefined}
    </span>
  );
};

HeaderPathElement.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  index: PropTypes.number,
  gotoLocation: PropTypes.func,
  onCloseBtnClick: PropTypes.func
};

export default HeaderPathElement;