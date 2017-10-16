import React, { Component } from "react";
import { inject, observer } from 'mobx-react';


import ComboBoxMember from './controls/ComboBoxMember.jsx'
import JournalEntryForm from './Journal/JournalEntryForm.jsx'
import JournalEntryGrid from './Journal/JournalEntryGrid.jsx'
import JournalEntryHelper from "helpers/JournalEntryHelper"


@inject('journalEntryStore')
@observer
class Journal extends Component {

    onCloseComboMember = () => {
        const accountId = (this.refs.comboMember.getSelectedValue())
        // console.log(accountId)
        this.props.history.push("/journals/account/" + accountId)       
    }

    componentDidMount() {
        this.refs.comboMember.setSelectedValue(this.props.match.params.account_id)
        this.props.journalEntryStore.fetchListByAccount(this.props.match.params.account_id, this.refs.showMondayFinalChk.checked)
        this.props.journalEntryStore.fetchAccountBalanceObject(this.props.match.params.account_id)
    }


    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id, this.props.match.params.id)
        if(nextProps.match.params.account_id!==this.props.match.params.account_id) {
            this.props.journalEntryStore.fetchListByAccount(nextProps.match.params.account_id, this.refs.showMondayFinalChk.checked)
            this.props.journalEntryStore.fetchAccountBalanceObject(nextProps.match.params.account_id)
        }
    }


    onFormSubmitted = () => {
        console.log("FORM SUBMITTED")
        this.refs.entryGrid.refresh()
    }

    mondayFinal = () => {
        axios({
            method: 'post',
            url: "/journal_entries/monday_final"
        }).then((res)=>{

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

    render() {  
        const account_id = this.props.match.params.account_id
        const {journalEntriesList, selectedAccMonFinalBal, selectedAccBal} = this.props.journalEntryStore

        return (
            <div>
                <h3>Journal</h3>
                <div className="mb-2">
                    <div className="row">
                        <div className="col-md-6">
                                Select Account: <ComboBoxMember 
                                    field_id="from_account_id" ref="comboMember" onClose={this.onCloseComboMember}  />

                                    <label>Opening Bal: <strong>{selectedAccMonFinalBal}</strong></label>
                                    <label className="ml-2">Bal: <strong>{selectedAccBal}</strong></label>
                        </div>
                        <div className="col-md-6 text-right">
                            <button className="btn btn-primary btn-sm" onClick={this.mondayFinal}>Monday Final</button>
                            <br />
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" ref="showMondayFinalChk" defaultChecked={false} onChange={this.onShowMondayFinalChange} /> Show Monday Final
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
                                onEditButtonClick={this.onEditButtonClick} 
                                entriesList={journalEntriesList} />
                    </div>
                    : ''
                }
                
            </div>
        );
    }
}

export default Journal;
