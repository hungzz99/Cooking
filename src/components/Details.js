import React, { Component } from 'react';
import './Details.css';
import Header from './Header';
import Footer from './Footer';
import { MDBIcon } from "mdbreact";
import chicken from '../Pictures/chicken.jpg';
import pizza from '../Pictures/pizza.jpg';
import spaghetti from '../Pictures/spagheti.jpg';
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
                                            <div className="input-group-text">
                                                <MDBIcon icon="save" />                                                </div>
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
                <div className="media-title1" flex-direction="row">
                        <h3 className="media-title-h3">Related Recipes</h3>
                        <div>
                            <div className="card">
                                <div className="row">
                                    <a className="col">
                                        <img className="card-img-top" src={chicken} alt="Generic placeholder image" />
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Chicken</h5>
                                        </div>
                                    </a>
                                    <a className="col">
                                        <img className="card-img-top" src={pizza} alt="Generic placeholder image" />
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Pizza</h5>
                                        </div>
                                    </a>
                                    <a className="col" href="/productid-details">
                                        <img className="card-img-top" src={spaghetti}  alt="Generic placeholder image"  />
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Spaghetti</h5>
                                        </div>
                                    </a>
                                    <a className="col">
                                        <img className="card-img-top" src={pizza} alt="Generic placeholder image" />
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Pizza</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <div className="Related-recipes-details">
                    <var>Related Recipes</var>
                    <div className="card">
                        <div className="row">
                            <a className="col">
                                <img className="card-img-top" src={chicken} alt="Generic placeholder image" />
                                <div className="card-body">
                                    <h5 className="card-title" align="center">Chicken</h5>
                                </div>
                            </a>
                            <a className="col">
                                <img className="card-img-top" src={pizza} alt="Generic placeholder image" />
                                <div className="card-body">
                                    <h5 className="card-title" align="center">Pizza</h5>
                                </div>
                            </a>
                            <a className="col" href="/productid-details">
                                <img className="card-img-top" src={spaghetti} alt="Generic placeholder image" />
                                <div className="card-body">
                                    <h5 className="card-title" align="center">Spaghetti</h5>
                                </div>
                            </a>
                            <a className="col">
                                <img className="card-img-top" src={pizza} alt="Generic placeholder image" />
                                <div className="card-body">
                                    <h5 className="card-title" align="center">Pizza</h5>
                                </div>
                            </a>

                        </div>
                    </div>
                </div> */}
                <br />
                <Footer />
            </div>
        );
    }
}

export default Details;
