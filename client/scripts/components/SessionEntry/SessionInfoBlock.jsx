import React, { Component } from "react";
class SessionInfoBlock extends Component {
    constructor(props) {
        super(props)

        this.defaultItem = {
           yes: 0,
            no: 0,
            comm_rec: 0,
            comm_pay: 0
        }
    }


    render() {
        const item = Object.assign({}, this.defaultItem, this.props.plInfo)

        return (
            <div>
         		<div className="form-row sessioninfo-block">
         			<div className="col-auto">
         				<label>Yes</label>
         				<div className="val">{item.yes}</div>
         			</div>
         			<div className="col-auto">
         				<label>No</label>
         				<div className="val">{item.no}</div>
         			</div>
         			<div className="col-auto">
         				<label>Comm. Rec.</label>
         				<div className="val">{item.comm_rec}</div>
         			</div>
         			<div className="col-auto">
         				<label>Comm. Pay</label>
         				<div className="val">{item.comm_pay}</div>
         			</div>
         		</div>

            </div>
        );
    }
}

export default SessionInfoBlock;
