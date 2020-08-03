import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { deletePost } from '../actions/postActions';

class Posts extends Component {
  
  componentWillMount() {
    this.props.fetchPosts();
  }

  deletePost(index) {
    this.props.deletePost(index)
  }

  render() {
    const postItems = this.props.posts.map((post, index) => (

      <div className="card mb-2" key={post.id}>
        <div className="card-body" >
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title text-primary mb-0">
              {post.title}
            </h5>
            <button className="btn fas fa-times" onClick={() => this.deletePost(index)}></button>
          </div>
          <hr></hr>
          <p className="card-text">{post.body}</p>
        </div>
      </div>

    ));
    return (
      <div>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
