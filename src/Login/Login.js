import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Login.css';
import SignInScreen from '../components/SignInScreen/SignInScreen';
class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="login">
                    <div className="box-sizing1" >
                        <br/>
                        <SignInScreen />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Login;
