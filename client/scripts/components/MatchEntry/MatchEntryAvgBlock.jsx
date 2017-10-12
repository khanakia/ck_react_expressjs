import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

import MatchTeamHelper from '../../helpers/MatchTeamHelper'

class MatchEntryAvgBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        matchId: this.props.matchId,
        matchTeams: []
    }
  }

  static defaultProps = {
    matchId: null,
    matchTeams: []
  }

  componentDidMount() {
    var _this = this;
    console.log("PROPS", this.props.matchId)
    MatchTeamHelper.index({
        // match_id: this.props.matchId
        match_id: "59d774e3db652b22f83ff98c"
    }).then((res) => {
        console.log("MATCH TEAMS" , res)
        _this.setState({
            matchTeams: res.data
        })
    })
  }
  
  componentDidUpdate() {
    console.log("PROPS", this.props.matchId)
  }
  

  refresh = () => {
   
  }

  render() {  
    var _this = this;
    if(this.state.matchTeams.count>0) {
        return null;
    }

     var avgl = 0;
     var avgk = 0;

    const matchTeams = this.state.matchTeams;
    if(matchTeams.length>=2) {
        var t1_bidamt = matchTeams[0].total_bid_amt
        var t2_bidamt = matchTeams[1].total_bid_amt
        avgl =  (t1_bidamt/ t2_bidamt).toFixed(2)
        avgk =  (t2_bidamt/ t1_bidamt).toFixed(2)
    }
      return (
        <div>
            <table className="table table-striped table-sm">
              <thead className="thead-inverse">
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
