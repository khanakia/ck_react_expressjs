import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import MatchHelper from '../../helpers/MatchHelper'
import {URL_MATCHES} from '../../Constant'

class MatchGrid extends Component {

	constructor(props) {
        super(props);
    }

	static defaultProps = {
        onDataUpdate: function() {},
        editItem: function(id){}
    }

    rebind = () => {
    	this.dataAdapter.dataBind()
    }

    render() {
    	let source = {
            datatype: 'json',
            datafields: [
                { name: 'match_name', type: 'string' },
                { name: 'match_type', type: 'string' },
                { name: 'is_declared', type: 'boolean' },
            ],

            id: '_id',
            url: URL_MATCHES,

            updaterow: (rowid, rowdata, commit) => {
                MatchHelper.update(rowdata.uid, {
                    match_name: rowdata.match_name
                })
                commit(true);
            },
        };

        this.dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [
            {
                text: 'Delete',
                datafield: 'Delete',
                columntype: 'button',
                width: 50,
                filterable: false,
                cellsrenderer: () => {
                    return 'Delete';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    console.log(dataRecord.uid)
                    MatchHelper.delete(dataRecord.uid).then( (res) => {
                        // _this.refreshComponent()
                        this.rebind()
                        this.props.onDataUpdate()
                    })
                }
            },
            {
                text: 'Edit',
                datafield: 'Edit',
                columntype: 'button',
                width: 50,
                filterable: false,
                cellsrenderer: () => {
                    return 'Edit';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    this.props.editItem(dataRecord.uid)
                    console.log(dataRecord.uid)
                }
            },
            { text: 'Name', datafield: 'match_name', width: 150 },
            { text: 'Match Type', datafield: 'match_type', width: 100 },
            { text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox'  },
        ];

        return (
            <div>
         		<JqxGrid ref="jqxgrid" width={"100%"} height={500} source={this.dataAdapter} 
         					pageable={true} sortable={true} altrows={true} enabletooltips={true} 
         					editable={true} columns={columns} filterable={true} showfilterrow={true} />
            </div>
        );
    }
}

export default MatchGrid;
