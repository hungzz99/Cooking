import React, { Component } from 'react';
import reactDom from 'react-dom';
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBCardImage, Link, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";


function Reciep(props) {
    const link = "/productid-details/" + props.id
    console.log(link);

    return (
        <MDBCard >
            <Link to={link}>
                <MDBCardImage src={props.photoUrl} alt="MDBCard image cap" top hover
                    overlay="white-slight" />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">{props.title}</MDBCardTitle>
                </MDBCardBody>
            </Link>
        </MDBCard>
    )
}

export default Reciep