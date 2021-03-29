import React, { Component } from 'react';
import './ContactUs.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

class ContactUs extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="contact">
                    <section className="my-5">
                        <MDBRow>
                            <MDBCol lg="5" className="lg-0 mb-4">
                                <MDBCard>
                                    <MDBCardBody>
                                        <div className="form-header blue accent-1">
                                            <h3 className="mt-2">
                                                HEADQUARTER:
                                            </h3>
                                        </div>

                                        <h5 className="mt-2">
                                            <MDBIcon icon="map-marker-alt" /> Detech Tower, 8 Ton That Thuyet Street, Nam Tu Liem District, Ha Noi City, Viet Nam.
                                        </h5>
                                        <h5 className="mt-2">
                                            <MDBIcon icon="envelope " /> Cookiespageco.fanpage@gmail.com
                                        </h5>
                                        <h5 className="mt-2">
                                            <MDBIcon icon="phone" /> (+84)366-686-868
                                        </h5>
                                        <br/>
                                        <h4 className="mt-2">
                                            Contact Person: Mr. Trinh Thai Binh
                                        </h4>
                                        <h5 className="mt-2">
                                        <MDBIcon icon="user-cog" /> Head of Global Marketing & Communication
                                        </h5>
                                        <h5 className="mt-2">
                                            <MDBIcon icon="envelope " /> Email: contact.binhtt@cookies.com.vn
                                        </h5>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="7">
                                <div id="map-container" className="rounded z-depth-1-half map-container" style={{ height: "500px" }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0968414914196!2d105.78049781540236!3d21.02881079315135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1616471543222!5m2!1sen!2s"
                                        title="This is a unique title"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                    />
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </div>
                <br/>
                <br/>
                <br/>

                <Footer/>

            </div>
            
        );
    }
}

export default ContactUs;
