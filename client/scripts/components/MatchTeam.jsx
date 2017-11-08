import React, { Component } from "react";
import { render } from 'react-dom'
import { inject, observer } from 'mobx-react';

import MatchTeamHelper from '../helpers/MatchTeamHelper'
import ComboBoxTeam from './controls/ComboBoxTeam'
import MatchTeamGrid from './MatchTeam/MatchTeamGrid'

@inject('matchTeamStore')
@observer
class MatchTeam extends Component {
    constructor(props, context) {
        super(props)
    }

    static defaultProps = {
        match: {},
        matchId: null,
        is_declared: null,
    }

    componentDidMount() {
        this.props.matchTeamStore.fetchList(this.props.matchId)
    }

    componentWillReceiveProps(nextProps) {        
          if(nextProps.matchId!==this.props.matchId) {
              this.props.matchTeamStore.fetchList(nextProps.matchId)
          }
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.props.matchId) {
            toastr.error('Please Select Match first.')
            return false;
        }

        const team_id = this.refs.comboTeam.refs.idInput.value

         if (!team_id) {
            toastr.error('Please Select Team first.')
            return false;
        }

        MatchTeamHelper.store({
            team_id: team_id,
            match_id: this.props.matchId
        }).then((res) => {
            this.props.matchTeamStore.fetchList(this.props.matchId)
        }).catch((err)=> {
            toastr.error(err.response.data.message)
        })
        return false;
    }



    matchTeamGrid_onDataUpdate = () => {
        this.props.matchTeamStore.fetchList(this.props.matchId)
    }

    render() {
        const {matchTeamList, matchTeam} = this.props.matchTeamStore
        // console.log(matchTeamList)
        return (
            <div>
                <h3>Match Teams</h3>
                {
                    this.props.match && !this.props.match.is_declared && !this.props.match.is_abandoned 
                    ?
                    <form ref="form" className="mb-1" onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="input-group">
                                    <ComboBoxTeam ref="comboTeam" field_id="match_id" />

                                    <span className="input-group-btn">
                                      <button className="btn btn-primary btn-sm ml-1" type="button" onClick={this.onSubmit}>Add</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                    : ''
                }
               <MatchTeamGrid entriesList={matchTeamList} onDataUpdate={this.matchTeamGrid_onDataUpdate} />
            </div>

        );
    }
}

export default MatchTeam;
