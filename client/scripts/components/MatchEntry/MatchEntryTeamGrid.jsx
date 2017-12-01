import React, { Component } from "react";

import { MATCH_TEAM_STATUS_WINNER } from "../../Constant"


class MatchEntryTeamGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        matchId: null,
        teamsWinLossList: []
    }


    renderItems = () => {
        if (this.props.teamsWinLossList.length < 1) return null;

        var items = this.props.teamsWinLossList
        
        return items.map((item, i) => {
            var amount = -1 * item.amount;
            var classname = amount > 0 ? "table-success" : "table-danger";
            var classname_fa = amount > 0 ? "fa-thumbs-up" : "fa-thumbs-down";
            return (
                <tr key={i} className={classname}>
                    <td>
                        {item.team_name}
                        <span className="ml-2" dangerouslySetInnerHTML={{__html: `<i class="fa ${classname_fa}" aria-hidden="true"></i>` }} />                        
                        <span className="ml-2" dangerouslySetInnerHTML={{__html: item.status==MATCH_TEAM_STATUS_WINNER ? '<i class="fa fa-trophy" aria-hidden="true"></i>' : ''}} />                        
                    </td>
                    <td>{amount}</td>
                    <td>{item.is_declared ? 'Y' : 'N'}</td>
                </tr>
            )
        });
    }

    render() {
        // console.log(this.props.teamsWinLossList)
        return (
            <div>
                <table className="table table-striped table-sm">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Team</th>
                            <th>Amount</th>
                            <th>Declared</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MatchEntryTeamGrid;
