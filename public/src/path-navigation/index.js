import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigateTo } from './nv-actions';
import NavHeader from './nv-model';
import { showNavigationView } from 'body/body-actions';
import { fetchNavigationData } from 'body-navigation/bn-actions';

const mapDispatchToProps = ( dispatch ) => {
  return {
    gotoLocation: (props) => {
      if(props.separator){
        dispatch(navigateTo(props, props.index));
        dispatch(showNavigationView());
        dispatch(fetchNavigationData(props.name, props.href));
      }
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