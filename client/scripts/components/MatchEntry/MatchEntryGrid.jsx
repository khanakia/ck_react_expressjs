import React, { Component } from "react";
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import MatchEntryHelper from '../../helpers/MatchEntryHelper'

class MatchEntryGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        matchId: null,
        teamsList: [],
        entriesList : [],
        onEditButtonClick: function(data) {},
        onDataUpdate: function() {},
    }

    refresh = () => {        
        this.dataAdapter.dataBind()
    }

    render() {
        const teamsList = this.props.teamsList
        var datafields = [
            { name: '_id', type: 'string' },
            { name: 'account_name', type: 'string' },
            { name: 'rate', type: 'string' },
            { name: 'amount', type: 'string' },
            { name: 'lk', type: 'string' },
            { name: 'team_name', type: 'string' },
            { name: 'team_id', type: 'string' },
            { name: 'account_id', type: 'string' },
            { name: 'match_id', type: 'string' },
            { name: 'match_team_id', type: 'number' },
            { name: 'amounts', type: 'string' },
            { name: 'comm_yn', type: 'boolean' },
            { name: 'is_summarized', type: 'boolean' },
            { name: 'created_at', type: 'date'},
            { name: 'updated_at', type: 'date'}
        ];

        if (teamsList.length > 0) {
            teamsList.map(function(item, i) {
                datafields.push({
                    name: item.team_name
                })
            })
        }

        let source = {
            datatype: 'json',
            id: '_id',
            localdata: this.props.entriesList.slice(),
            datafields: datafields,
        };

        this.dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [{
                text: '',
                datafield: 'Delete',
                columntype: 'button',
                width: 50,
                filterable: false,
                cellclassname: function (row, column, value, data) {
                     if(data.is_declared || data.is_summarized) {
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
                        MatchEntryHelper.delete(dataRecord.uid).then((res) => {
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
                     var cssClass = ''
                     if(data.updated_at) {
                        cssClass = 'jqx_modified '
                     }
                     if(data.is_declared || data.is_summarized) {
                        cssClass += "jqx_cell_disabled"
                     }

                     return cssClass
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
            { text: 'Rate', datafield: 'rate', width: 100 },
            { text: 'Amount', datafield: 'amount', width: 100 },
            { text: 'L/K', datafield: 'lk', width: 50 },
            { text: 'Team', datafield: 'team_name', width: 100 },
        ];

        teamsList.map(function(item, i) {
            columns.push({
                text: item.team_name,
                datafield: item.team_name,
                width: 100
            })
        })

        columns.push(
                { text: 'Comm YN', datafield: 'comm_yn', width: 100, columntype: 'checkbox', filtertype:'bool' },
                { text: 'Is Summarized', datafield: 'is_summarized', width: 100, columntype: 'checkbox', filtertype:'bool'},
                { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' },
            )

        return (
            <div>
                <JqxGrid key={Math.random()}
                  ref="jqxgrid"
                  width={"100%"} height={400} source={this.dataAdapter} pageable={false}
                  sortable={true} altrows={true} enabletooltips={false}
                  editable={false} columns={columns}
                  filterable={true} showfilterrow={true}
                />
            </div>
        );
    }
}

export default MatchEntryGrid;
