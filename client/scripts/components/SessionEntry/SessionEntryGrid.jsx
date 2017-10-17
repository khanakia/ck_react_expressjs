import React, { Component } from "react";
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import SessionEntryHelper from '../../helpers/SessionEntryHelper'
import { URL_SESSION_ENTRIES } from "../../Constant"

class SessionEntryGrid extends Component {
    constructor(props) {
        super(props);
     }

    static defaultProps = {
        entriesList : [],
        onEditButtonClick: function(data) {}
    }

    componentWillMount() {
        this.initDataAdapter()
    }

    componentDidUpdate() {
        this.source.localdata = this.props.entriesList.slice()
        this.dataAdapter.dataBind()
    }

    refresh = () => {
        // this.refs.jqxgrid.updatebounddata();
        // this.dataAdapter.dataBind()
    }

    initDataAdapter() {
        var datafields = [
            { name: '_id', type: 'string' },
            { name: 'rate', type: 'string' },
            { name: 'runs', type: 'string' },
            { name: 'amount', type: 'string' },
            { name: 'yn', type: 'string' },
            { name: 'account_name', type: 'string' },            
            { name: 'account_id', type: 'string' },
            { name: 'match_id', type: 'string' },
            { name: 'created_at', type: 'date'},
            { name: 'comm_yn', type: 'boolean' },
            { name: 'session_id', type: 'Number' },
        ];

        this.source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            // url: URL_SESSION_ENTRIES + '?session_id=' + this.props.sessionId,
            localdata: this.props.entriesList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [{
                text: 'Delete',
                datafield: 'Delete',
                columntype: 'button',
                width: 50,
                filterable: false,
                cellclassname: function (row, column, value, data) {
                     // console.log(row, column , value, data)
                     if(data.is_declared) {
                        return "jqx_cell_disabled"
                     }
                },
                cellsrenderer: () => {
                    return 'Delete';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    console.log(dataRecord.uid)
                    SessionEntryHelper.delete(dataRecord.uid).then((res) => {
                        this.refresh()
                    }).catch((res)=> {
                        toastr.error("Cannot Remove Item.")
                    })

                }
            },
            {
                text: 'Edit',
                datafield: 'Edit',
                columntype: 'button',
                width: 50,
                filterable: false,
                cellclassname: function (row, column, value, data) {
                     // console.log(row, column , value, data)
                     if(data.is_declared) {
                        return "jqx_cell_disabled"
                     }
                },
                cellsrenderer: (row, column, value) => {
                    return 'Edit';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    // console.log(dataRecord)
                    this.props.onEditButtonClick(dataRecord);
                }
            },
            { text: 'Id', datafield: '_id', width: 50 },
            { text: 'Party', datafield: 'account_name', width: 150 },
            { text: 'Rate', datafield: 'rate', width: 100, cellsformat: 'd2' },
            { text: 'Runs', datafield: 'runs', width: 70 },
            { text: 'L/K', datafield: 'yn', width: 50 },
            { text: 'Amount', datafield: 'amount', width: 100 , cellsformat: 'd2'},
            { text: 'Comm YN', datafield: 'comm_yn', width: 100, columntype: 'checkbox', filtertype:'bool' },
            { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' },
        ];
        
    }

    render() {
        return (
            <div>
                <JqxGrid ref="jqxgrid" 
                    source={this.dataAdapter} columns={this.columns}
                    width={"100%"} height={400} pageable={true} pagermode={'simple'} pagesize={1000}
                    sortable={false} altrows={false} enabletooltips={true}
                    editable={false} 
                    filterable={true} showfilterrow={false}
                />
            </div>
        );
    }
}

export default SessionEntryGrid;
