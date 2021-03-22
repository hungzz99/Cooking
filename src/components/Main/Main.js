import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import chicken from '../../Pictures/chicken.jpg';
import pizza from '../../Pictures/pizza.jpg';
import spaghetti from '../../Pictures/spagheti.jpg';
import HomeVideo from '../../Video/HomeVideo.mp4';
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBBtn, MDBCardImage, MDBCardBody } from "mdbreact";

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
                                <MDBCard>
                                    <MDBCardImage src={spaghetti} alt="MDBCard image cap" top hover
                                        overlay="white-slight"  />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Spaghetti</MDBCardTitle>
                                        <MDBBtn color="primary" size="md" href="/productid-details">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard>
                                    <MDBCardImage src={chicken} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Chicken</MDBCardTitle>
                                        <MDBBtn color="primary" size="md" href="/productid-details">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardImage src={pizza} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Pizza</MDBCardTitle>
                                        <MDBBtn color="primary" size="md" href="/productid-details">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCardGroup>
                            <MDBCardGroup>
                                <MDBCard>
                                    <MDBCardImage src={spaghetti} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Spaghetti</MDBCardTitle>
                                        <MDBBtn color="primary" size="md" href="/productid-details">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard>
                                    <MDBCardImage src={chicken} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Chicken</MDBCardTitle>
                                        <MDBBtn color="primary" size="md" href="/productid-details">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardImage src={pizza} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Pizza</MDBCardTitle>
                                        <MDBBtn color="primary" size="md" href="/productid-details">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCardGroup>
                            <div align="center">
                                <button className="button-show"> Show more</button>
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
