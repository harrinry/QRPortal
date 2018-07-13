import { connect } from 'react-redux';
import { toggleNavBar, setSelectedNavItem } from '../actions/index';
import NavBar from '../navBar/navbar';

const mapStateToProps = (state) => {
  return {
    isOpen: state.navBar.isOpen,
    selected: state.navBar.selected,
    children: state.navItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(toggleNavBar());
    },
    onItemClick: ( ref, props, title ) => {
      dispatch(setSelectedNavItem(ref));
      console.log( props );
      console.log( title );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);