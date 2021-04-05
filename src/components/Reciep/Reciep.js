import React, { Component } from 'react';
import reactDom from 'react-dom';
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBCardImage, Link, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";


function Reciep(props) {

    const item = props.posts.map(post => {
        const link = "/productid-details/?id=" + post.id
        console.log(link);
        return (
            <MDBCard >
                <Link to={link}>
                    <MDBCardImage src={post.photoUrl} alt="MDBCard image cap" top hover
                        overlay="white-slight" />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">{post.title}</MDBCardTitle>
                    </MDBCardBody>
                </Link>
            </MDBCard>
        )
    })

    return (
        <MDBCardGroup>
            {item}
        </MDBCardGroup>
    )
}

export default Reciep