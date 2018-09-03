import { connect } from 'react-redux';
import BodyRulesList from './brl-model';

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator)
    }
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.contentBody.list.content.data
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(BodyRulesList);