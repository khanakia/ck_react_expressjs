import React, { Component } from "react";

import MatchHelper from '../../helpers/MatchHelper'
class SessionInfoBlock extends Component {
    constructor(props) {
        super(props)
        // this.state = {

        //     item: {

        //     }
        // }
    }

    static defaultProps = {
        item: {

        }
    }

    componentDidMount() {
        // this.fetchMatchInfo()
    }

    fetchMatchInfo() {
        // MatchHelper.show(this.props.matchId).then((res) => {
        //     this.setState({
        //         item: res.data
        //     })
        // })
    }


    render() {
        // const item = this.state.item
        const item = this.props.item

        return (
            <div>
         		<div className="row info-heading-block">
                    <div className="col-md-8">
                        <label>{item.match_name} ({item._id})</label>
                    </div>
                    <div className="col-md-2">
                        <label>Date:</label>
                        {moment(item.created_at).format('ll') }
                    </div>
                    <div className="col-md-2">
                        <label>Match Type:</label>
                        {item.match_type}
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionInfoBlock;
