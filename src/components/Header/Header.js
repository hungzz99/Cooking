import React, { Component } from 'react';
import './Header.css';
import logo from '../../Pictures/logo.png';
import { MDBCol, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, Link } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class Header extends Component {
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
                                            <hr/>
                                            <MDBDropdownItem href="/easy-recipes">Easy Recipes</MDBDropdownItem>
                                            <hr/>
                                            <MDBDropdownItem href="/daily-recipes">Daily Recipes</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                    <MDBNavItem >
                                        <MDBNavLink to={'/about-us'} >About Us</MDBNavLink>
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
            </div>
        );
    }
}
export default Header;