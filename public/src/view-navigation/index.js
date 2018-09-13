import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMenuView, setTilesView } from './vn-actions';
import ViewNavigation from './vn-model';
import { defaultToTiles, defaultToMenu } from './vn-lib';
import { goToLandingPage } from 'path-navigation/nv-actions';
import { showLandingPage } from '../body/body-actions';

const mapDispatchToProps = (dispatch) => {
  return {
    setTilesView: () => {
      defaultToTiles();
      dispatch(setTilesView());
    },
    setMenuView: () => {
      defaultToMenu();
      dispatch(setMenuView());
    },
    goToLandingPage: () => {
      dispatch(goToLandingPage());
      dispatch(showLandingPage());
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
  language: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewNavigation);