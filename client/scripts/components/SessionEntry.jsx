import React, { Component } from "react";
import { render } from 'react-dom'

import JqxWindow from './jqwidgets-react/react_jqxwindow.js';
import ComboBoxSession from './controls/ComboBoxSession'
import SessionForm from './Session/SessionForm'
import SessionEntryForm from './SessionEntry/SessionEntryForm'
import SessionEntryGrid from './SessionEntry/SessionEntryGrid'
import SessionEntryWinLossGrid from './SessionEntry/SessionEntryWinLossGrid'
import SessionInfoBlock from './SessionEntry/SessionInfoBlock'

import SessionGrid from './Session/SessionGrid'


class SessionEntry extends Component {
	constructor(props) {
		super(props)

		this.state = {
			scount: 0,
			// get in bootstrap.js before component render
			sessionId: window.sessionId,
			plInfo: {}
		}
	}
	static defaultProps = {
        matchId : null,
        sessionId: null
    }

    componentDidMount() {
    	this.fetchSession(this.state.sessionId);
	}

	// setCurrentSessionId = (sessionId) => {
	// 	this.setTempSessionId(sessionId)
	// 	this.setState({
	// 		sessionId: sessionId
	// 	}, function() {
	// 		this.fetch_sessionPL_Info(sessionId);
	// 	})
	// }

	fetchSession = (sessionId) => {

		axios({
	    	method: 'get',
	        url: "/session_entries/sessionpl_info/" + sessionId,
	    }).then( (res) => {
	    	this.setTempSessionId(sessionId)
	    	this.setState({
	    		scount: this.state.scount+1,
	    		plInfo: res.data,
	    		sessionId: sessionId
	    	})
	    	this.refs.entryGrid.refresh()
			this.refs.winlossGrid.refresh()
	    })
	}
	
	setTempSessionId = (sessionId) => {
		localStorage.setItem('sessionId', sessionId)
	}

	showAddSessionWindow =() => {
		  this.openSessionForm()

	}

	editSession =() => {
		const id = this.refs.comboSession.getSelectedValue()
		this.openSessionForm(id)
	}

	openSessionForm(id=null){
		let mainDemoContainer = document.getElementById('footerContainer');
            let widgetContainer = document.createElement('div');
            mainDemoContainer.appendChild(widgetContainer);
            render(<SessionForm onFormSubmitted={this.onSessionFormSubmitted} matchId={this.props.matchId} id={id} />, widgetContainer);
	}

	onSessionFormSubmitted = () => {
		// this.refs.comboSession.rebind()
		this.refs.sessionGrid.refresh()


	}


	comboSessionOnClose = (e) => {
		const sessionId = (this.refs.entryForm.refs.comboSession.getSelectedValue())
		
		this.fetchSession(sessionId)
		this.refs.sessionGrid.selectRowBySessonId(sessionId)
	}


	onFormSubmitted = () => {
		
		this.refs.entryForm.resetForm()
		this.fetchSession(this.state.sessionId);
	}

	onEditButtonClick = (data) => {
		this.refs.entryForm.edit(data)
	}

	sessionGrid_onRowSelect = (rowdata) => {
		this.fetchSession(rowdata._id)
	}

	seessionOnEditButtonClick= (rowdata) => {
		this.openSessionForm(rowdata._id)
	}
    render() {
        return (
            <div>

            	<div className="row info-heading-block">
            	
            		<div className="col-md-6">
		         		<SessionInfoBlock plInfo={this.state.plInfo} />
            		</div>
            	</div>


         		<div className="row">
         			<div className="col-md-9">
		         		<div className="mt-2 mb-2">
	     					<SessionEntryForm ref="entryForm" matchId={this.props.matchId} 
	     								sessionId={this.state.sessionId} onFormSubmitted={this.onFormSubmitted} 
	     								comboSessionOnClose={this.comboSessionOnClose} />
		         		</div>
         				<SessionEntryGrid ref="entryGrid" key={this.state.scount} sessionId={this.state.sessionId} matchId={this.props.matchId} onEditButtonClick={this.onEditButtonClick} />
         			</div>
         			<div className="col-md-3">
         				<div className="mb-2">
         				<button className="btn btn-primary btn-sm mb-1" type="button" onClick={this.showAddSessionWindow}>Add</button>
         				<SessionGrid ref="sessionGrid" matchId={this.props.matchId} sessionId={this.state.sessionId} 
         							 onRowSelect={this.sessionGrid_onRowSelect} onEditButtonClick={this.seessionOnEditButtonClick} />
         				</div>
         				<SessionEntryWinLossGrid ref="winlossGrid" sessionId={this.state.sessionId} />
         			</div>
         		</div>

            </div>
        );
    }
}

export default SessionEntry;
