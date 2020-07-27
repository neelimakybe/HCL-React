import React, { Component } from 'react'

class Comment extends Component {

    getComments() {
        const commentsList = this.props.comments.map(
            (comment, index) =>
                <li className="list-group-item d-flex justify-content-between align-items-center" key={comment.id}>
                    <span>
                        <span className="text-primary lead"> {comment.commentedBy} </span>: {comment.txt}
                    </span>
                    <span>
                        <button className="btn" onClick={() => this.deleteComment(index)}><i className="fas fa-times"></i></button>
                    </span>
                </li>
        )
        return commentsList
    }

    deleteComment(index) {
        var comments = this.props.comments
        comments.splice(index, 1)
        this.props.handleDeleteComment(comments, this.props.postId)
    }

    render() {
        return (
            <div>
                <button className="btn btn-link pl-0" data-toggle="collapse" data-target={"#collapseComments" + this.props.postId} aria-expanded="false" aria-controls={"collapseComments" + this.props.postId}>View Comments</button>

                <div className="collapse" id={"collapseComments" + this.props.postId}>

                    {
                        (this.props.comments.length > 0) ?
                            <ul className="list-group">
                                {this.getComments()}
                            </ul>
                            :
                            <div className="alert alert-info" role="alert">
                                No comments yet !
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default Comment;
