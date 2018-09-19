import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES, CLOSEBTNURL } from './nv-constants';
import DropDown from '../components/dropdown';

export const PathElement = ( props ) => {
  return (
    <span className={CLASSES.pathElement}>
      {props.icon ? <div className={CLASSES.pathElementIcon}
        style={{backgroundImage: 'url('+ props.icon +')'}}></div> : undefined}
      <div className={CLASSES.pathElementText} onClick={() => props.gotoLocation ? props.gotoLocation(props) : undefined} >{props.name}</div>
      {props.closeBtn ? <img src={CLOSEBTNURL} className={CLASSES.closeBtn} onClick={ () => props.onCloseBtnClick(props) }/> : undefined }
      {props.separator ? <div className={CLASSES.pathSeparator}> > </div> : undefined}
    </span>
  );
};

export const SelectorElement = ( props ) => {
  return (
    <span className={CLASSES.selector}>
      <DropDown label={'click me'}>
        <div onClick={()=> console.log(1)}>1</div>
        <div onClick={()=> console.log(2)}>2</div>
        <div onClick={()=> console.log(3)}>3</div>
        <div onClick={()=> console.log(4)}>4</div>
        <div onClick={()=> console.log(5)}>5</div>
      </DropDown>
    </span>
  );
};

PathElement.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  icon: PropTypes.string,
  index: PropTypes.number.isRequired,
  gotoLocation: PropTypes.func,
  onCloseBtnClick: PropTypes.func
};
