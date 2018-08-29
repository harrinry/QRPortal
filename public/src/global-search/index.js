import { connect } from 'react-redux';
import Model from './gs-model';
import * as actions from './gs-actions';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
    language: state.language.language
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchSearchResults: ( query ) => {
      dispatch(actions.fetchSearchResults( query ));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Model);