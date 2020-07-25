import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NotFound } from '../NotFound/NotFound';
import datePicker from 'date-and-time';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getPost, editPost } from '../../../redux/postsRedux.js';
import { getUser } from '../../../redux/userRedux.js';
import styles from './PostEdit.module.scss';

class Component extends React.Component {

  state = {
    id: this.props.post.id,
    title: this.props.post.title,
    price: this.props.post.price,
    content: this.props.post.content,
    email: this.props.post.email,
    date: this.props.post.date,
    dateActualisation: this.props.dateActualisation,
    status: this.props.post.status,
    userId: this.props.user.id,
  };

  static propTypes = {
    className: PropTypes.string,
    user: PropTypes.object,
    post: PropTypes.object,
    editPost: PropTypes.func,
    dateActualisation: PropTypes.instanceOf(Date),
  };

  componentDidMount() {
    const now = new Date();
    this.setState({ dateActualisation: datePicker.format(now, 'DD.MM.YYYY') });
  }

  handleChange = ({ target }) => {
    switch (target.type) {
      case 'text': {
        this.setState({ title: target.value });
        break;
      }
      case 'number': {
        this.setState({ price: target.value });
        break;
      }
      case 'textarea': {
        this.setState({ content: target.value });
        break;
      }
      case 'email': {
        this.setState({ email: target.value });
        break;
      }
      default:
        console.log('no switch type');
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit!', this.state);
    this.props.editPost(this.state);
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { className, user, post } = this.props;
    const { title, price, content, email } = this.state;

    const titleProps = {
      minLength: 10,
    };

    const contentProps = {
      minLength: 20,
    };

    return user.auth && user.id === post.userId ? (
      <div className={clsx(className, styles.component)}>
      <form autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
        <h2 className={styles.title}>Add new post</h2>

        <TextField
          className={styles.titleField}
          required
          id="title"
          label="title"
          inputProps={titleProps}
          value={title}
          onChange={handleChange}
        />
        <br/>

        <TextField className={styles.priceField} required id="price" label="price" type="number" value={price} onChange={handleChange} /><br/>
        <TextField
          className={styles.contentField}
          required
          id="content"
          label="content"
          multiline
          rows="10"
          variant="outlined"
          inputProps={contentProps}
          value={content}
          onChange={handleChange}
        />
        <br/>

        <TextField className={styles.emailField} required id="email" type="email" label="email" value={email} onChange={handleChange} />
        <br/>
        <Button className={styles.sendButton} type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
    ) : (
      <NotFound />
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: getUser(state),
  post: getPost(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  editPost: (payload) => dispatch(editPost(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostEdit,
  Component as PostEditComponent,
};
