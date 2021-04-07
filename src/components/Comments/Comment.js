import React, { Component } from 'react'
import { MDBIcon } from "mdbreact";
import firebase from 'firebase';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: {},
            userId: {}
        }
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const user = firebase.auth().currentUser
                this.setState({ userId: user.uid })
            }
        })
    }

    pushComment() {
        const commentRef = firebase.database().ref('comments');
        const pushComment = commentRef.push();
        const id = pushComment.key;
        const commentContent = this.state.comment;
        this.setState({
            comment: {
                commentId: id,
                content: commentContent,
                like: 0,
                postId: this.props.postId,
                userId: this.state.userId,
            }
        })

    }

    handleCommentChange(event) {
        this.setState({ comment: event.target.value });
    }

    handleComment() {
        this.pushComment();
    }

    render() {
        return (
            <>
                <div className="comment">
                    <div className="col-auto">
                        {/* <label className="sr-only" for="inlineFormInputGroup">Comments</label> */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <MDBIcon icon="user" />
                                </div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Write your comment" onChange={this.handleCommentChange} />
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <MDBIcon far icon="paper-plane"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Comment
