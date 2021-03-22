import React, { Component } from 'react';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import logo from '../../Pictures/logo.png';
class Footer extends Component {
    render() {
        const bgColor1 = { backgroundColor: '#68EBF0' }
        return (
            <div>
                <MDBFooter style={bgColor1} color="white" className="font-small pt-4 mt-4">
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
                    <div>
                        <form className="form-inline" action="/sign-up">
                            <input className="form-control form-control-sm ml-4 w-35" type="text" placeholder="Email..." aria-label="Email" />
                            <button className="btn btn-warning my-2 my-sm-0" type="submit">Signup</button>
                        </form>
                    </div>
                    <div className="footer-copyright text-center py-3">

                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a> Cookiespageco.fanpage@gmail.com </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        );
    }
}

export default Footer;
