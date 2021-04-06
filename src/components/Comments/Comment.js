import React, { Component } from 'react'
import { MDBIcon } from "mdbreact";

class Comment extends Component {
    render() {
        return (
            <>
                <div className="comment">
                    <div className="col-auto">
                        {/* <label className="sr-only" for="inlineFormInputGroup">Comments</label> */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <MDBIcon icon="user" />
                                </div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Comments....." />
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <MDBIcon far icon="paper-plane" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Comment
