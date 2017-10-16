import React, { Component } from "react";
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import SessionEntryHelper from '../../helpers/SessionEntryHelper'
import { URL_SESSION_ENTRIES } from "../../Constant"

class SessionEntryGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionId: this.props.sessionId
        }
    }

    static defaultProps = {
        sessionId: null,
        
        onEditButtonClick: function(data) {}
    }

    componentDidUpdate() {
        // this.refreshAdapter(this.props.sessionId)
    }


    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps.sessionId!==this.props.sessionId)
    //       if(nextProps.sessionId!==this.props.sessionId) {
    //           // this.setState({
    //           //   sessionId: nextProps.sessionId
    //           // })
    //           // this.refreshAdapter(nextProps.sessionId)
    //       }
    // }

    refresh = () => {
        // this.refs.jqxgrid.updatebounddata();
        this.dataAdapter.dataBind()
    }

    // refreshAdapter = (sessionId) => {
    //     var datafields = [
    //         { name: '_id', type: 'string' },
    //         { name: 'rate', type: 'string' },
    //         { name: 'runs', type: 'string' },
    //         { name: 'amount', type: 'string' },
    //         { name: 'yn', type: 'string' },
    //         { name: 'account_name', type: 'string' },            
    //         { name: 'account_id', type: 'string' },
    //         { name: 'match_id', type: 'string' },
    //         { name: 'created_at', type: 'string' },
    //         { name: 'comm_yn', type: 'string' },
    //     ];

    //     let source = {
    //         datatype: 'json',
    //         datafields: datafields,
    //         id: '_id',
    //         url: URL_SESSION_ENTRIES + '?session_id=' + sessionId
    //     };

    //     let dataAdapter = new $.jqx.dataAdapter(source);

    //     this.refs.jqxgrid.setOptions({source: dataAdapter})
    //     return dataAdapter
    // }

    render() {
        
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

        let source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            url: URL_SESSION_ENTRIES + '?session_id=' + this.props.sessionId
        };

        this.dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [{
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


        return (
            <div>
                <JqxGrid source={this.dataAdapter} 
                  ref="jqxgrid"
                  width={"100%"} height={400} pageable={true} pagermode={'simple'} pagesize={1000}
                  sortable={false} altrows={false} enabletooltips={true}
                  editable={false} columns={columns}
                  filterable={true} showfilterrow={false}
                />
            </div>
        );
    }
}

export default SessionEntryGrid;
