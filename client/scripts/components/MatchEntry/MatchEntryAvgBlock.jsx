import React, { Component } from "react";

class MatchEntryAvgBlock extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        teamsWinLossList: []
    }
    
    render() {
        var avgl = 0;
        var avgk = 0;
        let matchTeams = this.props.teamsWinLossList
        var t1_bidamt = matchTeams[0] ? Math.abs(matchTeams[0].amount) : 0
        var t2_bidamt = matchTeams[1] ? Math.abs(matchTeams[1].amount) : 0
        if(t1_bidamt>0 && t2_bidamt>0) {
            avgl = (t1_bidamt / t2_bidamt).toFixed(2)
            avgk = (t2_bidamt / t1_bidamt).toFixed(2)
        }
        
        return (
            <div>
                <table className="table table-striped table-sm table-bordered tableStyle1">
                    <thead className="thead-dark">
                        <tr>
                            <th>Avg. L</th>
                            <th>Avg. K</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{avgl}</td>
                            <td>{avgk}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MatchEntryAvgBlock;
