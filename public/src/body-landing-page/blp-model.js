import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class LandingPage extends PureComponent{
  constructor(props){
    super(props);

    this.state = {
      sections: []
    };
  }

  render(){
    return (
      <div className={'landing-page-container'}>
        <div className={'landing-page-icon-container'} style={'style-object to grab background image same image as nav bar'}>
        </div>
        <div className={'landing-page-welcome-text'}>Welcome</div>
        <div className={'landing-page-navigation'}>
          {this.props.sections.map( e => <span className={'landing-page-section-link'} onClick={this.props.loadSection}>{e.value}</span> )}
          {/* standards - technologies - sources => these should be links */}
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  loadSection: PropTypes.func.isRequired
};
