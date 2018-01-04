import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import JqxGrid from './jqwidgets-react/react_jqxgrid.js';
import TooltipQuestion from './controls/TooltipQuestion';
import ExportHelper from '../helpers/ExportHelper'

@inject('reportStore')
@observer
class ReportPlMatchWise extends Component {
    componentDidMount() {
        this.props.reportStore.fetchPlMatchWiseList()
    }

    componentWillMount() {
        this.initDataAdapter()        
    }

    componentDidUpdate() {
        // console.log(this.props.reportStore.plMatchWiseList.slice())
        // this.source.localdata = this.props.reportStore.plMatchWiseList.slice()
        // this.dataAdapter.dataBind()
    }

    exportReport = () => {
        // this.refs.jqxgrid.exportdata('pdf', 'pl_match_wise');
        // axios.get('/exportreports/pl_matchwise', {
        // })
        ExportHelper.exportPlMatchWise()
        .then((res) => {
            window.location.href = res.data.fileDownloadUrl  
        })
    }

    initDataAdapter() {
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'match_id', type: 'string'},
                { name: 'match_name', type: 'string' },
                { name: 'comm_match', type: 'string' },
                { name: 'patti_match', type: 'string' },
                { name: 'pl_match', type: 'string' },
                { name: 'comm_session', type: 'string' },
                { name: 'patti_session', type: 'string' },
                { name: 'pl_session', type: 'string' },
                { name: 'comm_meter', type: 'string' },
                { name: 'patti_meter', type: 'string' },
                { name: 'pl_meter', type: 'string' },
                { name: 'bal', type: 'string' },

            ],

            // id: '_id',
            // url: URL_MATCHES,
            localdata: this.props.reportStore.plMatchWiseList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'MatchId', datafield: 'match_id', width: 70 },
            { text: 'Match Name', datafield: 'match_name', width: 130 },
            { text: 'Match - Comm', datafield: 'comm_match', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Match - Patti', datafield: 'patti_match', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Match - PL', datafield: 'pl_match', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Sess - Comm', datafield: 'comm_session', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Sess - Patti', datafield: 'patti_session', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Sess - PL', datafield: 'pl_session', width: 70, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Meter - Comm', datafield: 'comm_meter', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Meter - Patti', datafield: 'patti_meter', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Meter - PL', datafield: 'pl_meter', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Balance', datafield: 'bal', width: 100, cellsformat: 'd2', aggregates: ['sum']  },
        ];
    }

    render() {
        // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
        // plMatchWiseList when i call this variable then mobx will update the component otherwise not
        
        this.source.localdata = this.props.reportStore.plMatchWiseList.slice()
        this.dataAdapter.dataBind()

        return (
            <div className="w-100">
                <div className="page mx-2">
                    <h6><i className="fa fa-bar-chart"></i> Report - PL MatchWise <TooltipQuestion content={Messages.ABOUT_REPORT_PL_MATCHWISE} /></h6>
                    <div className="mb-1 text-right">
                        <button ref='pdfExport' onClick={this.exportReport} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>
                    </div>
                    <JqxGrid key={Math.random()} ref="jqxgrid" source={this.dataAdapter} columns={this.columns} 
                        width={"100%"} height={500} pagesize={100}
                        pageable={true} sortable={true} altrows={true} enabletooltips={true} 
                        editable={false}  filterable={true} showfilterrow={true} 
                        showstatusbar={true} showaggregates={true} statusbarheight={25} />
                </div>
            </div>
        );
    }
}

export default ReportPlMatchWise;
