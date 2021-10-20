import { connect } from 'react-redux';
import CompareList from './cmp-model';
import { arrayChildConstructor } from './cmp-lib';
import { fetchDetailsData } from '../details-section/ds-actions';
import { setSelected } from './cmp-actions';

const mapStateToProps = (state) => {
  return {
    loading: state.compare.loading,
    data: state.compare.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    arrayChildConstructor: (values, index) => {
      return arrayChildConstructor( values, index, () => {
        if( !values.selected ){
          dispatch(setSelected(values.id));
          dispatch(fetchDetailsData(values.href));
        }
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompareList);