import { connect } from 'react-redux';
import ContentBody from '../components/contentBody';
import { updateDetails, updateSecondaryVerticalArray } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    primaryArray: state.content.primaryArray, 
    secondaryArray: state.content.secondaryArray ,
    details: state.content.details
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPrimaryItemClick: (data) => {
      if (data.href) {
        let action;
        const qs = /(\/quality-standards\/)/ig.test(data.href);
        if( qs ) {
          data.href+= '/items';
          action = updateSecondaryVerticalArray;
        } else action = updateDetails;
        fetch( 'rest?q=' + data.href )
          .catch(err => console.log(err))
          .then(res => res.json())
          .then(data => {
            dispatch(action(data));
            console.log(action(data));
            console.log(data);
          });
      }
    },
    onSecondaryItemClick: ( data ) => {
      if (data.href) {
        fetch( 'rest?q=' + data.href )
          .catch(err => console.log(err))
          .then(res => res.json())
          .then(data => {
            dispatch(updateDetails(data));
          });
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentBody);