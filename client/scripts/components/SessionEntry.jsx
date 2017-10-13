import React, { Component } from "react";
import { render } from 'react-dom'

import JqxWindow from './jqwidgets-react/react_jqxwindow.js';
import ComboBoxSession from './controls/ComboBoxSession'
import SessionForm from './Session/SessionForm'
import SessionEntryForm from './SessionEntry/SessionEntryForm'
import SessionEntryGrid from './SessionEntry/SessionEntryGrid'
import SessionEntryWinLossGrid from './SessionEntry/SessionEntryWinLossGrid'
import SessionInfoBlock from './SessionEntry/SessionInfoBlock'

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
    	this.fetch_sessionPL_Info(this.state.sessionId);
	}

	fetch_sessionPL_Info = (sessionId) => {
		axios({
	    	method: 'get',
	        url: "/session_entries/sessionpl_info/" + sessionId,
	    }).then( (res) => {
	    	this.setState({
	    		scount: this.state.scount+1,
	    		plInfo: res.data
	    	})
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
		console.log("sdfsd")
		this.refs.comboSession.rebind()

	}


	comboSessionOnClose = () => {
		const sessionId = (this.refs.comboSession.getSelectedValue())
		this.setTempSessionId(sessionId)
		this.setState({
			sessionId: sessionId
		}, function() {
			this.fetch_sessionPL_Info(this.state.sessionId);
		})
	}


	onFormSubmitted = () => {
		this.refs.entryGrid.refresh()
		this.refs.entryForm.resetForm()
		this.fetch_sessionPL_Info(this.state.sessionId);
	}

	onEditButtonClick = (data) => {
		this.refs.entryForm.edit(data)
	}

    render() {
        return (
            <div>

            	<div className="row info-heading-block">
            		<div className="col-md-4">
		         		Session
		         		<div className="input-group">
		         			<ComboBoxSession key={this.state.sessionId} ref="comboSession" onClose={this.comboSessionOnClose} selectedValue={this.state.sessionId} />
					     	 <span className="input-group-btn ml-2">
				         		<button className="btn btn-primary btn-sm" type="button" onClick={this.showAddSessionWindow}>Add</button>
				         		<button className="btn btn-secondary btn-sm" type="button" onClick={this.editSession}>Edit</button>
					      	 </span>
					    </div>
            		</div>
            		<div className="col-md-6">
		         		<SessionInfoBlock plInfo={this.state.plInfo} />
            		</div>
            	</div>

         		<div className="mt-2 mb-2">
     				<SessionEntryForm ref="entryForm" matchId={this.props.matchId} sessionId={this.state.sessionId} onFormSubmitted={this.onFormSubmitted} />
         		</div>

         		<div className="row">
         			<div className="col-md-10">
         				<SessionEntryGrid ref="entryGrid" sessionId={this.state.sessionId} onEditButtonClick={this.onEditButtonClick} />
         			</div>
         			<div className="col-md-2">
         				<SessionEntryWinLossGrid sessionId={this.state.sessionId} />
         			</div>
         		</div>

            </div>
        );
    }
}

export default SessionEntry;
