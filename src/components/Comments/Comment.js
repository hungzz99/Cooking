import React, { Component } from 'react'
import { MDBIcon, MDBRow, MDBInput, MDBBtn, MDBCol } from "mdbreact";
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
                            <div class="col-md-12">
                                <form class="reply-form">
                                    <div class="commentBox">
                                        <ul class="list-unstyled">
                                            <li>
                                            <span class="profileBox">M</span>
                                            <span class="profileText">Your email address will not be published.</span>
                                            </li>
                                            <li> <span class="profileBox">M</span> <span class="profileText">Your email address will not be published. Required fields are marked </span> </li>
                                        </ul>
                                    </div>
                                    <div id="div_id_username" class="form-group required">
                                        <div class="controls form-group d-flex w-100 ">
                                            <input class="input-md  textinput textInput form-control" id="id_username" placeholder="Write for something..." type="text" />
                                            <button type="submit" class="btn btn-info border-radius-0  m-0 w-25">POST</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                </div>
            </>
        )
    }
}
export default Comment
