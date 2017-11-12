import React, { Component } from "react";
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import SessionHelper from '../../helpers/SessionHelper'
import { URL_SESSIONS } from "../../Constant"

class SessionGrid extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     matchId: this.props.matchId,
        //     // sessionId: this.props.sessionId
        // }
    }

    static defaultProps = {
        matchId: null,
        sessionId: null,
        entriesList : [],
        
        onEditButtonClick: function(data) {},
        onRowSelect: function(rowdata) {},
    }

    componentWillMount() {

        this.initDataAdapter()
    }
    componentDidMount() {
        this.refs.jqxgrid.on('bindingcomplete', () => {
            this.selectRowBySessonId(this.props.sessionId)
            this.onRowSelect()
            // console.log("bindingcomplete")
        })
        window.grid = this.refs.jqxgrid
        window.grid_data = this.props.entriesList.slice()
        window.dataAdapter = this.dataAdapter

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {
        // console.log("componentDidUpdate")
        // this.selectRowBySessonId()
        // this.onRowSelect()

        this.source.localdata = this.props.entriesList.slice()
        this.dataAdapter.dataBind()
        // console.log(this.dataAdapter)
     
       
    }

    refresh = () => {
        // this.refs.jqxgrid.updatebounddata();
        this.dataAdapter.dataBind()
        this.onRowSelect()
    }

    onRowSelect() {
        this.refs.jqxgrid.off('rowselect');
        this.refs.jqxgrid.on('rowselect', (event) => {
            var args = event.args;
            this.props.onRowSelect(args.row)
            
        });
    }

    selectRowBySessonId(sessionId) {
        this.refs.jqxgrid.off('rowselect');
        var rows = (this.refs.jqxgrid.getrows())
        var rowsCount = rows.length;
            for (var i = 0; i < rowsCount; i++) {
                var value = this.refs.jqxgrid.getcellvalue(i, "_id")
                if (value == sessionId) {
                    this.refs.jqxgrid.selectrow(i)
                    break;
                };
            };
        
    }


    getSelectedRowData() {
        var getselectedrowindex = this.refs.jqxgrid.getselectedrowindex()
        console.log(getselectedrowindex)
        if (getselectedrowindex !== -1) {
            // returns the selected row's data.
            var selectedRowData = this.refs.jqxgrid.getrowdata(getselectedrowindex);
            return selectedRowData;
        }
        return {}    
    }

    initDataAdapter() {
         var datafields = [
            { name: '_id', type: 'string' },
            { name: 'session_name', type: 'string' },
            { name: 'declared_runs', type: 'Boolean' },
            { name: 'is_declared', type: 'Boolean' },
            { name: 'team_name', type: 'Boolean' },
        ];

        this.source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            localdata: this.props.entriesList.slice(),
            // url: URL_SESSIONS + '?match_id=' + this.props.matchId
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
                    SessionHelper.delete(dataRecord.uid).then((res) => {
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
            { text: 'Id', datafield: '_id', width: 50 },
            { text: 'Session', datafield: 'session_name', width: 100 },
            { text: 'Runs', datafield: 'declared_runs', width: 50 },
            { text: 'Team', datafield: 'team_name', width: 100 },   
        ];
        
    }

    render() {
        // console.log(this.dataAdapter)


        return (
            <div>
                <JqxGrid ref="jqxgrid"
                    source={this.dataAdapter} columns={this.columns}
                    width={"100%"} height={365} pageable={false}
                    sortable={true} altrows={false} enabletooltips={true}
                    editable={false} 
                    filterable={false} showfilterrow={false}
                />
            </div>
        );
    }
}

export default SessionGrid;
