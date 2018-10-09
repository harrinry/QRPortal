import React from 'react';
import { CLASSES } from './constants';
import { Overlay } from 'components';
import './style.css';

const AboutOverlay = ( props ) => {
  return <Overlay onMouseClickOut={props.onMouseClickOut} visible={props.isVisible}>
    <div className={CLASSES.overlayBody}>
      <div className={CLASSES.overlayBodyInner}>
        <div className={CLASSES.titleContainer}>
          <div className={CLASSES.logoContainerOvl}></div>
          <div className={CLASSES.overlayBodyTitle}>
            <h1>{props.title}</h1>
          </div>
        </div>
        <div className={CLASSES.scrollArea}>
          <div className={CLASSES.overlayBodyNews}>
            <h3>What's New?</h3>
            {props.news.map( (e, i) => <p key={i}>{e}</p>)}
          </div>
          <div className={CLASSES.overlayBodylicence}>
            <h3>LICENCE</h3>
            <p>
              {props.licence}
            </p>
            <div className={CLASSES.overlayBodyVersion}><p>Version : {props.version}</p></div>
          </div>
        </div>
      </div>
    </div>
  </Overlay>;
};

export default AboutOverlay;