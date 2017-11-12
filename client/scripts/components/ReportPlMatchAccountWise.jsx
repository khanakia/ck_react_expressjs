import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

@inject('reportStore')
@observer
class ReportPlMatchAccountWise extends Component {
    componentDidMount() {
        this.props.reportStore.fetchPlMatchAccountWiseList()
    }

    componentWillMount() {
        this.initDataAdapter()        
    }

    componentDidUpdate() {
        // this.source.localdata = this.props.reportStore.plMatchAccountWiseList.slice()
        // this.dataAdapter.dataBind()
    }    

    exportReport = () => {
        // this.refs.jqxgrid.exportdata('pdf', 'pl_match_wise');
        axios.get('/exportreports/pl_match_accountwise', {
        })
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
                { name: 'account_id', type: 'string' },
                { name: 'account_name', type: 'string' },                
                { name: 'bal', type: 'string' },
            ],

            // id: '_id',
            // url: URL_MATCHES,
            localdata: this.props.reportStore.plMatchAccountWiseList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'MatchId', datafield: 'match_id', width: 100 },
            { text: 'Match Name', datafield: 'match_name', width: 150 },
            { text: 'AccountId', datafield: 'account_id', width: 100 },
            { text: 'Account Name', datafield: 'account_name', width: 150 },
            { text: 'Balance', datafield: 'bal', width: 100 },
        ];
    }

    render() {
        // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
        // plMatchWiseList when i call this variable then mobx will update the component otherwise not
        this.source.localdata = this.props.reportStore.plMatchAccountWiseList.slice()
        this.dataAdapter.dataBind()
        
        return (
            <div className="page d-inline-block mx-2">
                <h6><i className="fa fa-bar-chart"></i> Report - PL Match AccountWise</h6>
                <div className="mb-1 text-right">
                    <button ref='pdfExport' onClick={this.exportReport} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>
                </div>
                <JqxGrid key={Math.random()} ref="jqxgrid" source={this.dataAdapter} columns={this.columns} 
                    width={"600"} height={500} 
                    pageable={true} sortable={true} altrows={true} enabletooltips={true} 
                    editable={false}  filterable={true} showfilterrow={true} />
            </div>
        );
    }
}

export default ReportPlMatchAccountWise;
