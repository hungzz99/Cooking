import React, { Component } from 'react';
import './HealthyRecipes.css';
import Header from './Header';
import Footer from './Footer';
import chicken from '../Pictures/chicken.jpg';
import pizza from '../Pictures/pizza.jpg';
import spaghetti from '../Pictures/spagheti.jpg';
import HealthyVideo from '../Video/HealthyVideo.mp4';
class HealthyRecipes extends Component {
    render() {
        return (
            <div className="back-ground2">
                <Header />
                <br/>
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
                            <div className="card">
                                <div className="row">
                                    <a className="col">
                                        <img className="card-img-top" src={chicken} alt="Generic placeholder image" />
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Chicken Dry</h5>
                                        </div>
                                    </a>
                                    <a className="col">
                                        <img className="card-img-top" src={pizza} alt="Generic placeholder image" />
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Pizza</h5>
                                        </div>
                                    </a>
                                    <a className="col">
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
                            <div className="card">
                                <div className="row">
                                    <a className="col">
                                        <img className="card-img-top" src={spaghetti} alt="Generic placeholder image" />
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Spaghetti</h5>
                                        </div>
                                    </a>
                                    <a className="col">
                                        <img className="card-img-top" src={chicken} alt="Generic placeholder image" />
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Chicken Dry</h5>
                                        </div>
                                    </a>
                                    <a className="col">
                                        <img className="card-img-top" src={pizza} alt="Generic placeholder image" />
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Pizza</h5>
                                        </div>
                                    </a>
                                    <a className="col">
                                        <img className="card-img-top" src={spaghetti} alt="Generic placeholder image" />
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Spaghetti</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div align="center">
                                <button className="button-show"> Show more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <Footer />
            </div>
        );
    }
}
export default HealthyRecipes;
