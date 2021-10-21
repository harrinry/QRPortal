import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';

import { EXTEND_REGISTER_URL } from 'app/crd-app-constants';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required'),
});

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  formContent: {
    paddingTop: '0 !important',
    paddingBottom: 0,
  },
  dialogActions: {
    padding: '16px',
    paddingRight: '24px',
  },
  dialogContentText: {
    paddingLeft: '24px',
    paddingTop: '8px',
    color: 'black',
  },
}));

const Login = (props = {}) => {
  const {
    handleLogin,
    handleLogout,
    isLoggedIn,
    loginErrorMessage,
    resetLoginErrorMessage,
    isAuthRequestOngoing,
  } = props;

  const [open, setOpen] = useState(false);

  // Imperatively close the dialog when authentication request is successful
  useEffect(() => {
    if (!isAuthRequestOngoing && isLoggedIn && open) {
      setOpen(false);
      // location.reload();
    }
  }, [isAuthRequestOngoing, isLoggedIn]);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const labels = {
    login: 'Login',
    logout: 'Log out',
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      resetLoginErrorMessage();
      handleLogin(values.email, values.password);
    },
  });

  return (
    <div>
      {isLoggedIn
        ? <Button color='inherit' variant='outlined' onClick={handleLogout}>{labels.logout}</Button>
        : <Button color='inherit' variant='outlined' onClick={handleClickOpen}>{labels.login}</Button>}
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Sign In</DialogTitle>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <DialogContent className={classes.formContent}>
              <TextField
                autoFocus
                margin='dense'
                fullWidth
                id='email'
                name='email'
                label='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                autoFocus
                margin='dense'
                fullWidth
                id='password'
                name='password'
                label='Password'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <Typography variant='body1' color='error'>
                {loginErrorMessage}
              </Typography>
            </DialogContent>
            <DialogContentText className={classes.dialogContentText}>
              Not yet on Extend? <a href={EXTEND_REGISTER_URL} target='_blank' rel='noreferrer'>Register</a>
            </DialogContentText>
            <DialogActions className={classes.dialogActions}>
              <Button onClick={handleClose} color='primary'>
            Cancel
              </Button>
              <Button variant='contained' color='primary' type='submit' disabled={isAuthRequestOngoing}>
            Submit
              </Button>
            </DialogActions>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func,
  handleLogout: PropTypes.func,
  resetLoginErrorMessage: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  isAuthRequestOngoing: PropTypes.bool,
  loginErrorMessage: PropTypes.string,
};

export default Login;
