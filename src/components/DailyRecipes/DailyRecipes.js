import React, { Component } from 'react'
import './DailyRecipes.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DailyVideo from '../../Video/DailyVideo.mp4';
import Recipe from '../Reciep/Reciep'
import { MDBIcon, MDBBtn } from "mdbreact";
import firebase from "firebase";
import ReactPlayer from 'react-player';

class DailyRecipes extends Component {

    constructor() {
        super()
        this.state = {
            posts: [],
            postId: null
        }
    }

    componentDidMount() {
        this.getLastPost();
    }

    getPosts() {
        let _posts = [];
        let itemPost = [];
        let itemIndex = 0;
        const db = firebase.database().ref('/posts').orderByChild('type').equalTo('Daily');
        console.log("Last postId: " + this.state.postId);
        db.on('value', (snapshots) => {
            snapshots.forEach(data => {
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

    getLastPost() {
        const db = firebase.database().ref('/posts').orderByChild('type').equalTo('Daily');
        if (this.state.postId === null) {
            db.limitToLast(1).on('value', (data) => {
                data.forEach(lastPost => {
                    this.setState({
                        postId: lastPost.val().postId
                    }, () => this.getPosts())
                })
            })
        }
    }

    render() {
        const recipe = this.state.posts.map(posts => <Recipe posts={posts} />);
        return (
            <div className="back-ground4">
                <Header />
                <br />
                <div className="easy-recipes">
                    <div className="media">
                        <div className="media-body">
                            <p bg="red">What We're Loving Now</p>
                            <p>Cookies Is Seasoned With Love</p>
                            <span>
                                <p className="highlight">You Can Do Everything with Cookies Recipes</p>
                            </span>
                        </div>
                        <div>
                            <ReactPlayer
                                playing='true'
                                loop='true'
                                volume='0.5'
                                url='https://firebasestorage.googleapis.com/v0/b/cooking-forum.appspot.com/o/videos%2FDailyVideo.mp4?alt=media&token=b1da8ae7-d564-4cb3-9031-ef7e69531688'
                            />
                        </div>
                    </div>
                    <div className="media-title" flex-direction="row">
                        <h3 className="media-title-h3"> Daily Recipes</h3>
                        <br />
                        <div>
                            {recipe}
                            <br />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <Footer />
            </div>
        );
    }
}
export default DailyRecipes;
