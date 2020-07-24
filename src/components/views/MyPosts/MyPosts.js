import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getMyPosts } from '../../../redux/postsRedux.js';
import { getUser } from '../../../redux/userRedux';



import styles from './MyPosts.module.scss';

const Component = ({ className, posts, user }) => (
  <div className={clsx(className, styles.component)}>

    <div className={styles.cards}>
      {posts.map((post) => (
        <div className={styles.card} key={post.id} variant="outlined">
          <div component={Link} to={`/post/${post.id}`}>

            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>

            </div>
          </div>
        </div>
      ))}
    </div>
    {user.auth && (
      <Button component={Link} className={styles.addNew} variant="contained" color="primary" to="/post/add">

        Add new
      </Button>
    )}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: getMyPosts(state),
  user: getUser(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as MyPosts,
  Container as MyPosts,
  Component as MyPostsComponent,
};
