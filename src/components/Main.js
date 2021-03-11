import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
// import maintiitle from '../Pictures/maintittle.png';
import chicken from '../Pictures/chicken.jpg';
import pizza from '../Pictures/pizza.jpg';
import spaghetti from '../Pictures/spagheti.jpg';
import HomeVideo from '../Video/HomeVideo.mp4';
import './Main.css';
class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <br />
                <div className="Main">
                    <div className="media">
                        <div className="media-body">
                            <p bg="red">What We're Loving Now</p>
                            <p>Cookies Is Seasoned With Love</p>
                            <span>
                            <p className="highlight">You Can Do Everything with Cookies Recipes</p>
                            </span>
                        </div>
                        <div>
                            <iframe className="video" src={HomeVideo}></iframe>
                        </div>
                    </div>
                    <div className="media-title" flex-direction="row">
                        <h3 className="media-title-h3">Top Recipes</h3>
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
                <br />
                <Footer />
            </div>

        );
    }
}

export default Main;
