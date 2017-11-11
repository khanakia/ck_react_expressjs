import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import MatchTeamHelper from '../../helpers/MatchTeamHelper'
import {URL_MATCHES} from '../../Constant'

class MatchTeamGrid extends Component {

	constructor(props) {
        super(props);
    }

	static defaultProps = {
        entriesList : [],
        onDataUpdate: function() {},
        editItem: function(account_id){}
       
    }

    componentWillMount() {
        this.initDataAdapter()        
    }

    componentDidUpdate() {
        this.source.localdata = this.props.entriesList.slice()
        this.dataAdapter.dataBind()
    }    

    initDataAdapter() {
        this.source = {
            datatype: 'json',
            datafields: [
                { name: '_id', type: 'string' },
                { name: 'created_at', type: 'date'},
                { name: 'updated_at', type: 'date'},
                { name: 'team_id', type: 'string' },
                { name: 'team_name', type: 'string' },
                { name: 'match_id', type: 'string' },
                { name: 'is_declared', type: 'boolean' },
                { name: 'status', type: 'string' },
            ],

            id: '_id',
            // url: URL_MATCHES,
            localdata: this.props.entriesList.slice(),

            // updaterow: (rowid, rowdata, commit) => {
            //     MatchTeamHelper.update(rowdata.uid, {
            //         match_name: rowdata.match_name
            //     })
            //     commit(true);
            // },
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            {
                text: 'Delete',
                datafield: 'Delete',
                columntype: 'button',
                width: 50,
                filterable: false,
                cellclassname: function (row, column, value, data) {
                     if(data.is_declared) {
                        return "jqx_cell_disabled"
                     }
                },
                cellsrenderer: () => {
                    return 'Delete';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    var r = confirm("Are you sure!");
                    if (r == true) {
                        MatchTeamHelper.delete(dataRecord.uid).then( (res) => {
                            this.props.onDataUpdate()
                        })
                        .catch((err) => {
                            toastr.error(err.response.data.message)
                        })
                    }
                }
            },
            { text: 'Id', datafield: '_id', width: 50 },
            { text: 'Team', datafield: 'team_name', width: 150 },
            { text: 'Status', datafield: 'status', width: 100 },
            { text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox'  },
            { text: 'Created', datafield: 'created_at', width: 120, cellsformat: 'dd/MM/yyyy' },
        ];
    }

    render() {

        return (
            <div>
         		<JqxGrid ref="jqxgrid" source={this.dataAdapter} columns={this.columns} 
                    width={"100%"} height={350} 
         			pageable={false} sortable={true} altrows={true} enabletooltips={true} 
         			editable={false}  filterable={false} showfilterrow={false} />
            </div>
        );
    }
}

export default MatchTeamGrid;
