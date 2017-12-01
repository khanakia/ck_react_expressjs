import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import ExportHelper from '../../helpers/ExportHelper'

class ReportBalanceSheetGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        entriesList: [],
    }

    componentDidUpdate() {
        this.dataAdapter.dataBind()
    }

    refresh = () => {
        this.dataAdapter.dataBind()
    }

    exportReport = () => {
        // this.refs.jqxgrid.exportdata('pdf', 'balance_sheet');
        
        // axios.get('/exportreports/balance_sheet', {
        // })
        ExportHelper.exportBalanceSheet()
        .then((res) => {
            window.location.href = res.data.fileDownloadUrl  
        })
    
    }

    cellclass(row, columnfield, value) {
        if (value < 0) {
            return 'red';
        }

        else return 'green';
    }

    render() {
        // console.log(this.props.entriesList.slice())

        var datafields = [
            { name: 'account_id', type: 'string' },
            { name: 'account_name', type: 'string' },
            { name: 'bal', type: 'string' },
            { name: 'account_id1', type: 'string' },
            { name: 'account_name1', type: 'string' },
            { name: 'bal1', type: 'string' },
            { name: 'empty', type: 'string' },
        ];

        let source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            localdata: this.props.entriesList.slice(),
        };


        this.dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [

            // { text: 'AccountId', datafield: 'account_id', width: 100 },
            { text: 'Account', datafield: 'account_name', width: 150 },
            { text: 'Balance', datafield: 'bal', width: 100, cellclassname: this.cellclass, cellsformat: 'd2', aggregates: ['sum'] },
            { text: '', datafield: 'empty', width: 50, filterable: false, cellclassname: () => { return 'emptyseparator'; } },
            // { text: 'AccountId', datafield: 'account_id1', width: 100 },
            { text: 'Account', datafield: 'account_name1', width: 150 },
            { text: 'Balance', datafield: 'bal1', width: 100, cellclassname: this.cellclass, cellsformat: 'd2', aggregates: ['sum'] }
        ];

        return (
            <div>
                <div className="mb-1 text-right">
                    <button ref='pdfExport' onClick={this.exportReport} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>
                </div>
                <JqxGrid key={Math.random()} ref="jqxgrid" 
                        width={ "600"} height={400} source={this.dataAdapter} 
                        pageable={false} sortable={false} altrows={false} enabletooltips={false}
                        editable={false} columns={columns} filterable={false} showfilterrow={false} columnsresize={true} 
                        showstatusbar={true} showaggregates={true} statusbarheight={25}/>
            </div>
        );
    }
}

export default ReportBalanceSheetGrid;