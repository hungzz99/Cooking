import React, { Component } from 'react';
import firebase from 'firebase';
import deletecomment from '../../Pictures/cancel.png';
import './Comment.css';
class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: {},
            admin: false
        };
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    componentDidMount() {
        const currentUser = firebase.auth().currentUser
        if (currentUser != null) {
            firebase.database().ref(`users/${currentUser.uid}/admin`).get().then((admin) => {
                this.setState({
                    admin: admin.val()
                })
            })
        }
    }

    deleteComments() {
        firebase.database().ref(`comments/${this.props.comment.commentId}`).remove().then(() => {
            window.alert("Delete comment success!");
        }).catch((error) => {
            window.alert(`Fail to delete comment, error: ${error}!`)
        })
    }

    onClickDelete(e) {
        e.preventDefault();

        this.deleteComments();
    }

    render() {
        const user = firebase.auth().currentUser;
        const checkComments = (this.state.admin) ? (true) : ((user != null && user.uid === this.props.comment.userId) ? (true) : (false));
        const showingbutton = (checkComments) ?
            (<button onClick={this.onClickDelete} className="Button-background">
                <img className="delete-comments" src={deletecomment} height="12px" width="12px" />
            </button>) : <></>
        return (
            <>
                <div class="comment-content">
                    <div className="input-group-text">
                        <div class="commenter-head"><span class="commenter-name"><a href="" >{this.props.comment.userName}: </a></span></div>
                        <div class="comment-body">

                            <span class="comment">{this.props.comment.content}
                                {showingbutton}
                            </span>
                        </div>
                    </div>
                    <hr />
                </div>
            </>
        )
    }
}
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}
export default Comment
