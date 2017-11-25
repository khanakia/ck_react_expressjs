import React, { Component } from "react";
import { render } from 'react-dom'
import { inject, observer } from 'mobx-react';

import MeterInfoBlock from './MeterEntry/MeterInfoBlock'
import MeterEntryWinLossGrid from './MeterEntry/MeterEntryWinLossGrid'
import MeterEntryGrid from './MeterEntry/MeterEntryGrid'
import MeterEntryForm from './MeterEntry/MeterEntryForm'
import MeterGrid from './Meter/MeterGrid'
import MeterForm from './Meter/MeterForm'

@inject('globalStore')
@inject('matchStore')
@inject('meterStore')
@inject('meterEntryStore')
@observer
class MeterEntry extends Component {
	constructor(props) {
		super(props)
	}

	static defaultProps = {
        matchId : null,
        meterId: null
    }

    componentWillMount() {        
        const matchId = this.props.matchId
        const storedMatchId = localStorage.getItem('matchId')
        // console.log(storedMatchId)
        if(storedMatchId!==matchId) {
            localStorage.removeItem('meterId')
            this.props.globalStore.selectedMeterId = null
        }
    }

    componentDidMount() {
    	this.props.matchStore.fetchTeams(this.props.matchId)
    	this.props.meterStore.fetchList(this.props.matchId)
    	if(this.props.globalStore.selectedMeterId) {
    		this.fetch(this.props.globalStore.selectedMeterId)
    	} else {            
            this.props.meterEntryStore.clearAll()
        }
	}

    fetch = (meterId) => {
    	this.props.meterEntryStore.fetchAll(meterId)
    }

	//// Meters Functions =======================================
	openMeterForm(id=null){
		const {teamsList} = this.props.matchStore
		let mainDemoContainer = document.getElementById('footerContainer');
        let widgetContainer = document.createElement('div');
        mainDemoContainer.appendChild(widgetContainer);
        render(<MeterForm onFormSubmitted={this.onMeterFormSubmitted} matchId={this.props.matchId} id={id} teamsList={teamsList} />, widgetContainer);
	}

	showAddMeterWindow =() => {
		this.openMeterForm()
	}

	editMeter =() => {
		const id = this.refs.comboMeter.getSelectedValue()
		this.openMeterForm(id)
	}

	onMeterFormSubmitted = () => {
		this.props.meterStore.fetchList(this.props.matchId)
	}

	meterGrid_onRowSelect = (rowdata) => {		
		this.props.globalStore.setMeterId(rowdata._id)
		this.fetch(rowdata._id)
	}

	meterGrid_onEdit= (rowdata) => {
		this.openMeterForm(rowdata._id)
	}

	meterGrid_onDataUpdate = () => {
		this.props.meterStore.fetchList(this.props.matchId)
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
    }

    declare = (runs) => {
        var rowdata = this.refs.meterGrid.getSelectedRowData()
        // console.log(rowdata)
        // var runs = prompt("Enter Declared Runs");
        if(runs>=0) {
            axios({
                method: 'post',
                headers: Auth.header(),
                url: "/meters/declare/"+rowdata._id,
                data: {
                    declared_runs: runs
                }
            }).then((res) => {
                this.props.meterStore.fetchList(this.props.matchId)
                if(this.props.globalStore.selectedMeterId) {
                    this.fetch(this.props.globalStore.selectedMeterId)
                }
            })
            .catch((err) => {
                toastr.error(err.response.data.message)
            })
        }
    }

    meterUndeclare = () => {
    	var rowdata = this.refs.meterGrid.getSelectedRowData()
    	var r = confirm("Are you sure to Undeclare ?", ' ');
        if (r == true) {
           axios({
				method: 'post',
                headers: Auth.header(),
				url: "/meters/undeclare/"+rowdata._id
			}).then((res) => {
				// this.refs.meterGrid.refresh()
				this.props.meterStore.fetchList(this.props.matchId)
				if(this.props.globalStore.selectedMeterId) {
		    		this.fetch(this.props.globalStore.selectedMeterId)
		    	}
			}).catch((err)=> {
                toastr.error(err.response.data.message)
            })
        }
    }

    //// Meter ENTRY FUNCTIONS ========================================================
    comboMeterOnClose = (e) => {
		const meterId = (this.refs.entryForm.refs.comboMeter.getSelectedValue())

		this.props.globalStore.setMeterId(meterId)
		this.fetch(meterId)
		this.refs.meterGrid.selectRowByMeterId(meterId)
	}
	meterEntry_onFormSubmitted = (response) => {
		this.refs.entryForm.resetForm()
		this.fetch(response.meter_id)

		this.props.meterEntryStore.lastEnteredRun = response.runs
	}

	entryGrid_onEditButtonClick = (data) => {
		this.refs.entryForm.edit(data)
	}

	entryGrid_onDataUpdate =() => {
		this.fetch(this.props.globalStore.selectedMeterId)
	}

    render() {
    	
    	const {selectedMeterId} = this.props.globalStore
    	const {meterList} = this.props.meterStore
    	const {meterEntriesList, meterPlInfo, meterWinLossList, lastEnteredRun} = this.props.meterEntryStore

    	// console.log(selectedMeterId)

        return (
            <div>
            	<div className="row info-heading-block">
            		<div className="col-md-12">
		         		<MeterInfoBlock plInfo={meterPlInfo} />
            		</div>
            	</div>
            	<div className="row mt-2 mb-2">
         			<div className="col-md-12">
     					<MeterEntryForm ref="entryForm" matchId={this.props.matchId} 
     								meterId={selectedMeterId} meterList={meterList}
     								onFormSubmitted={this.meterEntry_onFormSubmitted} 
     								comboMeterOnClose={this.comboMeterOnClose} />
         			</div>
				</div>         			
         		<div className="row sessionGridsRow">
         			<div className="acol acol1">
         				<MeterEntryGrid ref="entryGrid" entriesList={meterEntriesList}
         						onEditButtonClick={this.entryGrid_onEditButtonClick} onDataUpdate={this.entryGrid_onDataUpdate} />
         			</div>
         			<div className="acol acol2">
         				{<MeterEntryWinLossGrid ref="winlossGrid" entriesList={meterWinLossList} lastEnteredRun={lastEnteredRun} />}
         			</div>
         			
         			<div className="acol acol3">
         				<button className="btn btn-primary btn-sm mr-2" type="button" onClick={this.showAddMeterWindow}>Add</button>
         				<button className="btn btn-primary btn-sm mr-2" onClick={this.openDeclareWindow}>Declare</button>
         				<button className="btn btn-primary btn-sm" onClick={this.meterUndeclare}>Un Declare</button>
         				<div className="mt-2 mb-2">
	         				<MeterGrid ref="meterGrid" entriesList={meterList} sessionId={selectedMeterId}
	         							 onRowSelect={this.meterGrid_onRowSelect} onEditButtonClick={this.meterGrid_onEdit} onDataUpdate={this.meterGrid_onDataUpdate} />
         				</div>
         				
         			</div>
         		</div>

            </div>
        );
    }
}

export default MeterEntry;
