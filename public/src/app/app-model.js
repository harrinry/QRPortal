import React from 'react';
import { COMMON_CLASSES, createClassName, setLocalStorage, readLocalStorage } from 'common/';
import NAV from 'nav/';
import ContentBody from 'body/';
import { CLASSES, CONTACTUS, versionKey, TITLE, LANDING_PAGE, swagger, CASTSOFTWARE } from './app-constants';
import About from 'about/';
import './style.css';

class App extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      infoVisible: false,
      licenseVisible: false
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
        this.setState({ 
          _version: lastViewedVersion, 
          currentVersion: data.version, 
          loading: false, 
          info: data, 
          infoVisible: false,
          licenseVisible: false });
      })
      .catch( () => {
        setLocalStorage(versionKey, undefined);
      });
  }

  componentWillUnmount(){
    window.removeEventListener('popstate', this.props.handleBack);
  }

  toggleNewsLicense(){
    this.setState(_state => {
      return {
        ..._state,
        licenseVisible: !_state.licenseVisible
      };
    });
  }

  toggleOverlay(){
    return this.setState(_state => { 
      return {
        MAILTO: _state.MAILTO, 
        _version: _state._version, 
        currentVersion: _state.currentVersion, 
        loading: false, 
        info: _state.info, 
        infoVisible: !_state.infoVisible,
        licenseVisible: false
      };
    });
  }

  render(){
    const props = this.props;
    const info = this.state.info;
    return (
      <div className={createClassName(COMMON_CLASSES.flexCol, COMMON_CLASSES.vh100)}>
        <NAV/>
        <ContentBody/>
        {props.view === LANDING_PAGE ? 
          <React.Fragment>
            <div className={CLASSES.floatingFooter}>
              <div onClick={this.toggleOverlay} className={CLASSES.whatisnew}>What's New?</div>
              <a href={swagger}><div className={CLASSES.api}>API</div></a>
              <a href={CONTACTUS}><div className={CLASSES.contactus}>Contact Us</div></a>
            </div>
            <div className={CLASSES.logoContainer}>
              <a href={CASTSOFTWARE}><div className={CLASSES.castLogo}></div></a>
            </div>
          </React.Fragment> 
          : undefined}
        {this.state.loading ? 
          undefined
          : <About 
            title={TITLE}
            version={info.version}
            licence={info.licence}
            onMouseClickOut={this.toggleOverlay}
            isVisible={this.state.infoVisible}
            news={info.news}
            showLicense={this.state.licenseVisible}
            onLicenceClick={this.toggleNewsLicense.bind(this)}/>}
      </div>
    );
  }
}

export default App;
