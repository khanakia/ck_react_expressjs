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
			sessionId: null
		}
	}
	static defaultProps = {
        matchId : null
    }

    componentDidMount() {

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
		this.refs.comboSession.rebind()
	}

	

	comboSessionOnClose = () => {
		const sessionId = (this.refs.comboSession.getSelectedValue())
		this.setState({
			sessionId: sessionId
		})
	}
    render() {
    	console.log(this.state)

        return (
            <div>

            	<div className="row info-heading-block">
            		<div className="col-md-3">
		         		Session
		         		<ComboBoxSession ref="comboSession" onClose={this.comboSessionOnClose} />
		         		<button onClick={this.showAddSessionWindow}>Add Session</button>
		         		<button onClick={this.editSession}>Edit Session</button>
            		</div>
            		<div className="col-md-6">
		         		<SessionInfoBlock />
            		</div>
            	</div>


         		

         		<div className="mt-2 mb-1">
     				<SessionEntryForm matchId={this.props.matchId} sessionId={this.state.sessionId} />
         		</div>

         		<div className="row">
         			<div className="col-md-10">
         				<SessionEntryGrid sessionId={this.state.sessionId} />
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
