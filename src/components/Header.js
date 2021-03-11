import React, { Component } from 'react';
import './Header.css';
import logo from '../Pictures/logo.png';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand navbar-light bg-color">
                    <a className="navbar-brand" href="/">
                        <img src={logo} className="logo" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown navbar-light active">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Recipes
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/healthy-recipes">Healthy Recipes</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/easy-recipes">Easy Recipes</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/daily-recipes">Daily Days</a>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link disabled" href="/about-us">About Us</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link disabled" href="/contact-us">Contact Us</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0" action="/login">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search Cookies..." aria-label="Search" icon="fa fa-icon-search"/>
                            <button className="btn btn-warning my-2 my-sm-0" type="submit">Login</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;