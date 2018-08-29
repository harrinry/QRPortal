import { connect } from 'react-redux';
import ContentBody from './body-model';
import * as actions from './body-actions';

const mapStateToProps = (state) => {
  return {
    view: state.contentBody.view,
    navigation: state.contentBody.nav,
    list: state.contentBody.list,
    viewType: state.viewType.viewType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (item, index, maxIndex) => {
      if( index === 0 && maxIndex === 2 ){
        if(item.count !== 0) dispatch(actions.fetchExpandedListData(item.href));
        else dispatch(actions.clearExpandedListData());
        console.log(item.count);
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentBody);