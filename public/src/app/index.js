import { connect } from 'react-redux';
import { showLandingPage, } from 'body/body-actions';
import { goToLandingPage } from 'path-navigation/nv-actions';
import { hideSearchResults } from 'global-search/gs-actions';
import { clearCompareList } from 'compare/cmp-actions';
import { historyPushState } from 'common';
import App from './app-model';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
    view: state.contentBody.view
  };
};

const directToLandingPage = (dispatch) => {
  dispatch(goToLandingPage());
  dispatch(showLandingPage());
  dispatch(hideSearchResults());
  dispatch(clearCompareList());
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleBack: () => {     
      window.location.reload();
    },
    goToLandingPage: () => {
      directToLandingPage(dispatch);
      historyPushState();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
