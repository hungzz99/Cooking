import React, { Component } from 'react';
import './EasyRecipes.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import chicken from '../../Pictures/chicken.jpg';
import pizza from '../../Pictures/pizza.jpg';
import spaghetti from '../../Pictures/spagheti.jpg';
import EasyVideo from '../../Video/EasyVideo.mp4';
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBCardImage, MDBBtn, MDBCardBody } from "mdbreact";

class EasyRecipes extends Component {
    render() {
        return (
            <div className="back-ground3">
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
                                <iframe className="video" src={EasyVideo}></iframe>
                            </div>
                        </div>
                        <div className="media-title" flex-direction="row">
                            <h3 className="media-title-h3"> Easy Recipes</h3>
                            <br />
                            <div>
                            <MDBCardGroup>
                                <MDBCard>
                                    <MDBCardImage src={spaghetti} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                        <MDBBtn color="primary" size="md" href="/productid-details">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard>
                                    <MDBCardImage src={chicken} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                        <MDBBtn color="primary" size="md" href="/productid-details">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardImage src={pizza} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
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
                                        <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                        <MDBBtn color="primary" size="md" href="/productid-details">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard>
                                    <MDBCardImage src={chicken} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                        <MDBBtn color="primary" size="md" href="/productid-details">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardImage src={pizza} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
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
                <br/>
                <Footer/>
            </div>
        );
    }
}

export default EasyRecipes;
