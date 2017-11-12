import React, { Component } from "react";
class SessionInfoBlock extends Component {
    constructor(props) {
        super(props)

        this.defaultItem = {
            yes: 0,
            no: 0,
            yes_after_patti: 0,
            no_after_patti: 0,
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
         				<label>Yes: {item.yes}</label>
         				{/*<div className="val">{item.yes}</div>*/}
         			</div>
         			<div className="col-auto">
         				<label>No: {item.no}</label>
         				{/*<div className="val">{item.no}</div>*/}
         			</div>
                    <div className="col-auto">
                        <label>Yes After Patti: {item.yes_after_patti}</label>
                        {/*<div className="val">{item.yes_after_patti}</div>*/}
                    </div>
                    <div className="col-auto">
                        <label>No After Patti: {item.no_after_patti}</label>
                        {/*<div className="val">{item.no_after_patti}</div>*/}
                    </div>
         			<div className="col-auto">
         				<label>Comm. Rec.: {item.comm_rec}</label>
         				{/*<div className="val">{item.comm_rec}</div>*/}
         			</div>
         			<div className="col-auto">
         				<label>Comm. Pay: {item.comm_pay}</label>
         				{/*<div className="val">{item.comm_pay}</div>*/}
         			</div>
         		</div>

            </div>
        );
    }
}

export default SessionInfoBlock;
