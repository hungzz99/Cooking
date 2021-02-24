import React, { Component } from 'react';
import './Header.css';
import logo from '../Pictures/logo.png';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand navbar-light bg-color">

                    <a className="navbar-brand" href="#">
                        <img src={logo} className="logo" />
                    </a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown navbar-light active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Recipes
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Healthy Recipes</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Easy Recipes</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Daily Days</a>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link disabled" href="#">About Us</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search Cookies..." aria-label="Search" icon="fa fa-icon-search" />
                            <button class="btn btn-warning my-2 my-sm-0" type="submit">Login</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;