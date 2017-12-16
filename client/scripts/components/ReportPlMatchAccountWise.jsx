import React, { Component } from "react";
import { render } from 'react-dom'
import { inject, observer } from 'mobx-react';
import JqxGrid from './jqwidgets-react/react_jqxgrid.js';
import ExportHelper from '../helpers/ExportHelper'

import ReportPlMatchAccountWise_MatchSummary from './Report/ReportPlMatchAccountWise_MatchSummary';

@inject('reportStore')
@observer
class ReportPlMatchAccountWise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            match_id: null,
            account_id: null,
            selected: false
        }
    }

    static defaultProps = {
        onRowSelect: function(rowdata) {},
    }


    componentWillMount() {
        this.initDataAdapter()        
    }

    componentDidMount() {
        this.props.reportStore.fetchPlMatchAccountWiseList()
        this.refs.jqxgrid.on('bindingcomplete', () => {
            this.onRowSelect()
        })
    }

    componentDidUpdate() {
        // this.source.localdata = this.props.reportStore.plMatchAccountWiseList.slice()
        // this.dataAdapter.dataBind()
    }    

    exportReport = () => {
        // this.refs.jqxgrid.exportdata('pdf', 'pl_match_wise');
        // axios.get('/exportreports/pl_match_accountwise', {
        // })
        ExportHelper.exportPlMatchAccountWise()
        .then((res) => {
            window.location.href = res.data.fileDownloadUrl  
        })
    }
    
    onRowSelect() {
        this.refs.jqxgrid.off('rowselect');
        this.refs.jqxgrid.on('rowselect', (event) => {
            var args = event.args;
            var row = args.row
            console.log(row)

            this.setState({
                match_id: row.match_id,
                account_id: row.account_id,
                selected: true
            })
            // this.props.onRowSelect(args.row)
            
        });
    }

    initDataAdapter() {
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'match_id', type: 'number'},
                { name: 'match_name', type: 'string' },
                { name: 'account_id', type: 'number' },
                { name: 'account_name', type: 'string' },                
                // { name: 'bal', type: 'number' },
                { name: 'pl_bal', type: 'number' },
                { name: 'pl_comm', type: 'number' },
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
            { text: 'P/L', datafield: 'pl_bal', width: 100 },
            { text: 'Total Comm.', datafield: 'pl_comm', width: 100 },
            // { text: 'Balance', datafield: 'bal', width: 100 },
        ];
    }

    render() {
        // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
        // plMatchWiseList when i call this variable then mobx will update the component otherwise not
        this.source.localdata = this.props.reportStore.plMatchAccountWiseList.slice()
        this.dataAdapter.dataBind()

        let initrowdetails = (index, parentElement, gridElement, record) => {
            // console.log(index, parentElement, gridElement, record)
            let grid = $($(parentElement).children()[0]);
            let grid1 = ($(parentElement).children()[0]);
            if (grid != null) {
                render(<ReportPlMatchAccountWise_MatchSummary match_id={record.match_id} account_id={record.account_id} key={Math.random()} /> , grid1);
            }
           // return 'dsfds'
        }

       let rowdetailstemplate = { rowdetails: '<div id="grid" class="grid" style="margin: 10px;"></div>', rowdetailsheight: 500 , rowdetailshidden: true };

        
        return (
            <div className="page mx-2">
                <h6><i className="fa fa-bar-chart"></i> Report - PL Match AccountWise</h6>
                <div className="mb-1 text-right">
                    <button ref='pdfExport' onClick={this.exportReport} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>
                </div>
                <JqxGrid ref="jqxgrid" source={this.dataAdapter} columns={this.columns} 
                    width={"100%"} height={500} selectionmode={'none'}
                    rowdetails={true} rowdetailstemplate={rowdetailstemplate} initrowdetails={initrowdetails}
                    pageable={true} sortable={true} altrows={true} enabletooltips={true} 
                    editable={false}  filterable={true} showfilterrow={true} />

                {/*<ReportPlMatchAccountWise_MatchSummary match_id={this.state.match_id} account_id={this.state.account_id} key={Math.random()} />    */}
            </div>
        );
    }
}

export default ReportPlMatchAccountWise;
