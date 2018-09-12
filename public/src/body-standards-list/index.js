import { connect } from 'react-redux';
import StandardsList from './bsl-model';
import { childConstructor } from './bsl-lib';
import { fetchWebData, clearListData } from '../body-rules-list/brl-actions';
import { clearDetailsData } from 'details-section/ds-actions';
import { setSelected } from './bsl-actions';

const mapDispatchToProps = (dispatch) => {
  return {
    arrayChildConstructor: ( data ) => {
      return childConstructor( data, () => {
        if( !data.selected )dispatch(setSelected( data.id ));
        if( data.count > 0 ) dispatch(fetchWebData( data.href ) );
        else dispatch(clearListData());
        dispatch(clearDetailsData());
      });
    }
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.standards.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StandardsList);