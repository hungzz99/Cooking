import React, { Component } from 'react';
import './Login.css';
import Header from './Header';
class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="login">
                    <div className="box-sizing">
                        <form className="px-4 py-3">
                            <div className="form-group-inline">
                                <label for="exampleDropdownFormEmail1">Email address</label>
                                <input type="email" className="form-control" placeholder="UserName"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleDropdownFormPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" for="dropdownCheck">
                                    Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" text-decoration="underline">If you don't have account, Sign up</a>
                        <a className="dropdown-item" href="#">Forgot password?</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
