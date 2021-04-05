import React, { Component } from 'react';
import './EasyRecipes.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EasyVideo from '../../Video/EasyVideo.mp4';
import { MDBCard, MDBCardGroup, MDBIcon, MDBBtn } from "mdbreact";
import firebase from "firebase";
import Recipe from '../Reciep/Reciep'

class EasyRecipes extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let posts = [];
        const db = firebase.database().ref('/posts').orderByChild('type').equalTo('Easy');
        db.on('child_added', (data) => {
            posts.push({
                id: data.val().postId,
                title: data.val().title,
                photoUrl: data.val().photoUrl,
            });
            this.setState({
                posts: posts
            })
        });
    }


    render() {
        const recipe = this.state.posts.map(post => <Recipe key={post.id} id={post.id} title={post.title} photoUrl={post.photoUrl} />);
        return (
            <div className="back-ground3">
                <Header />
                <br />
                <div className="easy-recipes">
                    <MDBCardGroup>
                        <MDBCard>
                            <div className="media">
                                <div className="media-body">
                                    <p bg="red">What We're Loving Now</p>
                                    <p>Cookies Is Seasoned With Love</p>
                                    <span>
                                        <p className="highlight">You Can Do Everything with Cookies Recipes</p>
                                    </span>
                                </div>
                                <div>
                                    <iframe className="video" src={EasyVideo}></iframe>
                                </div>
                            </div>
                        </MDBCard>
                    </MDBCardGroup>
                    <div className="media-title" flex-direction="row">
                        <h3 className="media-title-h3"> Easy Recipes</h3>
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

export default EasyRecipes;
