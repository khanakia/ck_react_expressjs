import React, { Component } from "react";
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import MatchEntryHelper from '../../helpers/MatchEntryHelper'
import { URL_SESSION_ENTRIES } from "../../Constant"

class SessionEntryGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        sessionId: null,
        
        onEditButtonClick: function(data) {}
    }

    refresh = () => {
        this.refs.jqxgrid.updatebounddata();
    }

    render() {
        var _this = this;
        var datafields = [
            { name: '_id', type: 'string' },
            { name: 'rate', type: 'string' },
            { name: 'runs', type: 'string' },
            { name: 'amount', type: 'string' },
            { name: 'lk', type: 'string' },
            { name: 'account_name', type: 'string' },            
            { name: 'account_id', type: 'string' },
            { name: 'match_id', type: 'string' },
            { name: 'is_declared', type: 'string' },
        ];

        let source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            url: URL_SESSION_ENTRIES + '?session_id=' + this.props.sessionId
        };

        let dataAdapter = new $.jqx.dataAdapter(source);

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
                    MatchEntryHelper.delete(dataRecord.uid).then((res) => {
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
                    console.log(dataRecord)
                    this.props.onEditButtonClick(dataRecord);
                }
            },
            { text: 'Party', datafield: 'account_name', width: 150 },
            { text: 'Rate', datafield: 'rate', width: 100 },
            { text: 'Runs', datafield: 'runs', width: 100 },
            { text: 'L/K', datafield: 'lk', width: 50 },
            { text: 'Amount', datafield: 'amount', width: 100 },
        ];


        return (
            <div>
                <JqxGrid
                  ref="jqxgrid"
                  width={"100%"} height={400} source={dataAdapter} pageable={true}
                  sortable={true} altrows={false} enabletooltips={false}
                  editable={false} columns={columns}
                  filterable={true} showfilterrow={true}
                />
            </div>
        );
    }
}

export default SessionEntryGrid;
