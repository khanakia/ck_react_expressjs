import React, { Component } from "react";

import MatchHelper from '../../helpers/MatchHelper'
class SessionInfoBlock extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        item: {
            is_declared: false
        }
    }

    render() {
        const item = this.props.item
        // console.log(item.is_declared)
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
                        {item.is_declared ? 'Yes' : 'No'}
                    </div>
                    <div className="col-auto">
                        <label>Is Abandoned:</label>
                        {item.is_abandoned ? 'Yes' : 'No'}
                    </div>
                    <div className="col-auto">
                        <label>Is Monday Final:</label>
                        {item.is_monday_final ? 'Yes' : 'No'}
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionInfoBlock;
