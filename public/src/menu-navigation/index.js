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
import { setParams } from 'compare/cmp-actions';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
    view: state.contentBody.view,
    technologies: state.navMenu.technologies,
    extensions: state.navMenu.extensions,
    selected: state.navMenu.selected,
    std_bc: state.navMenu.std_cast,
    std_cisq: state.navMenu.std_cisq,
    std_owasp: state.navMenu.std_owasp,
    std_cwe: state.navMenu.std_cwe
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    populateStd_bc: (exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchBusinessCriteria());
    },
    populateStd_cwe: (exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchCWE());
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
    onCisqClick: ( item ) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(clearListData());
      dispatch(setListCount(2));
      dispatch(showContentView());
      dispatch(fetchStandardsListData( item.href ));
      dispatch(setHeaderPath( PATHS.standard, PATHS.cisq, item ));
    },
    onOwaspClick: ( item ) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(clearListData());
      dispatch(setListCount(2));
      dispatch(showContentView());
      dispatch(fetchStandardsListData( item.href ));
      dispatch(setHeaderPath( PATHS.standard, PATHS.owasp,  item));
    },
    onCweClick: ( item ) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(clearListData());
      dispatch(setListCount(2));
      dispatch(showContentView());
      dispatch(fetchStandardsListData( item.href ));
      dispatch(setHeaderPath( PATHS.standard, PATHS.cwe, item ));
    },
    onBusinessCriteriaClick: (item) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(clearListData());
      dispatch(setListCount(1));
      dispatch(showContentView());
      dispatch(fetchWebData( item.href ));
      dispatch(setHeaderPath(PATHS.standard, PATHS.businessCriteria, item));
    },
    onTechnologyClick: (techno) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(clearListData());
      dispatch(setListCount(1));
      dispatch(showContentView());
      dispatch(fetchApiData( techno.href ));
      dispatch(setHeaderPath( PATHS.technologies , techno));
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