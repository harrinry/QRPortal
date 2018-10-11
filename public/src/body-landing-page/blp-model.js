import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { webFetch, createClassName, COMMON_CLASSES } from 'common/';
import { SECTIONSQUERY, QUERYFAILED, CLASSES, _oIconStyle, WELCOMETEXT, TITLE } from './blp-constants';
import './style.css';

export default class LandingPage extends PureComponent{
  constructor(props){
    super(props);

    this.state = {
      sections: [],
      hover: undefined
    };

  }

  componentDidMount(){
    webFetch(SECTIONSQUERY).then(
      data => this.setState({ sections: data}),
      err => this.setState({sections: [{...QUERYFAILED, err}]})); 
  }

  componentWillUnmount(){
    this.setState({});
  }

  stylizeIcon( url ){
    return {
      backgroundImage: 'url(' + url + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '60%'
    };
  }

  showSectionInfo(index){
    console.log('mouse is over section at index: ' + index);
    this.setState({hover: index});
  }

  render(){
    const hasHoverState = this.state.hover !== undefined ? true : false,
      sectionInfo = hasHoverState ? this.state.sections[this.state.hover].info : undefined;
    return (
      <div className={CLASSES.container}>
        <div className={CLASSES.SubContainer}>
          <div className={CLASSES.iconContainer} style={_oIconStyle}></div>
          <div className={CLASSES.title}>{TITLE}</div>
          <div className={CLASSES.welcomeText}>{WELCOMETEXT}</div>
          <div className={CLASSES.navigation}>
            {this.state.sections.map( (e, i) => {
              return (
                <div onMouseOver={() => this.showSectionInfo(i)} className={CLASSES.linkContainer} key={i} onClick={() => this.props.loadSection(e)}>
                  <div className={CLASSES.linkBlock} style={ this.stylizeIcon(e.icon)}></div>
                  <span className={CLASSES.linkBlockTitle}>{e.name}</span>
                </div>);
            })}
          </div>
          <div className={CLASSES.extraInfoContainer}>
            <div className={createClassName(CLASSES.sectionInfo, hasHoverState ? undefined : COMMON_CLASSES.hidden)}>{sectionInfo}</div>
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  loadSection: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired
};
