import React, { Component } from "react";
import { inject, observer } from 'mobx-react';


import ReportBalanceSheetGrid from './Report/ReportBalanceSheetGrid.jsx'

@inject('journalEntryStore')
@observer
class ReportBalanceSheet extends Component {
	 componentDidMount() {
        this.props.journalEntryStore.fetchAccountBalanceList()
    }



    render() {
    	const {accountBalanceList} = this.props.journalEntryStore
        return (
            <div>
         		<h5>Report - Balance Sheet</h5>

         		<ReportBalanceSheetGrid  entriesList={accountBalanceList} />
            </div>
        );
    }
}

export default ReportBalanceSheet;
