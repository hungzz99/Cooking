import React, { Component } from 'react';
import firebase from 'firebase';
import { MDBCol } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class accountRender extends Component {

    constructor() {
        super();
        this.state = {
            loggedIn: null
        }
    }

    componentDidMount() {
        const user = firebase.auth().currentUser;
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        });
    }

    handleSignOut() {
        const user = firebase.auth().currentUser;
        firebase.auth().signOut()
        this.setState({ loggedIn: false })
    }

    render() {
        const user = firebase.auth().currentUser;
        if (this.state.loggedIn) {
            return (
                <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                        {user.displayName}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-menu">
                        <MDBDropdownItem>
                            Profile
                    </MDBDropdownItem>
                        <MDBDropdownItem onClick={() => { this.handleSignOut() }}>
                            Logout
                    </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            )
        }
        else if (this.state.loggedIn == false) {
            return (
                <MDBCol md="0.5" right>
                    <form className="form-inline mt-4 mb-4" action="/login">
                        <button className="btn btn-warning my-2 my-sm-0" type="submit">Login</button>
                    </form>
                </MDBCol>
            )
        }
        else {
            return(
                <MDBCol md="0.5" right>
                </MDBCol>
            )
        }
    }
}
export default accountRender