import React, { Component } from 'react';
import './Footer.css';
import Signup from './Signup';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="about-contact">
                    <h4>ABOUT</h4>
                   <div> 
                        <a href="/about-us"> About Us </a>
                   </div>
                   <div> 
                        <a href="/about-us"> About Us </a>
                   </div>
                   <div> 
                        <a href="/about-us"> About Us </a>
                   </div>
                </div>
                <div className="contact">
                <h4>CONTACT</h4>
                    <p>Email: cookiespageco.fanpage@gmail.com</p>
                    <p>Contact: (+84)0123-456-789</p>
                    <p>Country: (+84) Viet Nam</p>
                </div>
                <div className="contact2">
                    <form className="form-inline my-2 my-lg-0" action="/sign-up" >
                        <input className="form-control mr-sm-2" type="search" placeholder="Your Email Address..." aria-label="Search" icon="fa fa-icon-search"/>
                        <button className="btn btn-success my-2 my-sm-0" type="submit" onClick={Signup}  >Sign Up</button>
                    </form>
                </div>
                <div className="reserved">
                    © 2020 Copyright:
                    <a className="text-dark">Cookiespageco.fanpage@gmail.com</a>
                </div>

            </div>
        );
    }
}

export default Footer;
