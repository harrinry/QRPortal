import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { webFetch } from 'common/';
import { SECTIONSQUERY, QUERYFAILED, CLASSES, _oIconStyle, WELCOMETEXT, TITLE } from './blp-constants';
import { VIEW_TYPES } from '../view-navigation/vn-constants';
import './style.css';

export default class LandingPage extends PureComponent{
  constructor(props){
    super(props);

    this.state = {
      sections: []
    };

  }

  componentDidMount(){
    webFetch(SECTIONSQUERY).then(
      data => this.setState({ sections: data}),
      err => this.setState({sections: [{...QUERYFAILED, err}]})); 
  }

  render(){
    return (
      <div className={CLASSES.container}>
        <div className={CLASSES.iconContainer} style={_oIconStyle}></div>
        <div className={CLASSES.title}>{TITLE}</div>
        <div className={CLASSES.welcomeText}>{WELCOMETEXT}</div>
        { this.props.viewType === VIEW_TYPES.TILES_VIEW ? 
          <div className={CLASSES.navigation}>
            <span>{this.state.sections.map( (e, i, arr) => {
              return (<span key={i}>
                <a href='#' className={CLASSES.link} onClick={() => this.props.loadSection(e)}>{e.name}</a>
                { i !== (arr.length - 1) ? <span className={CLASSES.separator}> - </span> : undefined}
              </span>);
            })}</span>
          </div> : undefined}
      </div>
    );
  }
}

LandingPage.propTypes = {
  loadSection: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired
};
