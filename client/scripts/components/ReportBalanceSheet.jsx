import React, { Component } from "react";
import { inject, observer } from 'mobx-react';


import ReportBalanceSheetGrid from './Report/ReportBalanceSheetGrid.jsx'
import TooltipQuestion from './controls/TooltipQuestion';

@inject('reportStore')
@observer
class ReportBalanceSheet extends Component {
	 componentDidMount() {
        this.props.reportStore.fetchAccountBalanceList()
    }



    render() {
    	const {accountBalanceList} = this.props.reportStore
        return (
            <div className="page d-inline-block mx-2">
                <h6><i className="fa fa-bar-chart"></i> Report - Balance Sheet. <TooltipQuestion content={Messages.ABOUT_REPORT_BALANCE_SHEET} /></h6>
         		<ReportBalanceSheetGrid  entriesList={accountBalanceList} />
            </div>
        );
    }
}

export default ReportBalanceSheet;
