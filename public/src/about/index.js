import React from 'react';
import { CLASSES } from './constants';
import { Overlay } from 'components';
import './style.css';

const AboutOverlay = ( props ) => {
  return <Overlay onMouseClickOut={props.onMouseClickOut} visible={props.isVisible}>
    <div className={CLASSES.overlayBody}>
      <div className={'panel-right'}>
        <div className={'name-logo-version-zone'}>
          <div className={CLASSES.titleContainer}>
            <div className={CLASSES.logoContainerOvl}></div>
            <div className={CLASSES.overlayBodyTitle}>
              {props.title}
            </div>
            <div className={CLASSES.overlayBodyVersion}>Version : {props.version}</div>
          </div>
          <div className={'licence-field'}>
            <div className={'lic-info'} onClick={(ev) => {
              ev.stopPropagation();
              props.onLicenceClick();
            }}>
              <span className={'lic-type'}>MIT License</span>
              <span className={'copyright'}>Copyright(c) 2018 CAST Software</span>
            </div>
          </div>
          <div className={'castlogowhite'}></div>
        </div>
      </div>
      <div className={'panel-left'}>
        <div className={CLASSES.scrollArea}>
          { props.showLicense === true
            ? <div className={CLASSES.overlayBodylicence}>
              <h3>LICENCE</h3>
              <p>
                {props.licence}
              </p>
            </div>
            : <div className={CLASSES.overlayBodyNews}>
              <h3>What's New?</h3>
              {props.news.map( (e, i) => <p key={i}>{e}</p>)}
            </div> }
        </div>
      </div>
    </div>
  </Overlay>;
};

export default AboutOverlay;