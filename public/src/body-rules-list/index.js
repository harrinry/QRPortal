import { connect } from 'react-redux';
import BodyRulesList from './brl-model';
import { childConstructor } from './brl-lib';

const mapDispatchToProps = (dispatch) => {
  return {
    arrayChildConstructor: (val) => {
      return childConstructor(val);
    }
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.contentBody.list.content.data,
    searchVisible: state.search.resultsVisible,
    searchResults: state.search.results
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(BodyRulesList);