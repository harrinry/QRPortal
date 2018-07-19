import { connect } from 'react-redux';
import { toggleNavBar, setSelectedNavItem, openMenuElement, updatePrimaryVerticalArray } from '../actions/index';
import NavBar from '../components/navbar';

const mapStateToProps = (state) => {
  return {
    isOpen: state.navBar.isOpen,
    selected: state.navBar.selected,
    children: state.navItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch( toggleNavBar() );
    },
    onMenuOpen: ( index ) => {
      dispatch( openMenuElement(index) );
    },
    onItemClick: ( ref, href, title ) => {
      dispatch(setSelectedNavItem(ref));
      let arrayData = {
        headers: ['ID', 'Name', 'Critical'],
        keys: ['id', 'name', 'critical'],
        data:null
      };
      if( /(\/quality-standards\/)/ig.test(href) ) {
        href += '/categories';
        arrayData.headers = ['Categories'],
        arrayData.keys = ['name'];
      }

      console.log(title);
      fetch('rest?q='+href)
        .catch(err => console.log(err))
        .then(res => res.json())
        .then( data => {
          if (Array.isArray( data )) {
            arrayData.data = data;
            dispatch( updatePrimaryVerticalArray(arrayData) );
          }
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);