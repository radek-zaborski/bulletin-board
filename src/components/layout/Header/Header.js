import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

 import { connect } from 'react-redux';
 import { getUser, login, logout } from '../../../redux/userRedux';

import styles from './Header.module.scss';

const Component = ({ className, user, login, logout }) => {
  const authenticationHandler = (event) => {
    event.preventDefault();
    user.auth || user.admin ? logout(user) : login(user);

  };

  return (
    <div className={clsx(className)}>


    <AppBar className={styles.appMenu}>

      <Toolbar className={styles.toolbar}>

        <Typography variant="h4" className={styles.title}>
           <Button component={Link} className={styles.title} color="primary" to="/"><b>Bulletin Board</b></Button>
        </Typography>
        {user.auth ? (
          <div>
            <Button component={Link} to="/post/add" variant="contained" className={styles.buttonLogin} color="primary">
            New post
          </Button>
          <Button component={Link} to="/myPosts" variant="contained" className={styles.buttonLogin} color="primary">
            My post
          </Button>
          <Button onClick={authenticationHandler} variant="contained" component={Link} to="/" className={styles.buttonLogin} color="primary">
            logout
          </Button>
        </div>
        ) : (

    <Button component={Link} onClick={authenticationHandler} variant="contained" href="https://google.com" className={styles.buttonLogin} color="primary">
      Login
    </Button>


)}
 </Toolbar>
</AppBar>

  </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
  logout: (payload) => dispatch(logout(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
 // Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
