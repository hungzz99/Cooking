import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination,
    Highlight
} from 'react-instantsearch-dom';
import React, { Component } from 'react';
import { MDBCol, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, Link } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import {  MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { useParams } from 'react-router-dom';
import logo from '../../Pictures/logo.png';
import AccountRender from '../LogInMenu/LoginMenu'

import './Search.css';

const searchClient = algoliasearch('MAN6LLCBXM', 'cb0affd964bf1e6e4fd384dd5c93e4f5');
class Search extends Component {
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
        const bgColor = { backgroundColor: '#68EBF0' };

        return (
            <>
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
                                        <hr />
                                        <MDBDropdownItem href="/easy-recipes">Easy Recipes</MDBDropdownItem>
                                        <hr />
                                        <MDBDropdownItem href="/daily-recipes">Daily Recipes</MDBDropdownItem>
                                        <hr />
                                        <MDBDropdownItem href="/occasions-recipes">Occasions Recipes</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                <MDBNavItem >
                                    <MDBNavLink to={'/about-us'} >About Us</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/contact-us" >Contact Us</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <AccountRender />
                        </MDBCollapse>
                    </MDBNavbar>
                </header>

                <div className="ais-InstantSearch">
                    <InstantSearch indexName="posts" searchClient={searchClient}>
                        <div>
                            <SearchBox defaultRefinement={this.props.searchKey} />
                            <Hits hitComponent={Hit} />
                            <Pagination />
                        </div>
                    </InstantSearch>
                </div>

                <footer>
                <MDBFooter style={bgColor} color="white" className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-right text-md-center">
                        <MDBRow>
                            <MDBCol md="6">
                                <img src={logo} width="220px" height="80px" />
                            </MDBCol>
                            <MDBCol md="6">
                                <ul>
                                    <li className="list-unstyled">
                                        <a href="/about-us">About Us </a>
                                        <MDBIcon icon="grip-lines-vertical" />
                                        <a href="contact-us"> Contact Us </a>
                                        <MDBIcon icon="grip-lines-vertical" />
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a> Cookiespageco.fanpage@gmail.com </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
                </footer>
            </>
        );
    }
}

function Hit(props) {
    const link = `/productid-details/${props.hit.postId}`
    return (
        <Link to={link}>
        <div>
            <img src={props.hit.photoUrl} align="left" alt={props.hit.title} />
            <div className="hit-name">
                <Highlight attribute="title" hit={props.hit} />
            </div>
        </div>
        </Link>
    );
}

function withSearchHook(Component) {
    return function WrappedComponent(props) {
        const myHookValue = useParams();
        return <Component {...props} searchKey={myHookValue.searchKey} />
    }
}
export default withSearchHook(Search);