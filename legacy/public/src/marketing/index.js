import { connect } from 'react-redux';
import MktContent from './mkt-model';

const mapStateToProps = (state) => {
  return {
    techno: state.marketing.resource
  };
};

export default connect(mapStateToProps)(MktContent);