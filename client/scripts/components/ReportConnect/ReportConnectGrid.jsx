import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

class ReportConnectGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        entriesList: [],
        exportReportClick: function() {}
    }

    componentDidUpdate() {
        this.dataAdapter.dataBind()
    }

    refresh = () => {
        this.dataAdapter.dataBind()
    }

    

    render() {
        // console.log(this.props.entriesList.slice())

        var datafields = [
            { name: 'account_id', type: 'string' },
            { name: 'account_name', type: 'string' },
            { name: 'bal', type: 'string' },
            { name: 'patti_amt', type: 'string' },
            { name: 'after_patti', type: 'string' },
            
            { name: 'account_id1', type: 'string' },
            { name: 'account_name1', type: 'string' },
            { name: 'bal1', type: 'string' },
            { name: 'after_patti1', type: 'string' },
            { name: 'empty', type: 'string' },
        ];

        let source = {
            datatype: 'json',
            datafields: datafields,
            // id: '_id',
            localdata: this.props.entriesList.slice(),
        };


        this.dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [

            { text: 'AccountId', datafield: 'account_id', width: 100 },
            { text: 'Account', datafield: 'account_name', width: 150 },
            { text: 'Amount', datafield: 'bal', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'With Patti', datafield: 'after_patti', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: '', datafield: 'empty', width: 200, filterable: false },
            { text: 'AccountId', datafield: 'account_id1', width: 100 },
            { text: 'Account', datafield: 'account_name1', width: 150 },
            { text: 'Amount', datafield: 'bal1', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'With Patti', datafield: 'after_patti1', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
        ];

        return (
            <div>
                <div className="mt-3 mb-1 text-left">
                    <button ref='pdfExport' onClick={this.props.exportReportClick} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>
                </div>
                <JqxGrid key={Math.random()} ref="jqxgrid" 
                        width={ "1100"} height={400} source={this.dataAdapter} 
                        pageable={false} sortable={false} altrows={false} enabletooltips={false}
                        editable={false} columns={columns} filterable={false} showfilterrow={false} columnsresize={true} 
                        showstatusbar={true} showaggregates={true} statusbarheight={25}/>
            </div>
        );
    }
}

export default ReportConnectGrid;