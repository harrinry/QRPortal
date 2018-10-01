import { connect } from 'react-redux';
import RulesDetails from './ds-model';
import { showContentView } from '../body/body-actions';
import { hideComparisonTable } from '../compare/cmp-actions';
import { clearDetailsData } from './ds-actions';
import { fetchQualityStandardsByTag } from '../global-search/gs-actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onTagClick: ( val ) => {
      dispatch(hideComparisonTable());
      dispatch(showContentView());
      dispatch(fetchQualityStandardsByTag( val.id ));
      dispatch(clearDetailsData());
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