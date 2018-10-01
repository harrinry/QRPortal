import React from 'react';
import { COMMON_CLASSES, createClassName, setLocalStorage, readLocalStorage } from 'common/';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import NAV from 'nav/';
import ContentBody from 'body/';
import { CLASSES, MAILTO, versionKey, TITLE, LANDING_PAGE, swagger } from './app-constants';
import { Overlay } from 'components';
import './style.css';

class App extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      infoVisible: false
    };

    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  componentDidMount(){
    window.addEventListener('popstate', this.props.handleBack);

    fetch('/about')
      .then( res => res.json())
      .then(data => {
        const lastViewedVersion = readLocalStorage(versionKey);
        setLocalStorage(versionKey, data.version);
        this.setState({ MAILTO: MAILTO + data.version, 
          _version: lastViewedVersion, 
          currentVersion: data.version, 
          loading: false, 
          info: data, 
          infoVisible: false });
      })
      .catch( () => {
        setLocalStorage(versionKey, undefined);
        this.setState({ MAILTO: MAILTO + 'unknown'});
      });
  }

  componentWillUnmount(){
    window.removeEventListener('popstate', this.props.handleBack);
  }

  toggleOverlay(){
    return this.setState(_state => { 
      return {
        MAILTO: _state.MAILTO, 
        _version: _state._version, 
        currentVersion: _state.currentVersion, 
        loading: false, 
        info: _state.info, 
        infoVisible: !_state.infoVisible
      };
    });
  }

  render(){
    const props = this.props;
    const info = this.state.info;
    return (
      <div className={props.viewType === VIEW_TYPES.TILES_VIEW ? createClassName(COMMON_CLASSES.flexCol, COMMON_CLASSES.vh100) : createClassName(COMMON_CLASSES.flexRow, COMMON_CLASSES.vh100) }>
        <NAV/>
        <ContentBody/>
        <div className={CLASSES.floatingBETA}>BETA</div>
        {props.view === LANDING_PAGE ? 
          <React.Fragment>
            <div onClick={this.toggleOverlay} className={CLASSES.whatisnew}>What's New?</div>
            <a href={this.state.MAILTO}><div className={CLASSES.contactus}>Contact Us</div></a>
            <a href={swagger}><div className={CLASSES.api}>API</div></a>
            <div className={CLASSES.logoContainer}>
              <div className={CLASSES.castLogo}></div>
            </div>
          </React.Fragment> 
          : undefined}
        {this.state.loading ? 
          undefined
          : <Overlay onMouseClickOut={this.toggleOverlay} visible={this.state.infoVisible}>
            <div className={CLASSES.overlayBody}>
              <div className={CLASSES.overlayBodyInner}>
                <div className={CLASSES.titleContainer}>
                  <div className={CLASSES.logoContainerOvl}></div><div className={CLASSES.overlayBodyTitle}><h1>{TITLE}</h1></div>
                </div>
                <div className={CLASSES.scrollArea}>
                  <div className={CLASSES.overlayBodyNews}>
                    <h3>What's New?</h3>
                    {info.news.map( (e, i) => <p key={i}>{e}</p>)}
                  </div>
                  <div className={CLASSES.overlayBodylicence}>
                    <h3>LICENCE</h3>
                    <p>
                      {info.licence}
                    </p>
                    <div className={CLASSES.overlayBodyVersion}><p>Version : {info.version}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </Overlay>}
      </div>
    );
  }
}

export default App;
