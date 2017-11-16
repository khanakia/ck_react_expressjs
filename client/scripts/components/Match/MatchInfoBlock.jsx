import React, { Component } from "react";

import UtilHelper from '../../helpers/UtilHelper'

class SessionInfoBlock extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        item: {
            // is_declared: false
        }
    }

    render() {
        const item = this.props.item
        return (
            <div>
         		<div className="row info-heading-block">
                    <div className="col-auto">
                        <label>{item.match_name} ({item._id})</label>
                    </div>
                    <div className="col-auto">
                        <label>Date:</label>
                        {moment(item.created_at).format('ll') }
                    </div>
                    <div className="col-auto">
                        <label>Match Type:</label>
                        {item.match_type}
                    </div>
                    <div className="col-auto">
                        <label>Is Declared:</label>
                        {UtilHelper.showYesNo(item.is_declared)}
                    </div>
                    <div className="col-auto">
                        <label>Is Abandoned:</label>
                        {UtilHelper.showYesNo(item.is_abandoned)}
                    </div>
                    <div className="col-auto">
                        <label>Is Monday Final:</label>
                        {UtilHelper.showYesNo(item.is_monday_final)}
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionInfoBlock;
