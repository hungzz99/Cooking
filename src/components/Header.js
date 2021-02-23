import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className = "header">
                <Navbar className="navbar" bg="#FFFFCC" expand="lg" variant="outline-warning">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#">Home</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl variant="outline-warning"type="text" placeholder="Search..." className="mr-sm-2" />
                        </Form>
                        <Button variant="outline-warning" width="50px">Login</Button>
                        <Button variant="outline-warning" width="50px">SignUp</Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;