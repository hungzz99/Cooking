import React, { Component } from 'react';
import './Details.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MDBIcon } from "mdbreact";
import firebase from 'firebase';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comment';
import Recipe from '../Reciep/Reciep';
import { FacebookShareButton } from "react-share";

class Details extends Component {

    constructor(props) {
        super();
        this.state = {
            isSignedIn: false,
            post: {},
            posts: [],
            postLiked: false,
            comments: [],
            comment: {},
            commentContent: "",
            userId: {}
        }
        this.onClick = this.onClick.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user !== null) {
                this.setState({ 
                    isSignedIn: true,
                    userId: user.uid
                });
                this.isThisPostLiked()
            } else {
                this.setState({ isSignedIn: false })
            }
        });
        this.getPost();
        this.loadItem();
        this.getComments();
    }

    isThisPostLiked() {
        let user = firebase.auth().currentUser;
        if (user != null) {
            firebase.database().ref(`/users/${user.uid}/likedPosts/${this.props.postId}`).get().then((postId) => {
                if (postId.val() != null) {
                    this.setState({
                        postLiked: true,
                    })
                } else {
                    this.setState({
                        postLiked: false,
                    })
                }
            }).catch((error) => {
                console.log(`Fail to get info! Error: ${error}`);
            })
        }
    }

    getPost() {
        console.log(this.state.postLiked);
        const dbPost = firebase.database().ref(`posts/${this.props.postId}`);
        dbPost.on('value', (data) => {
            this.setState({
                post: {
                    title: data.val().title,
                    photoUrl: data.val().photoUrl,
                    ingredient: data.val().ingredient,
                    people: data.val().people,
                    preparation: data.val().preparation,
                    time: data.val().time,
                    like: data.val().like
                }
            })
        })
    }

    onClick(e) {
        e.preventDefault();
        const user = firebase.auth().currentUser;
        const likeRef = firebase.database().ref(`posts/${this.props.postId}/like`);
        if (!this.state.postLiked) {
            likeRef.get().then((prevLike) => {
                likeRef.set(prevLike.val() + 1).then(() => {
                    firebase.database().ref(`users/${user.uid}/likedPosts/${this.props.postId}`).set(true)
                    this.isThisPostLiked();
                    // Success
                    console.log(`Post liked!`);
                }).catch((error) => {
                    // Fail
                    console.log(`Fail to like! Error: ${error}`);
                })
            })
        } else {
            likeRef.get().then((prevLike) => {
                likeRef.set(prevLike.val() - 1).then(() => {
                    firebase.database().ref(`users/${user.uid}/likedPosts/${this.props.postId}`).remove()
                    this.isThisPostLiked();
                    // Success
                    console.log(`Post unliked!`);
                }).catch((error) => {
                    // Fail
                    console.log(`Fail to like! Error: ${error}`);
                })
            })
        }

    }

    loadItem() {
        let _posts = [];
        let itemPost = [];
        let itemIndex = 0;
        const db = firebase.database().ref('/posts').limitToLast(9);

        db.on('value', (dataset) => {
            dataset.forEach((data) => {
                itemPost.push({
                    id: data.val().postId,
                    title: data.val().title,
                    photoUrl: data.val().photoUrl,
                });
                itemIndex++;
                if (itemIndex === 3) {
                    _posts.push(itemPost);
                    itemIndex = 0;
                    itemPost = [];
                }
                if (data.val().postId === this.state.postId) {
                    console.log("Last Item Added. ItemIndex: " + itemIndex);
                    if (itemIndex === 1) {
                        itemPost.push(null);
                        itemPost.push(null);
                        _posts.push(itemPost);
                    }
                    else if (itemIndex === 2) {
                        itemPost.push(null);
                        _posts.push(itemPost);
                    }
                    else {
                        _posts.push(itemPost);
                    }
                }
                this.setState({
                    posts: _posts
                })
            })
        });
    }

    getComments() {
        const commentRef = firebase.database().ref(`comments`);
        const userRef = firebase.database().ref(`/users`);
        commentRef.orderByChild('postId').equalTo(this.props.postId).on('value', snapshots => {
            let comments = [];
            snapshots.forEach(comment => {
                userRef.child(`${comment.val().userId}/name`).get().then((userName) => {
                    comments.push({
                        commentId: comment.val().commentId,
                        content: comment.val().content,
                        like: comment.val().like,
                        userId: comment.val().userId,
                        userName: userName.val()
                    });
                    this.setState({
                        comments: comments
                    })
                })

            })
        })
    }

    handleCommentChange(event) {
        this.setState({ commentContent: event.target.value });
    }

    handleComment(e) {
        e.preventDefault();
        this.pushComment();
        this.setState({ commentContent: "" });
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

    render() {
        const recipe = this.state.posts.map(posts => <Recipe key={posts.postId} posts={posts} />);
        const likeIcon = (this.state.postLiked) ? <MDBIcon icon="heart" /> : <MDBIcon far icon="heart" />;
        const comments = this.state.comments.map(comment => <Comments key={comment.commentId} comment={comment} />);
        const inputCommentField = (this.state.isSignedIn) ?
            <form class="reply-form">
                <div id="div_id_username" class="form-group required">
                    <div class="controls form-group d-flex w-100 ">
                        <input class="input-md  textinput textInput form-control" id="id_username" value={this.state.commentContent} placeholder="Write for something..." onChange={this.handleCommentChange} type="text" />
                        <button class="btn btn-info border-radius-0  m-0 w-25" onClick={this.handleComment} >POST</button>
                    </div>
                </div>
            </form> : <></>
        return (
            <div className="back-ground">
                <Header />
                <div className="details">
                    <div className="box-sizing">
                        <form className="px-4 py-3">
                            <div className="container">
                                <div className="details-contents">
                                    <div className="header-details">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <FacebookShareButton url={window.location.href} hashtag="cookies">
                                                    <MDBIcon fab icon="facebook-f" />
                                                </FacebookShareButton>
                                            </div>
                                            <div className="input-group-text">
                                                <button disabled={!this.state.isSignedIn} className="Button-background" onClick={this.onClick}>{likeIcon}</button>
                                            </div>
                                            <div className="input-group-text">
                                                <var> {this.state.post.like} </var>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="image-details">
                                        <img src={this.state.post.photoUrl} />
                                        <div>
                                            <var>{this.state.post.title}</var>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="content-details">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <MDBIcon far icon="clock" />
                                            </div>
                                            <var> Times: {this.state.post.time} minutes</var>

                                        </div>
                                        <hr />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <MDBIcon icon="carrot" />
                                            </div>
                                            <var> Ingredients:<br />
                                                {this.state.post.ingredient} </var>
                                        </div>
                                        <hr />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <MDBIcon icon="hammer" />
                                            </div>
                                            <var>
                                                Preparation:<br />
                                                {this.state.post.preparation}
                                            </var>
                                        </div>
                                        <hr />
                                        <div>
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <MDBIcon far icon="comment" />
                                                </div>
                                                <var> Comments</var>
                                            </div>
                                            <div className="comment">
                                                <div class="col-md-12">
                                                    <div class="comment-box-wrapper">
                                                        <div class="comment-box">
                                                            {comments}
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    {inputCommentField}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="Cardcss">
                    <h3 className="media-title-h3">Recent Recipes</h3>
                    {recipe}
                </div>
                <br />
                <Footer />
            </div>
        );
    }
}

function withDetailsHook(Component) {
    return function WrappedComponent(props) {
        const myHookValue = useParams();
        return <Component {...props} postId={myHookValue.id} />
    }
}

export default withDetailsHook(Details);
