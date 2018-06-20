import { connect } from 'react-redux';
import { toggleNavBar } from '../actions/index';
import NavBar from '../navBar/navbar';

const mapStateToProps = (state) => {
  return {
    isOpen: state.navBar.isOpen,
    children: state.navItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(toggleNavBar());
    },
    onItemClick: ( index, props ) => {
      console.log( index );
      console.log( props );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);