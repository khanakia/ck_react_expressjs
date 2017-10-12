import React, { Component } from "react";
class SessionInfoBlock extends Component {


    render() {

        return (
            <div>
         		<div className="form-row sessioninfo-block">
         			<div className="col-auto">
         				<label>Yes</label>
         				<div className="val">0</div>
         			</div>
         			<div className="col-auto">
         				<label>No</label>
         				<div className="val">0</div>
         			</div>
         			<div className="col-auto">
         				<label>Comm. Rec.</label>
         				<div className="val">0</div>
         			</div>
         			<div className="col-auto">
         				<label>Comm. Pay</label>
         				<div className="val">0</div>
         			</div>
         		</div>

            </div>
        );
    }
}

export default SessionInfoBlock;
