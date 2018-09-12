import React from 'react';
import PropTypes from 'prop-types';
import { Tile, LoadingSpinner } from 'components';
import { CLASSES, defaultIconURL } from './bn-constants';
import { createClassName, COMMON_CLASSES} from '../common/';
import './style.css';

const BodyNavigation = ( props ) => {
  return (
    <div className={CLASSES.bodyContainer}>
      <div className={createClassName(CLASSES.titleContainer, COMMON_CLASSES.flexCol)}>
        <div className={CLASSES.iconContainer} style={stylize(props.icon)}></div>
        <div className={CLASSES.title}>{props.title}</div>
      </div>
      <div className={CLASSES.childContainer}>
        {props.loading ? <LoadingSpinner/> : props.navContent.map( (e, i) => <Tile key={i} icon={e.icon} click={() => props.tileClick(e, props.title, props.icon)}>{e.name}</Tile> )}
      </div>
    </div>
  );
};

function stylize( icon ){
  return {
    backgroundImage: icon ? 'url(' + icon + ')' : defaultIconURL,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '80%'
  };
}

BodyNavigation.propTypes = {
  navContent: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired
};

export default BodyNavigation;