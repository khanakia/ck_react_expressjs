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

    componentWillMount() {

        // Check if different Match is Selected then clear the sessionId to prevent show wrong Session Data under Wrong Match ID
        const matchId = this.props.matchId
        const storedMatchId = localStorage.getItem('matchId')
        // console.log(storedMatchId)
        if(storedMatchId!==matchId) {
            localStorage.removeItem('sessionId')
            this.props.globalStore.selectedSessionId = null
        }
    }

    componentDidMount() {
    	this.props.matchStore.fetchTeams(this.props.matchId)
    	this.props.sessionStore.fetchList(this.props.matchId)
    	if(this.props.globalStore.selectedSessionId) {
    		this.fetch(this.props.globalStore.selectedSessionId)
    	} else {            
            this.props.sessionEntryStore.clearAll()
        }


        this.initMouseTrap()
	}

    initMouseTrap = () => {
        var mtrap = new  Mousetrap()
        mtrap.stopCallback = function(e, element, combo) {
            return false;
        }

        mtrap.bind('alt+s a', () => { 
            this.showAddSessionWindow()
        });

        mtrap.bind('alt+s d', () => { 
            this.openDeclareWindow()
        });

        mtrap.bind('alt+s u', () => { 
            this.sessionUndeclare()
        });
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

	onSessionFormSubmitted = (response) => {
		// this.refs.sessionGrid.refresh()
        this.props.globalStore.setSessionId(response._id)
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
        var _this = this
        $.confirm({
            title: '',
            content: '' +
            '<form action="" class="formName">' +
            '<div class="form-group">' +
            '<label>Enter Declared Runs</label>' +
            '<input type="text" placeholder="Enter Runs" class="declared_runs form-control" required />' +
            '</div>' +
            '</form>',
            buttons: {
                formSubmit: {
                    text: 'Submit',
                    btnClass: 'btn-blue',
                    action: function() {
                        var declared_runs = this.$content.find('.declared_runs').val();
                        if(!declared_runs){
                            toastr.error('Please enter runs;')
                            return false;
                        }

                        _this.declare(declared_runs)
                        
                    }
                },
                cancel: function () {
                    //close
                },
            },
            onContentReady: function () {
                // bind to events
                var jc = this;
                this.$content.find('form').on('submit', function (e) {
                    // if the user submits the form by pressing enter in the field.
                    e.preventDefault();
                    jc.$$formSubmit.trigger('click'); // reference the button and click it
                });
            }
        });
   //  	var rowdata = this.refs.sessionGrid.getSelectedRowData()
   //  	console.log(rowdata)
   //      var declared_runs = prompt("Enter Declared Runs");
        
   //      if(declared_runs>=0) {
			// axios({
			// 	method: 'post',
   //              headers: Auth.header(),
			// 	url: "/sessions/declare/"+rowdata._id,
			// 	data: {
			// 		declared_runs: declared_runs
			// 	}
			// }).then((res) => {
			// 	// this.refs.sessionGrid.refresh()
			// 	this.props.sessionStore.fetchList(this.props.matchId)
			// 	if(this.props.globalStore.selectedSessionId) {
		 //    		this.fetch(this.props.globalStore.selectedSessionId)
		 //    	}
			// })
   //      }
    }

    declare = (runs) => {
        var rowdata = this.refs.sessionGrid.getSelectedRowData()
        if(runs>=0) {
            axios({
             method: 'post',
                headers: Auth.header(),
             url: "/sessions/declare/"+rowdata._id,
             data: {
                 declared_runs: runs
             }
            }).then((res) => {
             // this.refs.sessionGrid.refresh()
             this.props.sessionStore.fetchList(this.props.matchId)
             if(this.props.globalStore.selectedSessionId) {
                 this.fetch(this.props.globalStore.selectedSessionId)
             }
            })
            .catch((err) => {
                toastr.error(err.response.data.message)
            })
        }
    }

    sessionUndeclare = () => {
    	var rowdata = this.refs.sessionGrid.getSelectedRowData()
    	var r = confirm("Are you sure to Undeclare ?", ' ');
        if (r == true) {
           axios({
				method: 'post',
                headers: Auth.header(),
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
            		<div className="col-md-12">
		         		<SessionInfoBlock plInfo={sessionPlInfo} />
            		</div>
            	</div>
            	<div className="row mt-2 mb-2">
         			<div className="col-md-12">
     					<SessionEntryForm ref="entryForm" matchId={this.props.matchId} 
     								sessionId={selectedSessionId} sessionList={sessionList}
     								onFormSubmitted={this.sessionEntry_onFormSubmitted} 
     								comboSessionOnClose={this.comboSessionOnClose} />
         			</div>
				</div>         			
         		<div className="row sessionGridsRow">
         			<div className="acol acol1">
         				<SessionEntryGrid ref="entryGrid" entriesList={sessionEntriesList}
         						onEditButtonClick={this.entryGrid_onEditButtonClick} onDataUpdate={this.entryGrid_onDataUpdate} />
         			</div>
         			<div className="acol acol2">
         				<SessionEntryWinLossGrid ref="winlossGrid" entriesList={sessionWinLossList} lastEnteredRun={lastEnteredRun} />
         			</div>
         			
         			<div className="acol acol3">
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
