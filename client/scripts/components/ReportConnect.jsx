import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import { APP_ROOT_HOST } from "../Constant"

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


    exportConnectReport = (cb) => {
        var filters = this.refs.allMatchGrid.getSelectedRowsData()

        ExportHelper.exportConnectReport(filters)
        .then((res) => {
            if (typeof cb === "function") {
                cb();
            }
            // window.location.href = res.data.fileDownloadUrl  
        })

    }

    printReport = () => {
        this.exportConnectReport(() => {
            var win = new electron.remote.BrowserWindow({
                    show:true
                })

            win.loadURL(APP_ROOT_HOST + "/temp/report.html")
            win.webContents.on('did-finish-load', () => {
                win.webContents.print({silent: true}, function(error, data) {  
                })
            })
        })
    }


    render() {
        // const {matchList} = this.props.matchStore
        // const {sessionList} = this.props.sessionStore
        const {connectListMatches, connectReportList} = this.props.reportStore

        return (
            <div className="page mx-2">
                <h6><i className="fa fa-bar-chart"></i> Report - Connect <TooltipQuestion content={Messages.ABOUT_REPORT_CONNECT} /></h6>
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-sm btn-primary mb-1" onClick={this.connectReport}>Connect</button>
                        <AllMatchGrid ref="allMatchGrid" entriesList={connectListMatches} connectReportFn={this.connectReport} />
                    </div>
                    <div className="col-md-8">
                        <ReportConnectGrid entriesList={connectReportList} exportReportClick={this.exportConnectReport} printReportFn={this.printReport}  />
                    </div>

                </div>
            </div>
        );
    }
}

export default ReportConnect;
