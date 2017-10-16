import React from 'react'
import { inject, observer } from 'mobx-react';
import { render } from 'react-dom'

import ComboBox from './controls/ComboBox.jsx'
import MatchEntryForm from './MatchEntry/MatchEntryForm.jsx'
import MatchEntryGrid from './MatchEntry/MatchEntryGrid.jsx'
import MatchEntryTeamGrid from './MatchEntry/MatchEntryTeamGrid.jsx'
import MatchEntryAvgBlock from './MatchEntry/MatchEntryAvgBlock.jsx'
import MatchEntryBookDdl from './MatchEntry/MatchEntryBookDdl.jsx'
import MatchDeclare from './MatchEntry/MatchDeclare.jsx'

@inject('matchEntryStore')
@observer
class MatchEntry extends React.Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        matchId : 1,
    }

    componentDidMount() {
        this.fetch()
    }

    onFormSubmitted = () => {
        this.fetch()
    }

    fetch = () => {
        this.props.matchEntryStore.fetchPlInfo(this.props.matchId, this.getBookNo())
        this.props.matchEntryStore.fetchList(this.props.matchId, this.getBookNo())
        this.props.matchEntryStore.fetchTeams(this.props.matchId)
    }

    onEditButtonClick = (data) => {
        // console.log(data)
        this.refs.matchEntryForm.edit(data)
    }

    getBookNo = () => {
        return this.refs.bookddl.getSelectedValue()
    }

    onBookNoChange = (bookNo) => {
        // console.log(bookNo)
        this.fetch()
    }


    openDeclareWindow = () => {
        let mainDemoContainer = document.getElementById('footerContainer');
            let widgetContainer = document.createElement('div');
            mainDemoContainer.appendChild(widgetContainer);
            render(<MatchDeclare matchId={this.props.matchId} />, widgetContainer);
    }

    render() {
        if (!this.props.matchId) return null;
        const {matchId} = this.props
        const {entriesList, teamsList, matchPlInfo} = this.props.matchEntryStore
        const {bookNoList, teamsWinLossList} = matchPlInfo
        return ( 
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-sm" onClick={this.openDeclareWindow}>Declare</button>
                        <div className="mt-2">
                            <MatchEntryBookDdl ref="bookddl" bookNoList={bookNoList} onChange={this.onBookNoChange} /> 
                            <MatchEntryAvgBlock teamsWinLossList={teamsWinLossList} />
                            <MatchEntryTeamGrid ref="teamGrid" teamsWinLossList={teamsWinLossList} />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="mb-2">
                            <MatchEntryForm ref="matchEntryForm" matchId={matchId} onFormSubmitted={this.onFormSubmitted} getBookNo={this.getBookNo} 
                                teamsList={teamsList} />
                        </div>
                        <div className="uk-margin">
                            <MatchEntryGrid ref="matchGrid" 
                                onEditButtonClick={this.onEditButtonClick} 
                                entriesList={entriesList}
                                teamsList={teamsList} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MatchEntry;
