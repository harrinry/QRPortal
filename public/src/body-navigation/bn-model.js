import React from 'react';
import PropTypes from 'prop-types';
import { Tile, LoadingSpinner } from 'components';
import './style.css';

const BodyNavigation = ( props ) => {
  return (
    <div className={'body-nav-container'}>
      <div className={'body-nav-title-container'}>
        <div className='body-nav-title'>{props.title}</div>
      </div>
      <div className={'body-nav-elements-container'}>
        {props.loading ? <LoadingSpinner/> : props.navContent.map( (e, i) => <Tile key={i} iconURL={e.iconURL} click={() => props.tileClick(e, props.title)}>{e.name}</Tile> )}
      </div>
    </div>
  );
};

BodyNavigation.propTypes = {
  navContent: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default BodyNavigation;