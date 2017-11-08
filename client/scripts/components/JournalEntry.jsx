import React, { Component } from "react";
import { inject, observer } from 'mobx-react';


import ComboBoxMember from './controls/ComboBoxMember.jsx'
import JournalEntryForm from './JournalEntry/JournalEntryForm.jsx'
import JournalEntryGrid from './JournalEntry/JournalEntryGrid.jsx'
import JournalEntryHelper from "helpers/JournalEntryHelper"


@inject('journalEntryStore')
@observer
class JournalEntry extends Component {

    onCloseComboMember = () => {
        const accountId = (this.refs.comboMember.getSelectedValue())
        // console.log(accountId)
        this.props.history.push("/journal_entries/account/" + accountId)       
    }

    componentDidMount() {
        if(this.props.match.params.account_id) {
            this.refs.comboMember.setSelectedValue(this.props.match.params.account_id)
            // this.props.journalEntryStore.fetchListByAccount(this.props.match.params.account_id, this.refs.showMondayFinalChk.checked)
            // this.props.journalEntryStore.fetchAccountBalanceObject(this.props.match.params.account_id)
            this.fetch()
        }
    }


    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id, this.props.match.params.id)
        if(nextProps.match.params.account_id!==this.props.match.params.account_id) {
            this.props.journalEntryStore.fetchListByAccount(nextProps.match.params.account_id, this.refs.showMondayFinalChk.checked)
            this.props.journalEntryStore.fetchAccountBalanceObject(nextProps.match.params.account_id)
        }
    }

    fetch = () => {
        this.props.journalEntryStore.fetchListByAccount(this.props.match.params.account_id, this.refs.showMondayFinalChk.checked)
        this.props.journalEntryStore.fetchAccountBalanceObject(this.props.match.params.account_id)
    }

    onFormSubmitted = () => {
        // this.props.journalEntryStore.fetchListByAccount(this.props.match.params.account_id, this.refs.showMondayFinalChk.checked)
        // this.props.journalEntryStore.fetchAccountBalanceObject(this.props.match.params.account_id)
        this.fetch()
        
    }

    mondayFinal = () => {
        axios({
            method: 'post',
            url: "/journal_entries/monday_final"
        }).then((res) => {
            this.fetch()
        })
    }

    onShowMondayFinalChange = (e) => {
        // console.log(e.target.checked)
        var show = false;
        if(e.target.checked) {
            show = true;
        }
        this.props.journalEntryStore.fetchListByAccount(this.props.match.params.account_id, show)
    }

    entryGrid_onDataUpdate = () => {
        // this.props.journalEntryStore.fetchListByAccount(this.props.match.params.account_id, this.refs.showMondayFinalChk.checked)
        // this.props.journalEntryStore.fetchAccountBalanceObject(this.props.match.params.account_id)
        this.fetch()
    }


    exportToPdf = () => {
        this.refs.entryGrid.refs.jqxgrid.exportdata('pdf', 'journal');
    }

    render() {  
        const account_id = this.props.match.params.account_id
        const {journalEntriesList, selectedAccMonFinalBal, selectedAccBal} = this.props.journalEntryStore

        return (
            <div>
                <h5>Journal Entry</h5>
                <div className="mb-2">
                    <div className="row">
                        <div className="col-md-6">
                                Select Account: <ComboBoxMember 
                                    field_id="from_account_id" ref="comboMember" onClose={this.onCloseComboMember}  />

                                    <label>Opening Bal: <strong>{selectedAccMonFinalBal}</strong></label>
                                    <label className="ml-2">Bal: <strong>{selectedAccBal}</strong></label>
                        </div>
                        <div className="col-md-6 text-right">
                            { account_id ?
                            <button ref='pdfExport' onClick={this.exportToPdf} className="btn btn-sm btn-primary mr-1">Print</button>
                            : '' }
                            <button className="btn btn-primary btn-sm" onClick={this.mondayFinal}>Monday Final</button>
                            <br />
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" ref="showMondayFinalChk" defaultChecked={false} 
                                        onChange={this.onShowMondayFinalChange} /> Show Monday Final
                            </label>
                        </div>
                    </div>
                </div>

                { account_id ?
                    <div>
                        <div className="mt-3 mb-1">
                            <JournalEntryForm accountId={account_id} onFormSubmitted={this.onFormSubmitted} />
                        </div>    
                        <JournalEntryGrid ref="entryGrid"
                                onDataUpdate={this.entryGrid_onDataUpdate}
                                onEditButtonClick={this.onEditButtonClick} 
                                entriesList={journalEntriesList} />
                    </div>
                    : ''
                }
                
            </div>
        );
    }
}

export default JournalEntry;
