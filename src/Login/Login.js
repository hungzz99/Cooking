import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Login.css';
import { MDBIcon, MDBBtn } from "mdbreact";
class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="login">
                    <div className="box-sizing1" >
                        <br/>
                        <MDBIcon icon="user-circle" size="3x"/>
                                                                        <form className="px-4 py-3">
                            <div className="form-group">
                                <input type="user" className="form-control" placeholder="Username -or- Email Address" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" for="dropdownCheck">
                                    Remember me
                                </label>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary" >Sign in</button>
                        </form>
                        <div className="a" >
                            <a href="/sign-up">If you don't have account, Sign up here!</a>
                            <br />
                            <a href="#">Forgot password?</a>
                        </div>
                        <form className="px-4 py-3" action="/login">
                            <MDBBtn social="gplus">
                                <MDBIcon fab icon="google-plus-g" className="pr-1" /> Login With Google +
                            </MDBBtn>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Login;
