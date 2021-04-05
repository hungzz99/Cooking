import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MDBBtn, MDBIcon } from "mdbreact";
import Recipe from '../Reciep/Reciep';
import firebase from "firebase";
import ReactPlayer from 'react-player'

import './Main.css';
class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            itemLoad: 6
        }
    }


    componentDidMount() {
        this.loadItem()
    }

    loadItem() {
        let _posts = [];
        let itemPost = [];
        let itemIndex = 0;
        const db = firebase.database().ref('/posts').limitToFirst(this.state.itemLoad);
        db.on('child_added', (data) => {
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
            this.setState({
                posts: _posts
            })
        });
    }

    loadMore() {
        this.setState(previousState => {
            return {
                itemLoad: previousState.itemLoad + 3
            }
        })
        this.loadItem()
        console.log(this.state.itemLoad);
    }

    render() {
        const recipe = this.state.posts.map(posts => <Recipe posts={posts} />);
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
                        <div className='player-wrapper'>
                            <ReactPlayer
                                playing='true'
                                loop='true'
                                volume='0.5'
                                url='https://firebasestorage.googleapis.com/v0/b/cooking-forum.appspot.com/o/videos%2FHomeVideo.mp4?alt=media&token=0d51e6a3-62b1-4020-9aba-92f71cc5c355'
                            />
                        </div>
                    </div>
                    <div className="media-title" flex-direction="row">
                        <h3 className="media-title-h3">Top Recipes</h3>
                        <div>
                            {recipe}
                            <div align="center">
                                <MDBBtn onClick={() => { this.loadMore() }}>
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
