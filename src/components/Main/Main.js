import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeVideo from '../../Video/HomeVideo.mp4';
import { MDBBtn, MDBIcon } from "mdbreact";
import Recipe from '../Reciep/Reciep';
import firebase from "firebase";

import './Main.css';
class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let _posts = [];
        let itemPost = [];
        let itemIndex = 0;
        const db = firebase.database().ref('/posts').limitToLast(6);
        db.on('child_added', (data) => {
            itemPost.push({
                id: data.val().postId,
                title: data.val().title,
                photoUrl: data.val().photoUrl,
            });
            itemIndex++;
            if (itemIndex == 3){
                _posts.push(itemPost);
                itemIndex = 0;
                itemPost = [];
            }
            this.setState({
                posts: _posts
            })
        });
    }
    render() {
        console.log(this.state.posts.map(posts => posts));
        const recipe = this.state.posts.map(posts => <Recipe  posts={posts} />);
        return (
            <div className="back-ground1">
                <Header />
                <br />
                <div className="Main">
                    <div className="media">
                        <div className="media-body">
                            <p bg="red">What We're Loving Now</p>
                            <p>Cookies Is Seasoned With Love</p>
                            <span>
                                <p className="highlight">You Can Do Everything with Cookie's Recipes</p>
                            </span>
                        </div>
                        <div>
                            <iframe className="video" src={HomeVideo}></iframe>
                        </div>
                    </div>
                    <div className="media-title" flex-direction="row">
                        <h3 className="media-title-h3">Top Recipes</h3>
                        <div>
                            {recipe}
                            <div align="center">
                                <MDBBtn >
                                    <MDBIcon icon='clone left' /> Show More
                                </MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <Footer />
            </div>

        );
    }
}

export default Main;
