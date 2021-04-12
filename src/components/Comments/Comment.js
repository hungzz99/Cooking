import React, { Component } from 'react'
import firebase from 'firebase';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            comment: {},
            commentContent: "",
            userId: {}
        };
        this.handleComment = this.handleComment.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const user = firebase.auth().currentUser
                this.setState({ userId: user.uid })
            }
        });
        this.getComments();
    }

    getComments() {
        const commentRef = firebase.database().ref('comments');
        commentRef.orderByChild('postId').equalTo(this.props.postId).on('value', snapshots => {
            let comments = [];
            snapshots.forEach(comment => {
                comments.push({
                    commentId: comment.val().commentId,
                    content: comment.val().content,
                    like: comment.val().like,
                    userId: comment.val().userId,
                });
                this.setState({
                    comments: comments
                })
            })
        })
    }

    pushComment() {
        const commentRef = firebase.database().ref('comments');
        const pushComment = commentRef.push();
        const id = pushComment.key;
        const commentContent = this.state.commentContent;
        console.log(this.state.commentContent);
        this.setState({
            comment: {
                commentId: id,
                content: commentContent,
                like: 0,
                postId: this.props.postId,
                userId: this.state.userId,
            }
        }, () => pushComment.set(this.state.comment))
    }

    handleCommentChange(event) {
        this.setState({ commentContent: event.target.value });
    }

    handleComment(e) {
        e.preventDefault();
        this.pushComment();
        this.setState({ commentContent: "" });
    }


    render() {
        const comments = this.state.comments.map(comment => {
            return (
                <div class="comment-content">
                    <div class="commenter-head"><span class="commenter-name"><a href="" >{comment.userId}</a></span></div>
                    <div class="comment-body">
                        <span class="comment">{comment.content}</span>
                    </div>
                    <div class="comment-footer">
                        <span class="comment-likes">{comment.like} <a href="" class="comment-action active"> <i class="far fa-heart"></i></a></span>
                    </div>

                    <hr />
                </div>
            )
        })
        return (
            <>
                <div className="comment">
                    <div class="col-md-12">
                        <div class="comment-box-wrapper">
                            <div class="comment-box">
                                {comments}
                            </div>
                        </div>
                        <hr />
                        <form class="reply-form">
                            <div id="div_id_username" class="form-group required">
                                <div class="controls form-group d-flex w-100 ">
                                    <input class="input-md  textinput textInput form-control" id="id_username" value={this.state.commentContent} placeholder="Write for something..." onChange={this.handleCommentChange} type="text" />
                                    <button class="btn btn-info border-radius-0  m-0 w-25" onClick={this.handleComment} >POST</button>
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
