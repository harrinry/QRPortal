import React from 'react';
import { CLASSES } from './constants';
import { Overlay } from 'components';
import './style.css';

const AboutOverlay = ( props ) => {
  return <Overlay onMouseClickOut={props.onMouseClickOut} visible={props.isVisible}>
    <div className={CLASSES.overlayBody}>
      <div className={CLASSES.panelLeft}>
        <div className={CLASSES.logozone}>
            <div className={CLASSES.logoContainerOvl}></div>
            <div className={CLASSES.overlayBodyTitle}>
              {props.title}
            </div>
            <div className={CLASSES.overlayBodyVersion}>Version : {props.version}</div>
        </div>
        <div className={CLASSES.licence}>
          <div className={'licence-field'}>
            <div className={CLASSES.licinfo} onClick={(ev) => {
              ev.stopPropagation();
              props.onLicenceClick();
            }}>
              <span className={CLASSES.lictype}>MIT License</span><br></br>
              <span className={'copyright'}>Copyright(c) 2018 CAST Software</span>
            </div>
            <div className={CLASSES.castlogowhite}></div>
          </div>
        </div>
      </div>
      <div className={CLASSES.panelRight}>

        <div className={CLASSES.scrollArea}>
          { props.showLicense === true
            ? <div className={CLASSES.overlayBodylicence}>
              <h3>LICENCE</h3>
              <div className={CLASSES.closingCross} onClick={(ev) => {
                ev.stopPropagation();
                return props.licenseCloseEvent();
              }}></div>
              <p>
                {props.licence}
              </p>
            </div>
            : <div className={CLASSES.overlayBodyNews}>
              <h3>{"What's New?"}</h3>
              {props.news.map( (e, i) => <p key={i}>{e}</p>)}
            </div> }
        </div>
      </div>
    </div>
  </Overlay>;
};

export default AboutOverlay;
