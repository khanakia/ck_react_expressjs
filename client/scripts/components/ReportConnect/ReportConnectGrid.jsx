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
        this.refs.jqxgrid.on('cellendedit', (event) => {
            var args = event.args;
            console.log(args)
            if(args.datafield=='tally') {
                this.refs.jqxgrid.selectcell(args.rowindex, 'account_name')
                this.refs.jqxgrid.selectcell(args.rowindex, 'bal')
                this.refs.jqxgrid.selectcell(args.rowindex, 'after_patti')
                
            }

            if(args.datafield=='tally1') {
                this.refs.jqxgrid.selectcell(args.rowindex, 'account_name1')
                this.refs.jqxgrid.selectcell(args.rowindex, 'bal1')
                this.refs.jqxgrid.selectcell(args.rowindex, 'after_patti1')
            }

            console.log(args.value)
        });
    }

    refresh = () => {
        this.dataAdapter.dataBind()
    }


    componentDidMount() {
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
            { name: 'patti_amt', type: 'string' },
            { name: 'after_patti', type: 'string' },
            
            { name: 'account_id1', type: 'string' },
            { name: 'account_name1', type: 'string' },
            { name: 'bal1', type: 'string' },
            { name: 'after_patti1', type: 'string' },
            { name: 'empty', type: 'string' },
            { name: 'tally', type: 'boolean' },
            { name: 'tally1', type: 'boolean' },
        ];

        let source = {
            datatype: 'json',
            datafields: datafields,
            // id: '_id',
            localdata: this.props.entriesList.slice(),
        };


        this.dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [

  
            { text: 'Tally', datafield: 'tally', width: 50, columntype: 'checkbox', editable: true  },
            // { text: 'AccountId', datafield: 'account_id', width: 100 },
            { text: 'Account', datafield: 'account_name', width: 150, editable:false },
            { text: 'Amount', datafield: 'bal', width: 100, editable:false, cellclassname: this.cellclass, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'With Patti', datafield: 'after_patti', width: 100, editable:false, cellclassname: this.cellclass, cellsformat: 'd2', aggregates: ['sum'] },
            { text: '', datafield: 'empty', width: 50, editable:false, filterable: false, cellclassname: () => { return 'emptyseparator'; } },
            // { text: 'AccountId', datafield: 'account_id1', width: 100 },
            { text: 'Tally', datafield: 'tally1', width: 50, columntype: 'checkbox', editable: true  },
            { text: 'Account', datafield: 'account_name1', width: 150, editable:false },
            { text: 'Amount', datafield: 'bal1', width: 100, editable:false, cellclassname: this.cellclass, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'With Patti', datafield: 'after_patti1', width: 100, editable:false, cellclassname: this.cellclass, cellsformat: 'd2', aggregates: ['sum'] },
        ];

        return (
            <div>
                <div className="mt-3 mb-1 text-left">
                    <button ref='pdfExport' onClick={this.props.exportReportClick} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>
                </div>
                <JqxGrid key={Math.random()} ref="jqxgrid" 
                        width={ "900"} height={400} source={this.dataAdapter} 
                        pageable={false} sortable={false} altrows={false} enabletooltips={false} selectionmode={'multiplecells'}
                        editable={true} columns={columns} filterable={false} showfilterrow={false} columnsresize={true} 
                        showstatusbar={true} showaggregates={true} statusbarheight={25}/>
            </div>
        );
    }
}

export default ReportConnectGrid;