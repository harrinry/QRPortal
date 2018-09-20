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

  stylizeIcon( url ){
    return {
      backgroundImage: 'url(' + url + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '80%'
    };
  }

  render(){
    return (
      <div className={CLASSES.container}>
        <div className={CLASSES.iconContainer} style={_oIconStyle}></div>
        <div className={CLASSES.title}>{TITLE}</div>
        <div className={CLASSES.welcomeText}>{WELCOMETEXT}</div>
        { this.props.viewType === VIEW_TYPES.TILES_VIEW ? 
          <div className={CLASSES.navigation}>
            {this.state.sections.map( (e, i) => {
              return (
                <div className={CLASSES.linkContainer} key={i} onClick={() => this.props.loadSection(e)}>
                  <div className={CLASSES.linkBlock} style={ this.stylizeIcon(e.icon)}></div>
                  <span className={CLASSES.linkBlockTitle}>{e.name}</span>
                </div>);
            })}
          </div> : undefined}
        <div className={CLASSES.logoContainer}>
          <div className={CLASSES.castLogo}></div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  loadSection: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired
};
