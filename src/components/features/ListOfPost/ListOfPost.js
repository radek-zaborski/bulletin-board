import React from 'react';
//import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ListOfPost.module.scss';

class ListOfPost extends React.Component {

  render(){
    return(
      <div className={styles.postList}>
        <h2>List of Posts</h2>
        <a href ='/post'>Demo Post</a>
      </div>
    )
  }
}

export default ListOfPost
