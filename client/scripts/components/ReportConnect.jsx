import React, { Component } from "react";
import { inject, observer } from 'mobx-react';


import ReportConnectGrid from './ReportConnect/ReportConnectGrid.jsx'

@inject('journalEntryStore')
@observer
class ReportConnect extends Component {
	 componentDidMount() {
        this.props.journalEntryStore.fetchAccountBalanceList()
    }



    render() {
    	const {accountBalanceList} = this.props.journalEntryStore
        return (
            <div>
         		<h5>ReportConnect</h5>

         		<ReportConnectGrid  entriesList={accountBalanceList} />
            </div>
        );
    }
}

export default ReportConnect;
