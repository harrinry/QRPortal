import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { webFetch, createClassName } from 'common/';
import { SECTIONSQUERY, QUERYFAILED, CLASSES, _oIconStyle, WELCOMETEXT, TITLE } from './blp-constants';
import './style.css';

export default class LandingPage extends PureComponent{
  constructor(props){
    super(props);

    this.state = {
      sections: [],
      hover: undefined,
      timer: undefined,
      isHidden: true
    };

  }

  componentDidMount(){
    webFetch(SECTIONSQUERY).then(
      data => this.setState({ sections: data}),
      err => this.setState({sections: [{...QUERYFAILED, err}]})); 
  }

  componentWillUnmount(){
    clearTimeout(this.state.timer);
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
    clearTimeout(this.state.timer);
    this.setState({
      hover: index,
      timer: setTimeout( function(){ this.setState({isHidden:true});}.bind(this), 5000 ),
      isHidden: false
    });
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
            <div className={createClassName(CLASSES.sectionInfo, this.state.isHidden ? CLASSES.hideOpacity : undefined)}>{sectionInfo}</div>
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
