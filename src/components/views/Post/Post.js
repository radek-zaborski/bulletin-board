import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getAll, getPost} from '../../../redux/postsRedux.js';
import { getUser, login, logout } from '../../../redux/userRedux.js';

import styles from './Post.module.scss';

const Component = ({ className, post, user, login, logout }) => {

  const authenticationHandler = (event) => {
    event.preventDefault();
    user.auth ? logout(user) : login(user);
  };

  return (
  <div className={clsx(className, styles.component)}>
    <div key={post.id}>
      <div className={styles.title}><h2>{post.title}</h2></div>
      <div className={styles.content}><h4>{post.content}</h4></div>
      <div className={styles.price}><b>price: ${post.price}</b></div>
      <div className={styles.contact}><b>contact: {post.email}</b></div>
      <div className={styles.date}>publicated: {post.date}<br/>, date of actualisation: {post.dateActualisation}</div>
    </div>

    {user.auth && (
      <Button component={Link} className={styles.buttonEdit} variant="contained" color="primary" to={`/post/${post.id}/edit`}>
        Edit post
      </Button>
      )}
  </div>
  )
};

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
  post: PropTypes.object,
  user: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  posts: getAll(state),
  post: getPost(state, props.match.params.id),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
  logout: (payload) => dispatch(logout(payload)),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Post,
  Component as PostComponent,
};
