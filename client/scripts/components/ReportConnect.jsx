import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import AllMatchGrid from './ReportConnect/AllMatchGrid'
import ReportConnectGrid from './ReportConnect/ReportConnectGrid'
import TooltipQuestion from './controls/TooltipQuestion';
import ExportHelper from '../helpers/ExportHelper'

@inject('reportStore')
@inject('sessionStore')
@inject('matchStore')
@observer
class ReportConnect extends Component {
	 componentDidMount() {
        // this.props.matchStore.fetchList()
        // this.props.sessionStore.fetchList()
        this.props.reportStore.fetchConnectListMatches()
        this.props.reportStore.fetchConnectReportList()
        
    }

    connectReport = () => {
        var items = this.refs.allMatchGrid.getSelectedRowsData()
        // console.table(items)
        this.props.reportStore.fetchConnectReportList(items)

    }


    exportConnectReport = () => {
        // this.refs.jqxgrid.exportdata('pdf', 'balance_sheet');

        var filters = this.refs.allMatchGrid.getSelectedRowsData()

        // axios({
        // method: 'post',
        //   url: "/exportreports/connect_report",
        //   data: filters
        // })
        ExportHelper.exportConnectReport(filters)
        .then((res) => {
            window.location.href = res.data.fileDownloadUrl  
        })

    }

    render() {
        // const {matchList} = this.props.matchStore
        // const {sessionList} = this.props.sessionStore
        const {connectListMatches, connectReportList} = this.props.reportStore

        return (
            <div className="page mx-2">
                <h6><i className="fa fa-bar-chart"></i> Report - Connect <TooltipQuestion content={Messages.ABOUT_REPORT_CONNECT} /></h6>
                <div className="">
                    <div className="">
                        <button className="btn btn-sm btn-primary" onClick={this.connectReport}>Connect</button>
                        <AllMatchGrid ref="allMatchGrid" entriesList={connectListMatches}  />
                    </div>
                    <div className="">
                        <ReportConnectGrid entriesList={connectReportList} exportReportClick={this.exportConnectReport} />
                    </div>

                </div>
            </div>
        );
    }
}

export default ReportConnect;
