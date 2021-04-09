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
                        <div class="comment-box-wrapper">
                            <div class="comment-box">
                                <div class="comment-content">
                                    <div class="commenter-head"><span class="commenter-name"><a href="" >Eliza Gautam</a></span> <span class="comment-date"><i class="far fa-clock"></i>2 days ago</span></div>
                                    <div class="comment-body">
                                        <span class="comment">This is comment content Here is nice comment</span>
                                    </div>
                                    <div class="comment-footer">
                                        <span class="comment-likes">55 <a href="" class="comment-action active"> <i class="far fa-heart"></i></a></span> <span class="comment-reply">66 <a href="" class="comment-action">Reply</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <form class="reply-form">
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
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
} 
export default Comment
