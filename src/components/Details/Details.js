import React, { Component } from 'react';
import './Details.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MDBIcon } from "mdbreact";
import chicken from '../../Pictures/chicken.jpg';
import pizza from '../../Pictures/pizza.jpg';
import spaghetti from '../../Pictures/spagheti.jpg';
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBCardImage, Link, MDBCardBody } from "mdbreact";
// import Comments from '../Comments/Comment';
class Details extends Component {
    render() {
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
                                                <MDBIcon fab icon="facebook-square" />
                                            </div>
                                        </div>
                                        <div className="input-group-text" action="/like">
                                            <MDBIcon icon="heart" />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="image-details">
                                        <img src={spaghetti} />
                                        <div>
                                            <var> Spaghetti Italia</var>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="content-details">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <MDBIcon far icon="clock" />
                                            </div>
                                            <var> Times</var>

                                        </div>
                                        <hr />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <MDBIcon icon="carrot" />
                                            </div>
                                            <var> Ingredients</var>
                                        </div>
                                        <hr />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <MDBIcon icon="hammer" />
                                            </div>
                                            <var>
                                                Preparation
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
                                            {/* <div>                                            
                                                <Comments />
                                            </div> */}
                                            <div className="col-auto">
                                                <label className="sr-only" for="inlineFormInputGroup">Comments</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">
                                                            <MDBIcon icon="user" />
                                                        </div>
                                                    </div>
                                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Comments....." />
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">
                                                            <MDBIcon far icon="paper-plane" />
                                                        </div>
                                                    </div>
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
                <MDBCardGroup>
                                <MDBCard >
                                    <Link to="/productid-details">
                                    <MDBCardImage src={spaghetti} alt="MDBCard image cap" top hover
                                        overlay="white-slight"  />
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
                </div>
                <br />
                <Footer />
            </div>
        );
    }
}

export default Details;
