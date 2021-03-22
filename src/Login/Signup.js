import React, { Component } from 'react';
import './Signup.css';
import Header from '../components/Header/Header';
class Signup extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="sign-up" >
                    <div className="box-sizing2">
                        <h1>Sign Up </h1>
                        <form className="px-4 py-3">
                            <div className="form-group">
                                <input type="user" className="form-control" placeholder="Username*" />
                            </div>
                            <div className="form-group">
                                <input type="user" className="form-control" placeholder="Email Address*" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password*" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Confirm Password*" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" for="dropdownCheck">
                                I'm happy to receive regular recipe recommendations, inspiration and other communications from Cookies. 
                                </label>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary" >Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Signup;
