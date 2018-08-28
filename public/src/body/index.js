import { connect } from 'react-redux';
import ContentBody from './body-model';

const mapStateToProps = (state) => {
  return {
    view: state.contentBody.view
  };
};

export default connect(mapStateToProps)(ContentBody);