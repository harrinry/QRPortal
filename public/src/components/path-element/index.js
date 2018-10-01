import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES, CLOSEBTNURL } from './constants';
import './style.css';

const PathElement = ( props ) => {
  return (
    <span className={CLASSES.pathElement} onClick={() => props.gotoLocation ? props.gotoLocation(props) : undefined} > 
      { (props.showIcon && props.icon) ? <div className={CLASSES.pathElementIcon}
        style={{backgroundImage: 'url('+ props.icon +')'}}></div> : undefined}
      <div className={CLASSES.pathElementText} >{props.name}</div>
      {props.closeBtn ? <img src={CLOSEBTNURL} className={CLASSES.closeBtn} onClick={ () => props.onCloseBtnClick(props) }/> : undefined }
      {props.separator ? <div className={CLASSES.pathSeparator}> > </div> : undefined}
    </span>
  );
};

PathElement.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  icon: PropTypes.string,
  separator: PropTypes.bool.isRequired,
  showIcon: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  gotoLocation: PropTypes.func,
  onCloseBtnClick: PropTypes.func
};

export default PathElement;