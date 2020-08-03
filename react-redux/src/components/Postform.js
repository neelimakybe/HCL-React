import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <form onSubmit={this.onSubmit}>

            <label>Title</label>
            <br />
            <input className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />

            <br />

            <label>Body</label>
            <br />
            <textarea className="form-control"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
            <br />
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
