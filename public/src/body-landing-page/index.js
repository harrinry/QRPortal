import { connect } from 'react-redux';
import LandingPage from './blp-model';
import { showNavigationView } from '../body/body-actions';
import { appendToHeaderPath } from '../path-navigation/nv-actions';
import { fetchNavigationData } from '../body-navigation/bn-actions';

const mapDispatchToProps = (dispatch) => {
  return {
    loadSection: ( sectionData ) => {
      dispatch(showNavigationView());
      dispatch(fetchNavigationData(sectionData.name, sectionData.href, sectionData.icon ));
      dispatch(appendToHeaderPath(sectionData));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);