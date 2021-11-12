import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from 'app/crd-app-actions';
import TreeComponent from './crd-tree-component';

function mapStateToProps(state, props) {
  return {
    treeData: state.app.treeItem,
    isMenuLoading: state.app.isMenuLoading,
    searchTerm: state.app.searchTerm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTreeData: bindActionCreators(appActions.getSubMenu, dispatch),
    resetSearch: bindActionCreators(appActions.resetSearch, dispatch),
    resetTreeData: bindActionCreators(appActions.resetTreeData, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeComponent);
