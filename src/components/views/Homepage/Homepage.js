import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux.js';
import { getUser, login, logout } from '../../../redux/userRedux';
import Typography from '@material-ui/core/Typography';
import styles from './Homepage.module.scss';
import Button from '@material-ui/core/Button';

const Component = ({ className, posts, user, login, logout }) => {
  const authenticationHandler = (event) => {
    event.preventDefault();
    user.auth || user.admin ? logout(user) : login(user);

  };

  return (
  <div className={clsx(className, styles.component)}>
    <div className={styles.card} >
      {posts.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`} ><br/>
          <Typography className={styles.title}>
            {post.title}
          </Typography>
        </Link>
        ))}

    {user.auth ? (

            <Button component={Link} to="/post/add" variant="contained" className={styles.buttonLogin} color="primary">
            New post
          </Button>


        ) : ('')
}
  </div>
  </div>
  )
};

Component.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: getAll(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
  logout: (payload) => dispatch(logout(payload)),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
