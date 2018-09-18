import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES, CLOSEBTNURL } from './nv-constants';
import { DropdownSelector } from 'cfe-components/lib/dropdown';
import './style.scss';

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
      <DropdownSelector
        optionsClassName='mydropdown-selector'
        triggerClassName={'my-selector-dropdown-trigger'}
        value={'123'}
        options={[
          {
            label: 'Application Name is APP 1',
            value: '123',
            hasDivider: true,
          },
          {
            label: <a href=''>Application Name is APP 2</a>,
            isLink: true,
            value: '456',
            hasDivider: true,
          },
          {
            label: 'Application Name is APP 3',
            value: '789',
            hasDivider: true,
          },
          {
            label: 'Application Name is APP 4',
            value: '103',
          },
        ]}/></span>
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