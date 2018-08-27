import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigateTo } from './nv-actions';
import NavHeader from './nv-model';

const mapDispatchToProps = ( dispatch ) => {
  return {
    gotoLocation: (props) => {
      dispatch(navigateTo(props, props.index));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    path: state.path.path,
    viewType: state.viewType.viewType
  };
};

NavHeader.PropTypes = {
  path: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);