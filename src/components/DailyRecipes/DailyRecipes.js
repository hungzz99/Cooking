import React, { Component } from 'react'
import './DailyRecipes.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DailyVideo from '../../Video/DailyVideo.mp4';
import Recipe from '../Reciep/Reciep'
import { MDBIcon, MDBBtn } from "mdbreact";
import firebase from "firebase";

class DailyRecipes extends Component {

    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let posts = [];
        const db = firebase.database().ref('/posts').orderByChild('type').equalTo('Daily');
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
                            <iframe className="video" src={DailyVideo}></iframe>
                        </div>
                    </div>
                    <div className="media-title" flex-direction="row">
                        <h3 className="media-title-h3"> Daily Recipes</h3>
                        <br />
                        <div>
                            {recipe}
                            {/* <MDBCardGroup>
                                <Recipe/>
                                <Recipe/>

                                <Recipe/>
                            </MDBCardGroup>
                            <MDBCardGroup>
                                <Recipe/>
                                <Recipe/>

                                <Recipe/>
                            </MDBCardGroup> */}
                            <br />
                            <div align="center">
                                <MDBBtn >
                                    <MDBIcon icon='clone left' /> Show More
                                </MDBBtn>
                            </div>
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
