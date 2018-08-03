import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMenuView, setTilesView, goToLandingPage } from './vn-actions';
import ViewNavigation from './vn-model';

const mapDispatchToProps = (dispatch) => {
  return {
    setTilesView: () => {
      dispatch(setTilesView());
    },
    setMenuView: () => {
      dispatch(setMenuView());
    },
    goToLandingPage: () => {
      console.log('return to landing page');
      dispatch(goToLandingPage());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
    language: state.language.language
  };
};

ViewNavigation.propTypes = {
  viewType: PropTypes.string,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewNavigation);