import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import maintiitle from '../Pictures/maintittle.png';
import chicken from '../Pictures/chicken.jpg';
import pizza from '../Pictures/pizza.jpg';
import spaghetti from '../Pictures/spagheti.jpg';
import './Main.css';
class Main extends Component {
        render() {
    return (
        <div>
            <Header />
            <div className="Main">
                <div className="media">
                    {/* <div className="slideshow-container">
                        <div className="mySlides fade">
                            <img src={maintiitle} />
                        </div>

                        <div className="mySlides fade">
                            <img src={pizza} />
                        </div>

                        <div className="mySlides fade">
                            <img src={maintiitle} />
                        </div>

                        <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
                        <a className="next" onClick="plusSlides(1)">&#10095;</a>

                    </div>
                    <br />
                    <div style="text-align:center">
                        <span className="dot" onClick="currentSlide(1)"></span>
                        <span className="dot" onClick="currentSlide(2)"></span>
                        <span className="dot" onClick="currentSlide(3)"></span>
                    </div> */}
                    <div className="media-body">
                            <a>
                                <p>
                                    Who Are Little Chef ?
                        </p>
                                <p>
                                    Are You Ready To Cooking ?
                        </p>
                                <h1>
                                    <span className="highlight">Easy Recipes For Little Chef !</span>
                                </h1>
                            </a>
                        </div>
                        <img className="mr-3" src={maintiitle} alt="Generic placeholder image" />
                </div>
                <br />
                <div className="media-title" flex-direction="row">
                    <h3 className="media-title-h3"> All Recipes</h3>
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
                        <div align="center" backgroundColor="red">
                            <button> Show More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}
}

export default Main;
