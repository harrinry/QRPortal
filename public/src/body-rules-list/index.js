import { connect } from 'react-redux';
import BodyRulesList from './brl-model';
import { childConstructor } from './brl-lib';
import { fetchDetailsData } from '../details-section/ds-actions';

const mapDispatchToProps = (dispatch) => {
  return {
    arrayChildConstructor: (val) => {
      return childConstructor(val, () => dispatch(fetchDetailsData(val.href)));
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