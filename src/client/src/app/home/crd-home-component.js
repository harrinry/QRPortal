import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import _isEmpty from 'lodash/isEmpty';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tree from '../tree';
import AppRoutes from '../crd-app-routes-component';
import Login from '../login/crd-login-component';
import Search from '../global-search/crd-search-component';

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
  },
  contentGrid: {
    flexWrap: 'nowrap',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#D3DBE8',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  homeIcon: {
    width: '25px',
    height: '25px',
    backgroundImage: 'url(/assets/img/LogoStructuralRules.svg)',
    marginRight: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbarBranding: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbarWidgets: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchDetails: {
    marginLeft: '14px',
    display: 'flex',
    flexDirection: 'row',
    '& button': {
      marginLeft: '32px',
    },
  },
}));

const Home = (props) => {
  const {
    mainMenu,
    getMainMenu,
    login,
    logout,
    isLoggedIn,
    loginErrorMessage,
    resetLoginErrorMessage,
    isAuthRequestOngoing,
    searchCriterion,
    searchTerm,
    resetSearch,
    history,
  } = props;

  const classes = useStyles();

  useEffect(() => {
    getMainMenu();
  }, []);

  const renderMenuIcon = () => (
    <IconButton edge='start' style={{ backgroundColor: '#1f2444', color: 'white', borderRadius: '0%' }}
      className={classes.menuButton} color='inherit' aria-label='menu' disabled={true}
    >
      <MenuIcon />
    </IconButton>
  );

  const onResetSearch = () => {
    resetSearch();
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarBranding}>
            <div className={classes.homeIcon} />
            <Typography variant='h6' noWrap style={{ fontWeight: 'bold', letterSpacing: '2px', marginRight: '10px' }}>CAST</Typography>
            <Typography variant='h6' noWrap style={{ letterSpacing: '2px' }}>Rules</Typography>
          </div>
          <div className={classes.navbarWidgets}>
            <Search
              isLoggedIn={isLoggedIn}
              searchTerm={searchTerm}
              searchCriterion={searchCriterion}
            />
            <Login
              isLoggedIn={isLoggedIn}
              handleLogin={login}
              handleLogout={logout}
              loginErrorMessage={loginErrorMessage}
              resetLoginErrorMessage={resetLoginErrorMessage}
              isAuthRequestOngoing={isAuthRequestOngoing}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Grid container item direction='row' className={classes.contentGrid}>
        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          {renderMenuIcon()}
          <div className={classes.drawerContainer}>
            {!_isEmpty(mainMenu) && <Tree mainMenu={mainMenu} />}
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          {searchTerm && (<div className={classes.searchDetails}>
            <Typography variant='h6'>
              <>Displaying results for search term <b>"{searchTerm}"</b></>
              {searchCriterion && <> in the criterion <b>"{searchCriterion}"</b>.</>}
            </Typography>
            <Button color='primary' variant='outlined' size='small' onClick={onResetSearch}>
              Reset search
            </Button>
          </div>)}
          <AppRoutes />
        </main>
      </Grid>
    </div>
  );
};

Home.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func,
  resetLoginErrorMessage: PropTypes.func,
  resetSearch: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  isAuthRequestOngoing: PropTypes.bool,
  loginErrorMessage: PropTypes.string,
  searchCriterion: PropTypes.string,
  searchTerm: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(Home);
