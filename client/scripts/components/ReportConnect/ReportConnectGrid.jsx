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
            // console.log(args)
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

            // console.log(args.value)
        });

        var bal = (this.refs.jqxgrid.getcolumnaggregateddata('after_patti', ['sum']))
        var bal1 = (this.refs.jqxgrid.getcolumnaggregateddata('after_patti1', ['sum']))

        bal = (typeof bal.sum == "undefined") ? 0 : bal.sum
        bal1 = (typeof bal1.sum == "undefined") ? 0 : bal1.sum
        // console.log(bal)
        var gtotal = bal + bal1
        this.refs.total_profit.innerHTML = parseFloat(bal).toFixed(2)
        this.refs.total_loss.innerHTML = parseFloat(bal1).toFixed(2)
        this.refs.grand_total.innerHTML = parseFloat(gtotal).toFixed(2)
    }

    refresh = () => {
        this.dataAdapter.dataBind()
    }


    componentDidMount() {
        // console.log('MOUNTEDF')
        // this.refs.jqxgrid.on('bindingcomplete', () => {
        //     console.log('bindingcomplete')
        // })
    }




    cellclass(row, columnfield, value) {
        if (value < 0) {
            return 'red';
        }

        if (value > 0) {
            return 'green';
        }

        return null;
    }

    // printReport = () => {
    //     var gridContent = this.refs.jqxgrid.exportdata('html');

    //     var win = new electron.remote.BrowserWindow({
    //             show:false 
    //         })

    //     win.loadURL("data:text/html;charset=utf-8," + encodeURI(gridContent))
    //     win.webContents.on('did-finish-load', () => {
    //         win.webContents.print({silent: true}, function(error, data) {  
    //         })
    //     })

    // }

    render() {
        // console.log(this.props.entriesList.slice())
        var _this = this
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


        this.dataAdapter = new $.jqx.dataAdapter(source, {
            loadComplete: () => {
                // console.log(_this.refs.jqxgrid.getcolumnaggregateddata('bal', ['sum']))
            }
        });

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
            { text: 'With Patti', datafield: 'after_patti1', width: 100, editable:false, cellclassname: this.cellclass, cellsformat: 'd2', aggregates: ['sum']},
        ];

        return (
            <div>
                <div className="mt-3 mb-1 text-left">
                    {/*<button ref='pdfExport' onClick={this.props.exportReportClick} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>*/}
                    <button ref='printBtn' onClick={this.props.printReportFn} className="btn btn-sm btn-primary mr-1"><i className="fa fa-print"></i> Print</button>
                </div>
                <div className="row mx-w-900px">
                    <div className="col-md-12">
                        <JqxGrid key={Math.random()} ref="jqxgrid" 
                                width={ "100%"} height={500} source={this.dataAdapter} 
                                pageable={false} sortable={false} altrows={false} enabletooltips={false}
                                editable={true} columns={columns} filterable={false} showfilterrow={false} columnsresize={true} 
                                showstatusbar={true} showaggregates={true} statusbarheight={25}/>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label>Total Profit: <span ref="total_profit">0</span></label>
                            </div>
                            <div className="col-md-4 text-center">
                                <label>Grand Total: <span ref="grand_total">0</span></label>
                            </div>
                            <div className="col-md-4 text-right">
                                <label>Total Loss: <span ref="total_loss">0</span></label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ReportConnectGrid;