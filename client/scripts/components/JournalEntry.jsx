import React, { Component } from "react";
import { inject, observer } from 'mobx-react';


import ComboBoxMember from './controls/ComboBoxMember.jsx'
import JournalEntryForm from './JournalEntry/JournalEntryForm.jsx'
import JournalEntryGrid from './JournalEntry/JournalEntryGrid.jsx'
import JournalEntryHelper from "helpers/JournalEntryHelper"
import TooltipQuestion from './controls/TooltipQuestion';


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


        axios.get("/others/create_book_account")


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


    exportReport = () => {
        // this.refs.entryGrid.refs.jqxgrid.exportdata('pdf', 'journal');
        // var filters = this.refs.allMatchGrid.getSelectedRowsData()

        axios({
        method: 'post',
          url: "/exportreports/journal_entries",
          data: {
            account_id: this.props.match.params.account_id,
            is_monday_final : this.refs.showMondayFinalChk.checked
          }
        })
        .then((res) => {
            window.location.href = res.data.fileDownloadUrl  
        })
    }

    render() {  
        const account_id = this.props.match.params.account_id
        const {journalEntriesList, selectedAccMonFinalBal, selectedAccBal, selectedAccCurrentBal} = this.props.journalEntryStore

        console.log(Messages.JENTRY_GT_PROFIT)
        var message = selectedAccBal > 0 ? Messages.JENTRY_GT_PROFIT : Messages.JENTRY_GT_LOSS
        message = selectedAccBal==0 ? null : message
        // console.log(message)
        return (
            <div className="page mx-2">
                <div className="row info-heading-block">
                    <div className="col-auto">
                        <label>Opening Balance: </label>
                        {selectedAccMonFinalBal}
                    </div>
                    <div className="col-auto">
                        <label>Current Balance: </label>
                        {selectedAccCurrentBal}
                    </div>
                    <div className="col-auto">
                        <label>Grand Total: </label>
                        <span className="d-inline-block">{selectedAccBal}</span>
                        <span className="ml-3 d-inline-block">{message}</span>
                    </div>
                </div>
                <h6><i className="fa fa-book"></i> Journal Entry</h6>
                <div className="mb-2">
                    <div className="row">
                        <div className="col-md-6">
                                Select Account: <ComboBoxMember 
                                    field_id="from_account_id" ref="comboMember" onClose={this.onCloseComboMember} />
                        </div>
                        <div className="col-md-6 text-right">
                            { account_id ?
                            <button ref='pdfExport' onClick={this.exportReport} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>
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
