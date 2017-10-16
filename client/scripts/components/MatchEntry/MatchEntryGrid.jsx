import React, { Component } from "react";
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import MatchEntryHelper from '../../helpers/MatchEntryHelper'
import { URL_MATCH_ENTRIES } from "../../Constant"

class MatchEntryGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        matchId: null,
        teamsList: [],
        entriesList : [],
        onEditButtonClick: function(data) {}
    }

    refresh = () => {
        // this.refs.jqxgrid.updatebounddata();
        this.dataAdapter.dataBind()
    }

    componentDidUpdate() {
        // console.log("componnetDidUpdate")
        // this.refs.jqxgrid.updatebounddata();
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
            { name: 'is_declared', type: 'string' },
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
            // url: URL_MATCH_ENTRIES + '?match_id=' + this.props.matchId
            datafields: datafields,
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
                    MatchEntryHelper.delete(dataRecord.uid).then((res) => {
                        // this.refresh()
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
            { text: 'Party', datafield: 'account_name', width: 150 },
            { text: 'Rate', datafield: 'rate', width: 100 },
            { text: 'Amount', datafield: 'amount', width: 100 },
            { text: 'L/K', datafield: 'lk', width: 50 },
            { text: 'Team', datafield: 'team_name', width: 100 }
        ];

        teamsList.map(function(item, i) {
            columns.push({
                text: item.team_name,
                datafield: item.team_name,
                width: 100
            })
        })

        return (
            <div>
                <JqxGrid key={Math.random()}
                  ref="jqxgrid"
                  width={"100%"} height={600} source={this.dataAdapter} pageable={true}
                  sortable={true} altrows={false} enabletooltips={false}
                  editable={false} columns={columns}
                  filterable={true} showfilterrow={true}
                />
            </div>
        );
    }
}

export default MatchEntryGrid;
