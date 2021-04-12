import React, { Component } from 'react'
import './AboutUs.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="AboutUs">
                    <div className="about-content"> 
                    <MDBCard className="face back" style={{ height: "400px" }}>
                        <MDBCardBody>
                            <h1 className="font-weight-bold">Welcome To Cookies</h1>
                            <hr />
                            <p>
                                We're a tech company, working to make everyday cooking fun because we believe that cooking is the key to a happier and healthier life for people, communities and the planet.
                                The choices we make shape our world. And when we cook, the choices we make have an impact on ourselves, the people we cook for, the growers and producers we buy from and the wider environment.
                                We believe that by building a platform that solves the issues related to everyday cooking and helps more people to cook, we can help build a better world.
                            </p>
                            <hr />
                            <ul className="list-inline py-2">
                                <li className="list-inline-item">
                                    <a href="#!" className="p-2 fa-lg fb-ic">
                                        <MDBIcon fab icon="facebook-f" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="p-2 fa-lg tw-ic">
                                        <MDBIcon fab icon="twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="p-2 fa-lg gplus-ic">
                                        <MDBIcon fab icon="google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </MDBCardBody>
                    </MDBCard>
                    </div>
                </div>
                <br/>
                <br/>
                <Footer />
            </div>
        )
    }
}
export default AboutUs;
