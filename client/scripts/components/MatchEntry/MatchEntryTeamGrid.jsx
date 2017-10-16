import React, { Component } from "react";

// import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
// import { URL_MATCH_ENTRIES_TEAM_WINLOSSS_LIST } from '../../Constant'
class MatchEntryTeamGrid extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     items: []
        // }
    }

    static defaultProps = {
        matchId: null,
        teamsWinLossList: []
    }

    componentDidMount() {
        // console.log(this.props.matchId)
        // this.fetchData()
    }

    // fetchData() {
    //     axios({
    //         method: 'get',
    //         url: URL_MATCH_ENTRIES_TEAM_WINLOSSS_LIST,
    //         params: {
    //             match_id: this.props.matchId
    //         }
    //     }).then((res) => {
    //         this.setState({
    //             items: res.data
    //         })
    //     })
    // }

    renderItems = () => {
        if (this.props.teamsWinLossList.length < 1) return null;

        var item = this.props.teamsWinLossList[0]
        
        return Object.entries(item).map((key, i) => {
            if (key[0] == "_id") return null;

            var amount = -1 * key[1];
            var classname = amount > 0 ? "table-success" : "table-danger";
            return (
                <tr key={i} className={classname}>
                    <td>{key[0]}</td>
                    <td>{-1 * key[1]}</td>
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
