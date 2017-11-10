import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import AllMatchGrid from './ReportConnect/AllMatchGrid'
import ReportConnectGrid from './ReportConnect/ReportConnectGrid'

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

    render() {
        // const {matchList} = this.props.matchStore
        // const {sessionList} = this.props.sessionStore
        const {connectListMatches, connectReportList} = this.props.reportStore

        return (
            <div>
         		<h5>Report - Connect</h5>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-sm btn-primary" onClick={this.connectReport}>Connect</button>
                        <AllMatchGrid ref="allMatchGrid" entriesList={connectListMatches}  />
                    </div>
                    <div className="col-md-6">
                        <ReportConnectGrid entriesList={connectReportList} />
                    </div>

                </div>
            </div>
        );
    }
}

export default ReportConnect;
