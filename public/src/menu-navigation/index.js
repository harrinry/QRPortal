import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationMenu from './mn-model';
import * as ACTIONS from './mn-actions';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
    technologies: state.navMenu.technologies,
    extentions: state.navMenu.extentions,
    selected: state.navMenu.selected,
    std_bc: state.navMenu.std_cast,
    std_cisq: state.navMenu.std_cisq,
    std_owasp: state.navMenu.std_owasp
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    populateStd_bc: (exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchBusinessCriteria());
    },
    populateStd_cisq: (exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchCisq());
    },
    populateStd_owasp: (exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchOwasp());
    },
    populateTechnologies:(exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchTechnologies());
    },
    populateExtentions:(exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchExtentions());
    },
    onItemClick: (name, href) => {
      console.log(name + ' - ' + href);
    },
    setSelected: (ref) => {
      dispatch(ACTIONS.setSelectedItem(ref));
    }
  };
};

NavigationMenu.propTypes = {
  viewType: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);