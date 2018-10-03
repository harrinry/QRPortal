import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationMenu from './mn-model';
import * as ACTIONS from './mn-actions';
import { showContentView, setListCount} from 'body/body-actions';
import { fetchStandardsListData } from 'body-standards-list/bsl-actions';
import { fetchWebData, fetchApiData, clearListData } from 'body-rules-list/brl-actions';
import { setHeaderPath } from 'path-navigation/nv-actions';
import { PATHS } from './mn-constants';
import { hideSearchResults } from 'global-search/gs-actions';
import { clearDetailsData } from 'details-section/ds-actions';
import { setParams } from '../compare/cmp-actions';
// import { push } from 'connected-react-router';

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
    onCisqClick: ( name, href ) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(clearListData());
      dispatch(setListCount(2));
      dispatch(showContentView());
      dispatch(fetchStandardsListData( href ));
      dispatch(setHeaderPath( PATHS.standard, PATHS.cisq, {name} ));
    },
    onOwaspClick: ( name, href ) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(clearListData());
      dispatch(setListCount(2));
      dispatch(showContentView());
      dispatch(fetchStandardsListData( href ));
      dispatch(setHeaderPath( PATHS.standard, PATHS.owasp,  {name} ));
    },
    onBusinessCriteriaClick: (name, href) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(clearListData());
      dispatch(setListCount(1));
      dispatch(showContentView());
      dispatch(fetchWebData( href ));
      dispatch(setHeaderPath(PATHS.standard, PATHS.businessCriteria, {name}));
    },
    onTechnologyClick: (name, href) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(clearListData());
      dispatch(setListCount(1));
      dispatch(showContentView());
      dispatch(fetchApiData( href ));
      dispatch(setHeaderPath( PATHS.technologies , {name}));
    },
    setSelected: (ref) => {
      dispatch(ACTIONS.setSelectedItem(ref));
    },
    onExtensionsClick: ( extension ) => {
      fetch(extension.href).then(res => res.json()).then( data => {
        const version = data[0];
        dispatch(hideSearchResults());
        dispatch(clearDetailsData());
        dispatch(clearListData());
        dispatch(setListCount(1));
        dispatch(showContentView());
        dispatch(fetchWebData( version.href ));
        dispatch(setHeaderPath( PATHS.extensions, extension, data));
        dispatch(setParams(version));
      }).catch( err => console.log(err) );
    }
  };
};

NavigationMenu.propTypes = {
  viewType: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);