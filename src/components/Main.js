import React, { Component } from 'react';
import Header from './Header';
import maintiitle from '../Pictures/maintittle.png';
import './Main.css';
class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="Main">
                    <div className="media">
                        <div className="media-body">
                        <a>
                            <p>
                                Who Are Little Chef?
                        </p>
                            <p>
                                Are You Ready To Cooking?
                        </p>
                            <h1>
                                <span className="highlight">Easy Recipes For Little Chef</span>
                            </h1>
                        </a>
                        </div>
                        <img className="mr-3" src={maintiitle} alt="Generic placeholder image" />

                    </div>
                </div>
            </div>

        );
    }
}

export default Main;
