import React, { Component } from "react";
import { render } from 'react-dom'
import { inject, observer } from 'mobx-react';

import SessionInfoBlock from './SessionEntry/SessionInfoBlock'
import SessionEntryWinLossGrid from './SessionEntry/SessionEntryWinLossGrid'
import SessionEntryGrid from './SessionEntry/SessionEntryGrid'
import SessionEntryForm from './SessionEntry/SessionEntryForm'
import SessionGrid from './Session/SessionGrid'
import SessionForm from './Session/SessionForm'

@inject('globalStore')
@inject('matchStore')
@inject('sessionStore')
@inject('sessionEntryStore')
@observer
class SessionEntry extends Component {
	constructor(props) {
		super(props)
	}

	static defaultProps = {
        matchId : null,
        sessionId: null
    }

    componentDidMount() {
    	this.props.matchStore.fetchTeams(this.props.matchId)
    	this.props.sessionStore.fetchList(this.props.matchId)
    	if(this.props.globalStore.selectedSessionId) {
    		this.fetch(this.props.globalStore.selectedSessionId)
    	}
	}

    fetch = (sessionId) => {
    	this.props.sessionEntryStore.fetchAll(sessionId)
    }

	//// Sessions Functions =======================================
	openSessionForm(id=null){
		const {teamsList} = this.props.matchStore
		let mainDemoContainer = document.getElementById('footerContainer');
        let widgetContainer = document.createElement('div');
        mainDemoContainer.appendChild(widgetContainer);
        render(<SessionForm onFormSubmitted={this.onSessionFormSubmitted} matchId={this.props.matchId} id={id} teamsList={teamsList} />, widgetContainer);
	}

	showAddSessionWindow =() => {
		this.openSessionForm()
	}

	editSession =() => {
		const id = this.refs.comboSession.getSelectedValue()
		this.openSessionForm(id)
	}

	onSessionFormSubmitted = () => {
		// this.refs.sessionGrid.refresh()
		this.props.sessionStore.fetchList(this.props.matchId)
	}

	sessionGrid_onRowSelect = (rowdata) => {
		// this.fetchSession(rowdata._id)
		this.props.globalStore.setSessionId(rowdata._id)
		this.fetch(rowdata._id)
	}

	sessionGrid_onEdit= (rowdata) => {
		this.openSessionForm(rowdata._id)
	}


    openDeclareWindow = () => {
    	var rowdata = this.refs.sessionGrid.getSelectedRowData()
    	console.log(rowdata)
        var declared_runs = prompt("Enter Declared Runs");
        
        if(declared_runs>=0) {
			axios({
				method: 'post',
				url: "/sessions/declare/"+rowdata._id,
				data: {
					declared_runs: declared_runs
				}
			}).then((res) => {
				// this.refs.sessionGrid.refresh()
				this.props.sessionStore.fetchList(this.props.matchId)
				if(this.props.globalStore.selectedSessionId) {
		    		this.fetch(this.props.globalStore.selectedSessionId)
		    	}
			})
        }
    }

    sessionUndeclare = () => {
    	var rowdata = this.refs.sessionGrid.getSelectedRowData()
    	var r = confirm("Are you sure to Undeclare ?");
        if (r == true) {
           axios({
				method: 'post',
				url: "/sessions/undeclare/"+rowdata._id
			}).then((res) => {
				// this.refs.sessionGrid.refresh()
				this.props.sessionStore.fetchList(this.props.matchId)
				if(this.props.globalStore.selectedSessionId) {
		    		this.fetch(this.props.globalStore.selectedSessionId)
		    	}
			}).catch((err)=> {
                toastr.error(err.response.data.message)
            })
        }
    }

    //// SESSION ENTRY FUNCTIONS ========================================================
    comboSessionOnClose = (e) => {
		const sessionId = (this.refs.entryForm.refs.comboSession.getSelectedValue())

		this.props.globalStore.setSessionId(sessionId)
		this.fetch(sessionId)
		this.refs.sessionGrid.selectRowBySessonId(sessionId)
	}
	sessionEntry_onFormSubmitted = (response) => {
		this.refs.entryForm.resetForm()
		// console.log(response.session_id)
		this.fetch(response.session_id)

		this.props.sessionEntryStore.lastEnteredRun = response.runs
	}

	entryGrid_onEditButtonClick = (data) => {
		this.refs.entryForm.edit(data)
	}

	entryGrid_onDataUpdate =() => {
		this.fetch(this.props.globalStore.selectedSessionId)
	}

    render() {
    	
    	const {selectedSessionId} = this.props.globalStore
    	const {sessionList} = this.props.sessionStore
    	const {sessionEntriesList, sessionPlInfo, sessionWinLossList, lastEnteredRun} = this.props.sessionEntryStore

    	// console.log(selectedSessionId)

        return (
            <div>
            	<div className="row info-heading-block">
            		<div className="col-md-8">
		         		<SessionInfoBlock plInfo={sessionPlInfo} />
            		</div>
            	</div>
         		<div className="row">
         			<div className="col-md-9">
		         		<div className="mt-2 mb-2">
	     					<SessionEntryForm ref="entryForm" matchId={this.props.matchId} 
	     								sessionId={selectedSessionId} sessionList={sessionList}
	     								onFormSubmitted={this.sessionEntry_onFormSubmitted} 
	     								comboSessionOnClose={this.comboSessionOnClose} />
		         		</div>

		         		<div className="row">
		         			<div className="col-md-10">
		         				<SessionEntryGrid ref="entryGrid" entriesList={sessionEntriesList}
		         						onEditButtonClick={this.entryGrid_onEditButtonClick} onDataUpdate={this.entryGrid_onDataUpdate} />
		         			</div>
		         			<div className="col-md-2">
		         				<SessionEntryWinLossGrid ref="winlossGrid" entriesList={sessionWinLossList} lastEnteredRun={lastEnteredRun} />
		         			</div>
		         		</div>
         			</div>
         			<div className="col-md-3">
         				<button className="btn btn-primary btn-sm mr-2" type="button" onClick={this.showAddSessionWindow}>Add</button>
         				<button className="btn btn-primary btn-sm mr-2" onClick={this.openDeclareWindow}>Declare</button>
         				<button className="btn btn-primary btn-sm" onClick={this.sessionUndeclare}>Un Declare</button>
         				<div className="mt-2 mb-2">
	         				<SessionGrid ref="sessionGrid" entriesList={sessionList} sessionId={selectedSessionId}
	         							 onRowSelect={this.sessionGrid_onRowSelect} onEditButtonClick={this.sessionGrid_onEdit} />
         				</div>
         				
         			</div>
         		</div>

            </div>
        );
    }
}

export default SessionEntry;
