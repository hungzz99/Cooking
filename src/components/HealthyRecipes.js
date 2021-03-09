import React, { Component } from 'react';
import './HealthyRecipes.css';
import Header from './Header';
import chicken from '../Pictures/chicken.jpg';
import pizza from '../Pictures/pizza.jpg';
import spaghetti from '../Pictures/spagheti.jpg';
class HealthyRecipes extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="healthy-recipes">
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
            </div>
        );
    }
}
export default HealthyRecipes;
