import React, { Component } from 'react';
import './EasyRecipes.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import chicken from '../../Pictures/chicken.jpg';
import pizza from '../../Pictures/pizza.jpg';
import spaghetti from '../../Pictures/spagheti.jpg';
import EasyVideo from '../../Video/EasyVideo.mp4';
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
                                <div className="card">
                                    <div className="row">
                                        <div className="col">
                                            <img className="card-img-top" src={chicken} alt="Generic placeholder image" />
                                            <div className="card-body">
                                                <h5 className="card-title" align="center">Chicken Dry</h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <img className="card-img-top" src={pizza} alt="Generic placeholder image" />
                                            <div className="card-body">
                                                <h5 className="card-title" align="center">Pizza</h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <img className="card-img-top" src={spaghetti} alt="Generic placeholder image" />
                                            <div className="card-body">
                                                <h5 className="card-title" align="center">Spaghetti</h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <img className="card-img-top" src={pizza} alt="Generic placeholder image" />
                                            <div className="card-body">
                                                <h5 className="card-title" align="center">Pizza</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                        <div className="col">
                                            <img className="card-img-top" src={spaghetti} alt="Generic placeholder image" />
                                            <div className="card-body">
                                                <h5 className="card-title" align="center">Spaghetti</h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <img className="card-img-top" src={chicken} alt="Generic placeholder image" />
                                            <div className="card-body">
                                                <h5 className="card-title" align="center">Chicken Dry</h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <img className="card-img-top" src={pizza} alt="Generic placeholder image" />
                                            <div className="card-body">
                                                <h5 className="card-title" align="center">Pizza</h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <img className="card-img-top" src={spaghetti} alt="Generic placeholder image" />
                                            <div className="card-body">
                                                <h5 className="card-title" align="center">Spaghetti</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
