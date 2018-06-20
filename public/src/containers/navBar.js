import { connect } from 'react-redux';
import { toggleNavBar } from '../actions/index';
import NavBar from '../navBar/navbar';

const mapStateToProps = (state) => {
  return {
    isOpen: state.navBar.isOpen,
    children: state.navBar.sections
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(toggleNavBar());
    },
    onItemClick: () =>{
      console.log('Item Clicked');
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);