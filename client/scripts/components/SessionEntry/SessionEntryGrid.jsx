import React, { Component } from "react";
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import SessionEntryHelper from '../../helpers/SessionEntryHelper'


class SessionEntryGrid extends Component {
    constructor(props) {
        super(props);
     }

    static defaultProps = {
        entriesList : [],
        onEditButtonClick: function(data) {},
        onDataUpdate: function() {}
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
            { name: 'amount_patti', type: 'string' },
            { name: 'yn', type: 'string' },
            { name: 'account_name', type: 'string' },       
            { name: 'account_id', type: 'string' },
            { name: 'match_id', type: 'string' },
            { name: 'created_at', type: 'date'},
            { name: 'comm_yn', type: 'boolean' },
            { name: 'session_id', type: 'Number' },
            { name: 'is_declared', type: 'boolean' },
            { name: 'is_summarized', type: 'boolean' },
            { name: 'patti_total_per', type: 'string' },
            // { name: 'sess_comm', type: 'string' },
            { name: 'comm_amt', type: 'string' },
            { name: 'comm_total_per', type: 'string' },
            
        ];

        this.source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            localdata: this.props.entriesList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [{
                text: '',
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
                    // console.log(dataRecord.uid)
                    var r = confirm("Are you sure!", ' ');
                    if (r == true) {
                        SessionEntryHelper.delete(dataRecord.uid).then((res) => {
                            this.props.onDataUpdate()
                        }).catch((err)=> {
                            toastr.error(err.response.data.message)
                        })
                    }

                }
            },
            {
                text: '',
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
            { text: 'Id', datafield: '_id', width: 70 },
            { text: 'Party', datafield: 'account_name', width: 120 },
            { text: 'Rate', datafield: 'rate', width: 60, cellsformat: 'd2' },
            { text: 'Runs', datafield: 'runs', width: 60 },
            { text: 'L/K', datafield: 'yn', width: 50 },
            { text: 'Amount', datafield: 'amount', width: 80 , cellsformat: 'd2'},
            { text: 'Patti Amt.', datafield: 'amount_patti', width: 80 , cellsformat: 'd2'},
            { text: 'Comm Amt.', datafield: 'comm_amt', width: 100 , cellsformat: 'd2'},
            { text: 'Comm YN', datafield: 'comm_yn', width: 100, columntype: 'checkbox', filtertype:'bool' },
            { text: 'Patti (%)', datafield: 'patti_total_per', width: 100 , cellsformat: 'd2'},
            { text: 'Comm (%)', datafield: 'comm_total_per', width: 100 , cellsformat: 'd2'},
            { text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox', filtertype:'bool' },
            { text: 'Is Summarized', datafield: 'is_summarized', width: 120, columntype: 'checkbox', filtertype:'bool' },
            { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' },
        ];
        
    }

    render() {
        return (
            <div>
                <JqxGrid ref="jqxgrid" key={Math.random()}
                    source={this.dataAdapter} columns={this.columns}
                    width={"100%"} height={400} pageable={false} pagermode={'simple'} pagesize={1000}
                    sortable={false} altrows={false} enabletooltips={true}
                    editable={false} 
                    filterable={true} showfilterrow={true}
                />
            </div>
        );
    }
}

export default SessionEntryGrid;
