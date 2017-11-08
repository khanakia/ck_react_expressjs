import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

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

    exportToPdf = () => {
        this.refs.jqxgrid.exportdata('pdf', 'balance_sheet');
    }

    render() {
        console.log(this.props.entriesList.slice())

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

            { text: 'AccountId', datafield: 'account_id', width: 100 },
            { text: 'Account', datafield: 'account_name', width: 150 },
            { text: 'Balance', datafield: 'bal', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: '', datafield: 'empty', width: 200, filterable: false },
            { text: 'AccountId', datafield: 'account_id1', width: 100 },
            { text: 'Account', datafield: 'account_name1', width: 150 },
            { text: 'Balance', datafield: 'bal1', width: 100, cellsformat: 'd2', aggregates: ['sum'] }
        ];

        return (
            <div>
                <div className="mb-1 text-right">
                    <button ref='pdfExport' onClick={this.exportToPdf} className="btn btn-sm btn-primary mr-1">Print</button>
                </div>
                <JqxGrid key={Math.random()} ref="jqxgrid" 
                        width={ "100%"} height={400} source={this.dataAdapter} 
                        pageable={false} sortable={false} altrows={false} enabletooltips={false}
                        editable={false} columns={columns} filterable={false} showfilterrow={false} columnsresize={true} 
                        showstatusbar={true} showaggregates={true} statusbarheight={25}/>
            </div>
        );
    }
}

export default ReportBalanceSheetGrid;