import React, { Component } from 'react';
import './Header.css';
import logo from '../Pictures/logo.png';
import { MDBCol, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBBtn } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
    // render() {
    //     return (
    //         <div className="header">
    //             <nav className="navbar navbar-expand navbar-light bg-color">
    //                 <a className="navbar-brand" href="/home">
    //                     <img src={logo} className="logo" />
    //                 </a>
    //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                     <ul className="navbar-nav mr-auto">
    //                         {/* <li className="nav-item active">
    //                             <a className="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
    //                         </li> */}
    //                         <li className="nav-item dropdown navbar-light active">
    //                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                                 Recipes
    //                             </a>
    //                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                                 <a className="dropdown-item" href="/healthy-recipes">Healthy Recipes</a>
    //                                 <div className="dropdown-divider"></div>
    //                                 <a className="dropdown-item" href="/easy-recipes">Easy Recipes</a>
    //                                 <div className="dropdown-divider"></div>
    //                                 <a className="dropdown-item" href="/daily-recipes">Daily Days</a>
    //                             </div>
    //                         </li>
    //                         <li className="nav-item active">
    //                             <a className="nav-link disabled" href="/about-us">About Us</a>
    //                         </li>
    //                         <li className="nav-item active">
    //                             <a className="nav-link disabled" href="/contact-us">Contact Us</a>
    //                         </li>
    //                     </ul>
    //                     <form className="form-inline my-2 my-lg-0" action="/login">
    //                         <input className="form-control mr-sm-2" type="search" placeholder="Search Cookies..." aria-label="Search" icon="fa fa-icon-search"/>
    //                         <button className="btn btn-success my-2 my-sm-0" type="submit">Login</button>
    //                     </form>
    //                 </div>
    //             </nav>
    //         </div>
    //     );
    // }
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        const bgColor = { backgroundColor: '#68EBF0' }
        return (
            <div>
                <Router>
                    <header>
                        <MDBNavbar style={bgColor} light expand="md" scrolling fixed="top">
                            <MDBNavbarBrand href="/home">
                                <img src={logo} width="220px" />
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.onClick} />
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem >
                                        <MDBNavLink to="/home" >Cookies</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <div className="d-none d-md-inline">Recipes</div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem href="/healthy-recipes">Healthy Recipes</MDBDropdownItem>
                                            <MDBDropdownItem href="/easy-recipes">Easy Recipes</MDBDropdownItem>
                                            <MDBDropdownItem href="/daily-recipes">Daily Recipes</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                    <MDBNavItem >
                                        <MDBNavLink to="/about-us" >About Us</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/contact-us" >Contact Us</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBCol md="3" right>
                                    <form className="form-inline mt-4 mb-4">
                                    <MDBIcon icon="search"/>
                                        <input className="form-control form-control-sm ml-4 w-75" type="text" placeholder="Search..." aria-label="Search"/> 
                                    </form>
                                </MDBCol>  
                                <MDBCol md="0.5" right>
                                    <form className="form-inline mt-4 mb-4" action="/login">
                                    <button className="btn btn-warning my-2 my-sm-0" type="submit">Login</button>
                                    </form>
                                </MDBCol>                                   
                            </MDBCollapse>
                        </MDBNavbar>
                    </header>
                </Router>
            </div>
        );
    }
}
export default Header;