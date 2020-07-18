import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.component)}>
    <h2>PostAdd</h2>
      <form autoComplete="off" className={styles.inputTexField} multiline rowsMax={10}>
        <TextField multiline className={styles.textField} required id="title" label="title"/>
        <TextField multiline className={styles.textField} required id="content" label="content" />
        <TextField multiline className={styles.textField} required id="price" label="price" />
        <TextField multiline className={styles.textField} required id="photo" label="photo" />
        <TextField multiline className={styles.textField} required id="category" label="category" />
        <TextField multiline className={styles.textField} required id="email" label="email" />

      </form>
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
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
