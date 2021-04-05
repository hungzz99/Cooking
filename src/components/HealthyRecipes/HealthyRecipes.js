import React, { Component } from 'react';
import './HealthyRecipes.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HealthyVideo from '../../Video/HealthyVideo.mp4';
import { MDBIcon, MDBBtn } from "mdbreact";
import firebase from "firebase";
import Recipe from '../Reciep/Reciep'

class HealthyRecipes extends Component {
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
        const db = firebase.database().ref('/posts').orderByChild('type').equalTo('Healthy');
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
        const recipe = this.state.posts.map(posts => <Recipe posts={posts} />);
        return (
            <div className="back-ground2">
                <Header />
                <br />
                <div className="healthy-recipes">
                    <div className="media">
                        <div className="media-body">
                            <p bg="red">What We're Loving Now</p>
                            <p>Cookies Is Seasoned With Love</p>
                            <span>
                                <p className="highlight">You Can Do Everything with Cookies Recipes</p>
                            </span>
                        </div>
                        <div>
                            <iframe className="video" src={HealthyVideo}></iframe>
                        </div>
                    </div>
                    <div className="media-title" flex-direction="row">
                        <h3 className="media-title-h3"> Healthy Recipes</h3>
                        <br />
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
export default HealthyRecipes;
