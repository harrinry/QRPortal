import React from 'react';
import { CLASSES, LICENSE, WHATSNEW, COPYRIGHTS, LICENSETYPE } from './constants';
import { Overlay } from 'components';
import './style.css';

const AboutOverlay = ( props ) => {
  return <Overlay onMouseClickOut={props.onMouseClickOut} visible={props.isVisible}>
    <div className={CLASSES.overlayBody} onClick={(ev) => ev.stopPropagation()}>
      <div className={CLASSES.panelLeft}>
        <div className={CLASSES.logozone}>
          <div className={CLASSES.logoContainerOvl}></div>
          <div className={CLASSES.overlayBodyTitle}>
            {props.title}
          </div>
          <div className={CLASSES.overlayBodyVersion}>Version : {props.version}</div>
        </div>
        <div className={CLASSES.licence}>
          <div className={CLASSES.licensefield}>
            <div className={CLASSES.licinfo} onClick={props.onLicenceClick}>
              <span className={CLASSES.lictype}>{LICENSETYPE}</span><br></br>
              <span className={CLASSES.copyright}>{COPYRIGHTS}</span>
            </div>
            <div className={CLASSES.castlogowhite}></div>
          </div>
        </div>
      </div>
      <div className={CLASSES.panelRight}>

        <div className={CLASSES.scrollArea}>
          { props.showLicense === true
            ? <div className={CLASSES.overlayBodylicence}>
              <h3>{LICENSE}</h3>
              <div className={CLASSES.closingCross} onClick={props.onLicenceClick}></div>
              <p>
                {props.licence}
              </p>
            </div>
            : <div className={CLASSES.overlayBodyNews}>
              <h3>{WHATSNEW}</h3>
              {props.news.map( (e, i) => <p key={i}>{e}</p>)}
            </div> }
        </div>
      </div>
    </div>
  </Overlay>;
};

export default AboutOverlay;
