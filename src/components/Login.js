import React, { Component } from 'react';
import Header from './Header';
import './Login.css';
class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="login">
                    <div className="box-sizing" >
                        <h1>Login </h1>
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
                            <button className="btn btn-success my-2 my-sm-0" type="submit">Login With Google Account </button>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
