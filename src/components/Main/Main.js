import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import chicken from '../../Pictures/chicken.jpg';
import pizza from '../../Pictures/pizza.jpg';
import spaghetti from '../../Pictures/spagheti.jpg';
import HomeVideo from '../../Video/HomeVideo.mp4';
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBBtn, MDBCardImage, MDBCardBody, Link, MDBIcon } from "mdbreact";

import './Main.css';
class Main extends Component {
    render() {
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
                            <MDBCardGroup>
                                <MDBCard >
                                    <Link to="/productid-details">
                                        <MDBCardImage src={spaghetti} alt="MDBCard image cap" top hover
                                            overlay="white-slight" />
                                        <MDBCardBody>
                                            <MDBCardTitle tag="h5">Spaghetti</MDBCardTitle>
                                        </MDBCardBody>
                                    </Link>
                                </MDBCard>
                                <MDBCard>
                                    <Link to="/productid-details">
                                        <MDBCardImage src={chicken} alt="MDBCard image cap" top hover
                                            overlay="white-slight" />
                                        <MDBCardBody>
                                            <MDBCardTitle tag="h5">Chicken</MDBCardTitle>
                                        </MDBCardBody>
                                    </Link>
                                </MDBCard>

                                <MDBCard>
                                    <Link to="/productid-details">

                                        <MDBCardImage src={pizza} alt="MDBCard image cap" top hover
                                            overlay="white-slight" />
                                        <MDBCardBody>
                                            <MDBCardTitle tag="h5">Pizza</MDBCardTitle>

                                        </MDBCardBody>
                                    </Link>
                                </MDBCard>
                            </MDBCardGroup>
                            <MDBCardGroup>
                                <MDBCard>
                                    <Link to="/productid-details">

                                        <MDBCardImage src={spaghetti} alt="MDBCard image cap" top hover
                                            overlay="white-slight" />
                                        <MDBCardBody>
                                            <MDBCardTitle tag="h5">Spaghetti</MDBCardTitle>

                                        </MDBCardBody>
                                    </Link>
                                </MDBCard>
                                <MDBCard>
                                    <Link to="/productid-details">

                                        <MDBCardImage src={chicken} alt="MDBCard image cap" top hover
                                            overlay="white-slight" />
                                        <MDBCardBody>
                                            <MDBCardTitle tag="h5">Chicken</MDBCardTitle>

                                        </MDBCardBody>
                                    </Link>
                                </MDBCard>

                                <MDBCard>
                                    <Link to="/productid-details">

                                        <MDBCardImage src={pizza} alt="MDBCard image cap" top hover
                                            overlay="white-slight" />
                                        <MDBCardBody>
                                            <MDBCardTitle tag="h5">Pizza</MDBCardTitle>

                                        </MDBCardBody>
                                    </Link>
                                </MDBCard>
                            </MDBCardGroup>
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
