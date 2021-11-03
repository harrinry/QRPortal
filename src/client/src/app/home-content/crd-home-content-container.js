import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _get from 'lodash/get';
import * as appActions from 'app/crd-app-actions';
import HomeContentComponent from './crd-home-content-component';

function mapStateToProps(state, props) {
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContentComponent);
