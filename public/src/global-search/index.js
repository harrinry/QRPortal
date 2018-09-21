import { connect } from 'react-redux';
import Model from './gs-model';
import * as actions from './gs-actions';
import * as bodyActions from 'body/body-actions';
import { clearDetailsData } from 'details-section/ds-actions';
import { hideComparisonTable } from '../compare/cmp-actions';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
    language: state.language.language
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchSearchResults: ( query ) => {
      dispatch(hideComparisonTable());
      dispatch(bodyActions.showContentView());
      dispatch(actions.fetchSearchResults( query ));
      dispatch(clearDetailsData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Model);