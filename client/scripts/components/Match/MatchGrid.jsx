import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import MatchHelper from '../../helpers/MatchHelper'
import {URL_MATCHES} from '../../Constant'

class MatchGrid extends Component {

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
                { name: 'match_name', type: 'string' },
                { name: 'match_type', type: 'string' },
                { name: 'is_declared', type: 'boolean' },
                { name: 'is_abandoned', type: 'boolean' },
                { name: 'team_name', type: 'string' },
            ],

            id: '_id',
            localdata: this.props.entriesList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            {
                text: 'Delete',
                datafield: 'Delete',
                columntype: 'button',
                width: 50,
                filterable: false,
                exportable: false,
                cellclassname: function (row, column, value, data) {
                     if(data.is_declared && data.is_abandoned) {
                        return "jqx_cell_disabled"
                     }
                },
                cellsrenderer: () => {
                    return 'Delete';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    var r = confirm("Are you sure!", ' ');
                    if (r == true) {
                        MatchHelper.delete(dataRecord.uid).then( (res) => {
                            this.props.onDataUpdate()
                        })
                        .catch((err) => {
                            toastr.error(err.response.data.message)
                        })
                    }
                }
            },
            {
                text: 'Edit',
                datafield: 'Edit',
                columntype: 'button',
                width: 50,
                filterable: false,
                exportable: false,
                cellsrenderer: () => {
                    return 'Edit';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    this.props.editItem(dataRecord.uid)
                }
            },
            { text: 'Id', datafield: '_id', width: 50 },
            { text: 'Name', datafield: 'match_name', width: 150 },
            { text: 'Match Type', datafield: 'match_type', width: 100 },
            { text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox'  },
            { text: 'Is Abandoned', datafield: 'is_abandoned', width: 100, columntype: 'checkbox'  },
            { text: 'Winner', datafield: 'team_name', width: 100  },
            { text: 'Dated', datafield: 'created_at', width: 100, cellsformat: 'dd/MM/yyyy' },
        ];
    }

    render() {

        return (
            <div>
         		<JqxGrid ref="jqxgrid" key={Math.random()} source={this.dataAdapter} columns={this.columns} 
                    width={"100%"} height={500} 
         			pageable={true} sortable={true} altrows={true} enabletooltips={true} 
         			editable={false}  filterable={false} showfilterrow={false} />
            </div>
        );
    }
}

export default MatchGrid;
