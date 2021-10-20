import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from 'app/crd-app-actions';
import TreeComponent from './crd-tree-component';

function mapStateToProps(state, props) {
  return {
    treeData: state.app.treeItem,
    isMenuLoading: state.app.isMenuLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTreeData: bindActionCreators(appActions.getSubMenu, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeComponent);
