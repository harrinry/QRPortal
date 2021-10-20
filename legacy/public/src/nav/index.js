
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavWrapper from './n-model';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType
  };
};

NavWrapper.propTypes = {
  viewType: PropTypes.string
};

export default connect(mapStateToProps)(NavWrapper);