import { connect } from 'react-redux';
import StandardsList from './bsl-model';
import { childConstructor } from './bsl-lib';
import { fetchWebData, clearListData } from 'body-rules-list/brl-actions';
import { clearDetailsData } from 'details-section/ds-actions';
import { setSelected, fetchStandardsInfoData, hideStandardsInfo } from './bsl-actions';

const mapDispatchToProps = (dispatch) => {
  return {
    arrayChildConstructor: ( data, index ) => {
      return childConstructor( data, index, () => {
        if( !data.selected ) {
          dispatch(setSelected( data.id ));
        }
        if( data.count > 0 ) dispatch(fetchWebData( data.href ) );
        else dispatch(clearListData());
        dispatch(clearDetailsData());
      }, () => {
        dispatch(fetchStandardsInfoData(data.href));
      });
    },
    hideOverlay: () => {
      dispatch(hideStandardsInfo());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.standards.data,
    loading: state.standards.loading,
    info: state.standards.info
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StandardsList);