import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from 'app/crd-app-actions';
import Home from './crd-home-component';

function mapStateToProps(state) {
  return {
    mainMenu: state.app.mainMenu,
    isLoggedIn: state.app.isLoggedIn,
    loginErrorMessage: state.app.loginErrorMessage,
    isAuthRequestOngoing: state.app.isAuthRequestOngoing || false,
    searchCriterion: state.app.searchCriterion,
    searchTerm: state.app.searchTerm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMainMenu: bindActionCreators(appActions.getMainMenu, dispatch),
    login: bindActionCreators(appActions.login, dispatch),
    logout: bindActionCreators(appActions.logout, dispatch),
    resetLoginErrorMessage: bindActionCreators(appActions.resetLoginErrorMessage, dispatch),
    resetSearch: bindActionCreators(appActions.resetSearch, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
