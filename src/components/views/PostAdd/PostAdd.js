import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import datePicker from 'date-and-time';
import clsx from 'clsx';
import idGenerator from '@radex171/randomid-generator';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/postsRedux.js';
import { getUser } from '../../../redux/userRedux.js';
import { NotFound } from '../NotFound/NotFound';
import styles from './PostAdd.module.scss';

class Component extends React.Component {
  state = {
    id: idGenerator(10),
    title: '',
    price: '',
    content: '',
    email: '',
    date: '',
    status: 'published',
    userId: this.props.user.id,
  };

  static propTypes = {
    className: PropTypes.string,
    addPost: PropTypes.func,
    user: PropTypes.object,
    getCurrentDate: PropTypes.func,
  };

  componentDidMount() {
    const now = new Date();
    this.setState({ date: datePicker.format(now, 'DD.MM.YYYY') });
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
    this.props.addPost(this.state);
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { className, user } = this.props;
    const { title, price, content, email } = this.state;

    const titleProps = {
      minLength: 10,
    };

    const contentProps = {
      minLength: 20,
    };

    return user.auth ? (
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

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (payload) => dispatch(addPost(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostAdd,
  Component as PostAddComponent,
};
