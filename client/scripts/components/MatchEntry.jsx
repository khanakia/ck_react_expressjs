import React from 'react'

import ComboBox from './controls/ComboBox.jsx'
import MatchEntryForm from './MatchEntry/MatchEntryForm.jsx'
import MatchEntryGrid from './MatchEntry/MatchEntryGrid.jsx'
import MatchEntryTeamGrid from './MatchEntry/MatchEntryTeamGrid.jsx'
import MatchEntryAvgBlock from './MatchEntry/MatchEntryAvgBlock.jsx'
import MatchEntryBookDdl from './MatchEntry/MatchEntryBookDdl.jsx'
import MatchDeclare from './MatchEntry/MatchDeclare.jsx'


import MatchHelper from '../helpers/MatchHelper'
import MatchTeamHelper from '../helpers/MatchTeamHelper'

class MatchEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {},
            scount: 0
        }
    }
    componentDidMount() {
        this.match_id = this.props.match.params.id
        MatchHelper.show(this.props.match.params.id).then((res) => {
            this.setState({ item: res.data })
        });
    }

    onFormSubmitted = () => {
        this.refs.matchGrid.refresh()
        this.refs.teamGrid.fetchData()
    }

    changeState = () => {
        this.setState({
            scount: this.state.scount + 1
        })
        // this.refs.bookddl.setState({
        //  scount: 4
        // })
    }


    onEditButtonClick = (data) => {
        console.log(data)
        this.refs.matchEntryForm.edit(data)
    }

    getBookNo = () => {
        return this.refs.bookddl.getSelectedValue()
    }

    render() {
        if (!this.state.item._id) return null;
        return ( 
            <div>
                <div className="row info-heading-block">
                    <div className="col-md-8">
                        <label>{this.state.item.match_name} ({this.state.item._id})</label>
                    </div>
                    <div className="col-md-2">
                        <label>Date:</label>
                        {this.state.item.created_at}
                    </div>
                    <div className="col-md-2">
                        <label>Match Type:</label>
                        {this.state.item.match_type}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <button onClick={this.changeState}>Change State</button>
                        <MatchEntryBookDdl ref="bookddl" scount={this.state.scount} matchId={this.state.item._id} /> 
                        <MatchEntryAvgBlock matchId={this.state.item._id} />
                        <MatchEntryTeamGrid ref="teamGrid" matchId={this.state.item._id} />

                    </div>
                    <div className="col-md-10">
                        <MatchDeclare matchId={this.state.item._id} />
                        <MatchEntryForm ref="matchEntryForm" matchId={this.state.item._id} onFormSubmitted={this.onFormSubmitted} getBookNo={this.getBookNo} />
                        <div className="uk-margin">
                            <MatchEntryGrid ref="matchGrid" onEditButtonClick={this.onEditButtonClick} matchId={this.state.item._id} matchTeams={this.state.item.match_teams} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MatchEntry;
