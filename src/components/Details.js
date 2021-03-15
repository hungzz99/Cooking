import React, { Component } from 'react';
import './Details.css';
import Header from './Header';
import Footer from './Footer';
import { MDBIcon } from "mdbreact";
import Spaghetti from '../Pictures/spagheti.jpg';
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
                                    <div className="image-details">
                                        <img src={Spaghetti} />
                                        <div>
                                            <var> Spaghetti Italia</var>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="content-details">
                                        <span>
                                            <var>
                                                Time
                                            </var>
                                            <br/>
                                            <MDBIcon far icon="clock" />
                                        </span>
                                        <hr />
                                        <span>
                                            <var> Ingredients</var>
                                        </span>
                                        <hr />
                                        <span>
                                            <var>
                                                Preparation
                                    </var>
                                        </span>
                                        <hr />
                                        <span>
                                            <var>
                                                Comments
                                            </var>
                                            <div className="form-group inline">
                                                <input type="user" className="form-control" placeholder="Comments" far icon="paper-plane"/>
                                                <MDBIcon far icon="paper-plane" />
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <br />
                <Footer />
            </div>
        );
    }
}

export default Details;
