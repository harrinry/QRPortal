import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigateTo } from './nv-actions';
import NavHeader from './nv-model';
import { fetchNavigationData, fetchTechnologyNavigationData, fetchExtensionsNavigationData, showNavigationView } from 'body/body-actions';
import { ITEMS } from '../menu-navigation/mn-constants';

const mapDispatchToProps = ( dispatch ) => {
  return {
    gotoLocation: (props) => {
      if(props.separator){
        dispatch(navigateTo(props, props.index));
        dispatch(showNavigationView());
        switch (props.name) {
        case ITEMS.TECHNOLOGIES:
          dispatch(fetchTechnologyNavigationData());
          break;
        case ITEMS.EXTENSIONS:
          dispatch(fetchExtensionsNavigationData());
          break;
        default:
          dispatch(fetchNavigationData(props.href));
          break;
        }
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