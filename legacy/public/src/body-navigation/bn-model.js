import React from 'react';
import PropTypes from 'prop-types';
import { Tile, LoadingSpinner } from 'components/';
import { CLASSES, defaultIconURL, SECTIONS } from './bn-constants';
import { createClassName, COMMON_CLASSES} from 'common/';
import './style.css';

const BodyNavigation = ( props ) => {
  const isStandards = props.title.toLowerCase() === SECTIONS.standards ? true : false,
    iconSize = isStandards ? '100%' : undefined;
  return (
    <div className={CLASSES.bodyContainer}>
      {/* <div className={createClassName(CLASSES.titleContainer, COMMON_CLASSES.flexCol)}>
        <div className={CLASSES.iconContainer} style={stylize(props.icon)}></div>
        <div className={CLASSES.title}>{props.title}</div>
      </div> */}
      <div className={CLASSES.childContainer}>
        {props.loading ? <LoadingSpinner/> : props.navContent.map( (e, i) => <Tile key={i} iconSize={iconSize} icon={e.icon} click={() => props.tileClick(e, props.title, props.icon)}>{e.label || e.name}</Tile> )}
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
  navContent: PropTypes.array,
  title: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.string
};

export default BodyNavigation;