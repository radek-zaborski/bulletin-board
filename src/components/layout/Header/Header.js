import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className,styles.component, styles.root)}>
    <AppBar className={styles.appMenu}>
      <div className={styles.firstPin}>
        <img src={ require('./pin.png')}alt=''/>
      </div>
      <div className={styles.secondPin}>
        <img src={ require('./pin.png')}alt=''/>
      </div>
      <Toolbar>

        <Typography variant="h4" className={styles.title}>
            Bulletin Board
        </Typography>
        <Button variant="contained" className={styles.buttonLogin} color="primary" href="#contained-buttons">
          Login
        </Button>
      </Toolbar>
    </AppBar>


    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
