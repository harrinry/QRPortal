import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigateTo } from './nv-actions';
import NavHeader from './nv-model';
import { showNavigationView } from 'body/body-actions';
import { fetchNavigationData } from 'body-navigation/bn-actions';
import { fetchDetailsData, clearDetailsData } from '../details-section/ds-actions';
import { hideSearchResults } from '../global-search/gs-actions';

const mapDispatchToProps = ( dispatch ) => {
  return {
    gotoLocation: (props) => {
      if(props.separator){
        dispatch(navigateTo(props, props.index));
        dispatch(showNavigationView());
        dispatch(fetchNavigationData(props.name, props.href, props.icon));
      }
    },
    closeSearchResults: (props) => {
      const lastViewedRuleBeforeSearch = props.rules ? props.rules.find( e => e.selected === true ) : undefined;
      dispatch(hideSearchResults());
      if( lastViewedRuleBeforeSearch ) dispatch( fetchDetailsData( lastViewedRuleBeforeSearch.href ) );
      else dispatch(clearDetailsData());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    path: state.path.path,
    viewType: state.viewType.viewType,
    searchVisible: state.search.resultsVisible,
    rules: state.rulesList.data
  };
};

NavHeader.propTypes = {
  path: PropTypes.arrayOf(PropTypes.object),
  searchVisible: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);