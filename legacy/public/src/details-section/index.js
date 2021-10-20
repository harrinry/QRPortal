import { connect } from 'react-redux';
import RulesDetails from './ds-model';
import { showContentView, setListCount } from '../body/body-actions';
import { hideComparisonTable } from 'compare/cmp-actions';
import { clearDetailsData } from './ds-actions';
import { fetchQualityStandardsByTag } from 'global-search/gs-actions';
import { fetchApiData } from '../body-rules-list/brl-actions';
import { setHeaderPath } from 'path-navigation/nv-actions';
import { PATHS } from 'menu-navigation/mn-constants';
import { hideSearchResults } from '../global-search/gs-actions';
import { historyPushState } from '../common';

const mapDispatchToProps = (dispatch) => {
  return {
    onTagClick: ( val ) => {
      dispatch(hideComparisonTable());
      dispatch(showContentView());
      dispatch(fetchQualityStandardsByTag( val.id ));
      dispatch(clearDetailsData());
    },
    onTechnologyTagClick: ( val ) => {
      dispatch(hideComparisonTable());
      dispatch(hideSearchResults());
      dispatch(setListCount(1));
      dispatch(showContentView());
      dispatch(fetchApiData(val.href));
      dispatch(setHeaderPath( PATHS.technologies, val ));
      dispatch(clearDetailsData());
      historyPushState();
    }
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.ruleDetails.data,
    loading: state.ruleDetails.loading,
    searchVisible: state.search.resultsVisible,
    gsQuery: state.search.query
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RulesDetails);