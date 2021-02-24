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
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                            </form>
                        </ul>
                        <ul className="nav navbar-nav flex-fill justify-content-center">
                            <li className="nav-item active">
                                <a className="nav-link" href="#Home">Home</a>
                            </li>
                            <li className="nav-item active ">
                                <a className="nav-link" href="#Download">Download</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link " href="#Register">Register</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#More">More</a>
                            </li>
                        </ul>
                        <nav className="navbar-nav flex-row ml-md-auto d-none d-md-flex"></nav>
                        <form className="form-inline">
                            <input className="btn btn-success" type="submit" value="Login"/>
                        </form>

                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;