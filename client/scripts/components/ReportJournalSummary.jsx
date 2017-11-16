import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import JournalEntryListGrid from './Journal/JournalEntryListGrid.jsx'

@inject('reportStore')
@observer
class ReportJournalSummary extends Component {

    componentDidMount() {
        this.props.reportStore.fetchJournalSummary()
    }


    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id, this.props.match.params.id)
        // if(nextProps.match.params.account_id!==this.props.match.params.account_id) {
        //     this.props.journalEntryStore.fetchListByAccount(nextProps.match.params.account_id, this.refs.showMondayFinalChk.checked)
        //     this.props.journalEntryStore.fetchAccountBalanceObject(nextProps.match.params.account_id)
        // }
    }

    // exportToPdf = () => {
    //     this.refs.entryGrid.refs.jqxgrid.exportdata('pdf', 'journal_summary');
    // }

    render() {  
        const {journalSummaryList} = this.props.reportStore

        return (
            <div className="page mx-2">
                <h6><i className="fa fa-bar-chart"></i> Report - Journal Summary</h6>
                {/*<div className="mb-1 text-right">    
                    <button ref='pdfExport' onClick={this.exportToPdf} className="btn btn-sm btn-primary mr-1">Print</button>
                </div>*/}
                <div className="mb-2">
                    <div className="row">
                        <div className="col-md-12">
                            <JournalEntryListGrid ref="entryGrid" entriesList={journalSummaryList} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReportJournalSummary;
