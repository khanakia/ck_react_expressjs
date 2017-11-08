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

@inject('matchStore')
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
        this.props.matchStore.fetch(this.props.matchId)
    }

    onFormSubmitted = () => {
        this.fetch()
    }

    fetch = () => {
        this.props.matchEntryStore.fetchPlInfo(this.props.matchId, this.getBookNo())
        this.props.matchEntryStore.fetchList(this.props.matchId, this.getBookNo())
        this.props.matchStore.fetchTeams(this.props.matchId)
    }

    onEditButtonClick = (data) => {
        // console.log(data)
        this.refs.matchEntryForm.edit(data)
    }

    matchGridOnDataUpdate = () => {
        this.fetch()
    }

    getBookNo = () => {
        try {
            return this.refs.bookddl.getSelectedValue()
        } catch(err) {
            return 1
        }
    }

    onBookNoChange = (bookNo) => {
        // console.log(bookNo)
        this.fetch()
    }


    onDeclareChange = () => {
        this.props.matchStore.fetch(this.props.matchId)
        this.fetch()
    }

    openDeclareWindow = () => {
        let mainDemoContainer = document.getElementById('footerContainer');
            let widgetContainer = document.createElement('div');
            mainDemoContainer.appendChild(widgetContainer);
            // console.log(this.props.matchEntryStore.matchPlInfo.teamsWinLossList.length)
            render(<MatchDeclare teamList={this.props.matchStore.teamsList} onChange={this.onDeclareChange} />, widgetContainer);
    }

    undeclare = () => {
        var r = confirm("Are you sure to Undeclare ?");
        if (r == true) {
           axios({
                method: 'post',
                url: "/matches/undeclare/" + this.props.matchId
            }).then((res) => {
                this.props.matchStore.fetch(this.props.matchId)
                this.fetch()
                
            }).catch((err)=> {
                toastr.error(err.response.data.message)
            })
        }
    }

    abandon = () => {
        var r = confirm("Are you sure to Abandon ?");
        if (r == true) {
           axios({
                method: 'post',
                url: "/matches/abandon/" + this.props.matchId
            }).then((res) => {
                this.props.matchStore.fetch(this.props.matchId)
                this.fetch()
                
            }).catch((err)=> {
                toastr.error(err.response.data.message)
            })
        }
    }

    unAbandon = () => {
        var r = confirm("Are you sure to UnAbandon ?");
        if (r == true) {
           axios({
                method: 'post',
                url: "/matches/unabandon/" + this.props.matchId
            }).then((res) => {
                this.props.matchStore.fetch(this.props.matchId)
                this.fetch()
                
            }).catch((err)=> {
                toastr.error(err.response.data.message)
            })
        }
    }


    renderDeclareButtons = () => {
        const {match} = this.props.matchStore
        if(match.is_abandoned) return null;
        if(match.is_declared) {
            return (
                <button className="btn btn-primary btn-sm" onClick={this.undeclare}>UnDeclare</button>
            ) 
        }
        return (
            <button className="btn btn-primary btn-sm" onClick={this.openDeclareWindow}>Declare</button>
        )
    }

    renderAbandonButtons = () => {
        const {match} = this.props.matchStore
        if(match.is_declared) return null;
        if(match.is_abandoned) {
            return (
                <button className="btn btn-primary btn-sm ml-1" onClick={this.unAbandon}>Un Abandon</button>
            ) 
        }
        return (
            <button className="btn btn-primary btn-sm ml-1" onClick={this.abandon}>Abandon</button>
        )
    }

    render() {
        const {matchId} = this.props
        const {match, teamsList} = this.props.matchStore
        if (!this.props.matchId) return null;
        if (_.isEmpty(match)) return null;
        const {entriesList, matchPlInfo} = this.props.matchEntryStore
        const {bookNoList, teamsWinLossList} = matchPlInfo

        // console.table(entriesList.slice())

        const cssClassHidden = match.match_type=="Cup" ? ' hidden' : ''
        return ( 
            <div>
                <div className="row">
                    <div className="col-md-2">
                        {this.renderDeclareButtons()}
                        {this.renderAbandonButtons()}
                        
                        
                        <div className={"mt-2" + cssClassHidden}>
                            <MatchEntryBookDdl ref="bookddl" bookNoList={bookNoList} onChange={this.onBookNoChange} /> 
                            <MatchEntryAvgBlock teamsWinLossList={teamsWinLossList} />
                        </div>
                        <div className="mt-2">
                            <MatchEntryTeamGrid ref="teamGrid" teamsWinLossList={teamsWinLossList} />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="mb-2">
                            <MatchEntryForm ref="matchEntryForm" 
                                matchId={matchId} match={match}
                                onFormSubmitted={this.onFormSubmitted} getBookNo={this.getBookNo} 
                                teamsList={teamsList} />
                        </div>
                        <div className="uk-margin">
                            <MatchEntryGrid ref="matchGrid" 
                                onEditButtonClick={this.onEditButtonClick}  onDataUpdate={this.matchGridOnDataUpdate}
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
