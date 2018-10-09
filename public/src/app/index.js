import { connect } from 'react-redux';
import { showNavigationView, showLandingPage } from 'body/body-actions';
import { NAVIGATION_VIEW, LANDING_PAGE } from 'body/body-constants';
import { goToLandingPage } from 'path-navigation/nv-actions';
import { hideSearchResults } from 'global-search/gs-actions';
import { clearCompareList } from 'compare/cmp-actions';
import { nullifyHistory } from 'common';
import App from './app-model';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
    view: state.contentBody.view
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleBack: (state) => {
      const view = state;
      console.log(view);
      switch (view) {
      case NAVIGATION_VIEW:
        dispatch(showNavigationView());
        break;
      case LANDING_PAGE:
        dispatch(showLandingPage());
        break;
      }
    },
    goToLandingPage: () => {
      dispatch(goToLandingPage());
      dispatch(showLandingPage());
      dispatch(hideSearchResults());
      dispatch(clearCompareList());
      nullifyHistory();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
