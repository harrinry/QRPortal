import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from 'app/crd-app-actions';
import SearchContentComponent from './crd-search-content-component';

function mapStateToProps(state) {
  return {
    rulesList: state.app.qualityRulesList,
    ruleDetails: state.app.ruleDetails,
    isLoggedIn: state.app.isLoggedIn,
    searchResult: state.app.searchResult,
    searchTerm: state.app.searchTerm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRulesList: bindActionCreators(appActions.getRulesList, dispatch),
    getRuleDetails: bindActionCreators(appActions.getRuleDetails, dispatch),
    resetSearch: bindActionCreators(appActions.resetSearch, dispatch),
    searchQuery: bindActionCreators(appActions.searchQuery, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContentComponent);
