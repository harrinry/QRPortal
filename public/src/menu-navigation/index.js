import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationMenu from './mn-model';
import * as ACTIONS from './mn-actions';
import { fetchListData, showContentView, setListCount } from 'body/body-actions';
import { setHeaderPath } from 'path-navigation/nv-actions';
import { ITEMS } from './mn-constants';
import { QUERIES } from './mn-resources';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
    technologies: state.navMenu.technologies,
    extensions: state.navMenu.extensions,
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
    populateExtensions:(exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchExtensions());
    },
    onQualityStandardClick: ( name, href ) => {
      dispatch(setListCount(2));
      dispatch(showContentView());
      dispatch(fetchListData( href ));
      dispatch(setHeaderPath( {name: ITEMS.STANDARDS, href: QUERIES.standards}, {name, href}  ));
    },
    onBusinessCriteriaClick: (name, href) => {
      dispatch(setListCount(1));
      dispatch(showContentView());
      dispatch(fetchListData( href ));
      dispatch(setHeaderPath({name: ITEMS.STANDARDS, href: QUERIES.standards}, {name: ITEMS.BUSINESSCRITERIA, href: QUERIES.businessCriteria}, {name, href} ));
    },
    onTechnologyClick: (name, href) => {
      dispatch(setListCount(1));
      dispatch(showContentView());
      dispatch(fetchListData( href ));
      dispatch(setHeaderPath( {name: ITEMS.TECHNOLOGIES, href: QUERIES.technologies}, {name, href}  ));
    },
    setSelected: (ref) => {
      dispatch(ACTIONS.setSelectedItem(ref));
    },
    onExtensionsClick: ( name, href ) => {
      console.log(name + ' - ' + href);
    }
  };
};

NavigationMenu.propTypes = {
  viewType: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);