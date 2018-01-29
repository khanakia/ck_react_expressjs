import React, { Component } from "react";
import { APP_ROOT_HOST } from "../../Constant"

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

    exportReport = (cb) => {
        // this.refs.jqxgrid.exportdata('pdf', 'balance_sheet');
        
        // axios.get('/exportreports/balance_sheet', {
        // })
        ExportHelper.exportBalanceSheet()
        .then((res) => {
            // window.location.href = res.data.fileDownloadUrl  
            if (typeof cb === "function") {
                cb();
            }
        })
    
    }


    // printReport = () => {
    //     var gridContent = this.refs.jqxgrid.exportdata('html');

    //     var win = new electron.remote.BrowserWindow({
    //             show:false 
    //         })

    //     win.loadURL("data:text/html;charset=utf-8," + encodeURI(gridContent))
    //     win.webContents.on('did-finish-load', () => {
    //           win.webContents.print({silent: true}, function(error, data) {
              
    //           })
    //         // console.log(document.body.innerHTML)
    //     })
    //     // win.webContents.print()
    //     // var gridContent = this.refs.jqxgrid.exportdata('html');
    //     // var newWindow = window.open('', '', 'width=800, height=500'),
    //     // document = newWindow.document.open(),
    //     // pageContent =
    //     //     '<!DOCTYPE html>\n' +
    //     //     '<html>\n' +
    //     //     '<head>\n' +
    //     //     '<meta charset="utf-8" />\n' +
    //     //     '<title>jQWidgets Grid</title>\n' +
    //     //     '</head>\n' +
    //     //     '<body>\n' + gridContent + '\n</body>\n</html>';
    //     // document.write(pageContent);
    //     // document.close();
    //     // newWindow.print();
    // }

    printReport = () => {
        this.exportReport(() => {
            var win = new electron.remote.BrowserWindow({
                    show:true
                })

            win.loadURL(APP_ROOT_HOST + "/temp/report_bsheet.html")
            win.webContents.on('did-finish-load', () => {
                win.webContents.print({silent: true}, function(error, data) {  
                })
            })
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
                    {/*<button ref='pdfExport' onClick={this.exportReport} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>*/}
                    <button ref='printBtn' onClick={this.printReport} className="btn btn-sm btn-primary mr-1"><i className="fa fa-print"></i> Print</button>
                </div>
                <JqxGrid key={Math.random()} ref="jqxgrid" 
                        width={ "600"} height={600} source={this.dataAdapter} 
                        pageable={false} sortable={false} altrows={false} enabletooltips={false}
                        editable={false} columns={columns} filterable={true} showfilterrow={true} columnsresize={true} 
                        showstatusbar={true} showaggregates={true} statusbarheight={25}/>
            </div>
        );
    }
}

export default ReportBalanceSheetGrid;