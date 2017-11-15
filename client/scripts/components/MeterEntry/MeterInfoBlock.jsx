import React, { Component } from "react";
class MeterInfoBlock extends Component {
    constructor(props) {
        super(props)

        this.defaultItem = {
            rate_sum: 0,
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
         				<label>Rate: {item.rate_sum}</label>
         			</div>
         			<div className="col-auto">
         				<label>Comm. Rec.: {item.comm_rec}</label>
         			</div>
         			<div className="col-auto">
         				<label>Comm. Pay: {item.comm_pay}</label>
         			</div>
         		</div>

            </div>
        );
    }
}

export default MeterInfoBlock;
