import React, { Component } from "react";

class MatchEntryTeamGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        matchId: null,
        teamsWinLossList: []
    }

    // renderItems = () => {
    //     if (this.props.teamsWinLossList.length < 1) return null;

    //     var item = this.props.teamsWinLossList[0]
        
    //     return Object.entries(item).map((key, i) => {
    //         if (key[0] == "_id") return null;

    //         var amount = -1 * key[1];
    //         var classname = amount > 0 ? "table-success" : "table-danger";
    //         return (
    //             <tr key={i} className={classname}>
    //                 <td>{key[0]}</td>
    //                 <td>{-1 * key[1]}</td>
    //             </tr>
    //         )
    //     });
    // }

    renderItems = () => {
        if (this.props.teamsWinLossList.length < 1) return null;

        var items = this.props.teamsWinLossList
        
        return items.map((item, i) => {
            var amount = -1 * item.amount;
            var classname = amount > 0 ? "table-success" : "table-danger";
            return (
                <tr key={i} className={classname}>
                    <td>
                        {item.team_name}
                        <span className="ml-2" dangerouslySetInnerHTML={{__html: item.status=='Winner' ? '<i class="fa fa-trophy" aria-hidden="true"></i>' : ''}} />                        
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
