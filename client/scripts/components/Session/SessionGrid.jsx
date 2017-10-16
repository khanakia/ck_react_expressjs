import React, { Component } from "react";
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import SessionHelper from '../../helpers/SessionHelper'
import { URL_SESSIONS } from "../../Constant"

class SessionGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matchId: this.props.matchId,
            // sessionId: this.props.sessionId
        }
    }

    static defaultProps = {
        matchId: null,
        sessionId: null,
        
        onEditButtonClick: function(data) {},
        onRowSelect: function(rowdata) {},
    }

    componentDidMount() {
        this.refs.jqxgrid.on('bindingcomplete', () => {
            this.selectRowBySessonId(this.props.sessionId)
            this.onRowSelect()
            // console.log("bindingcomplete")
        })

    }

    componentDidUpdate() {
        // console.log("componentDidUpdate")
        // this.selectRowBySessonId()
        this.onRowSelect()
       
    }

    refresh = () => {
        this.refs.jqxgrid.updatebounddata();
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


    render() {
        
         var datafields = [
            { name: '_id', type: 'string' },
            { name: 'session_name', type: 'string' },
            { name: 'declared_runs', type: 'Boolean' },
            { name: 'is_declared', type: 'Boolean' },
            { name: 'team_name', type: 'Boolean' },
        ];

        let source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            url: URL_SESSIONS + '?match_id=' + this.props.matchId
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
            { text: 'Session', datafield: 'session_name', width: 100 },
            { text: 'Runs', datafield: 'declared_runs', width: 50 },
            { text: 'Team', datafield: 'team_name', width: 100 },   
        ];


        return (
            <div>
                <JqxGrid source={dataAdapter} 
                  ref="jqxgrid"
                  width={"100%"} height={400} pageable={false}
                  sortable={true} altrows={false} enabletooltips={true}
                  editable={false} columns={columns}
                  filterable={false} showfilterrow={false}
                />
            </div>
        );
    }
}

export default SessionGrid;
