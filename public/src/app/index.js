import { connect } from 'react-redux';
import { showNavigationView, showLandingPage } from '../body/body-actions';
import { NAVIGATION_VIEW, LANDING_PAGE } from '../body/body-constants';
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
      const view = state.state.view;
      switch (view) {
      case NAVIGATION_VIEW:
        dispatch(showNavigationView());
        break;
      case LANDING_PAGE:
        dispatch(showLandingPage());
        break;
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
