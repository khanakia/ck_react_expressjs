import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import AccountHelper from '../../helpers/AccountHelper'

class AccountGrid extends Component {
	constructor(props) {
        super(props);
    }

	static defaultProps = {
        accountsList : [],
        onDataUpdate: function() {},
        editItem: function(account_id){}
       
    }

    render() {
    	let source = {
            datatype: 'json',
            datafields: [
            	{ name: '_id', type: 'number' },
                { name: 'account_name', type: 'string' },
                { name: 'limit', type: 'number' },
                { name: 'status', type: 'boolean' },
                { name: 'hide', type: 'boolean' },
            ],

            id: '_id',
            // url: '/accounts',
            localdata: this.props.accountsList,

            updaterow: (rowid, rowdata, commit) => {
                AccountHelper.update(rowdata.uid, {
                    account_name: rowdata.account_name
                }).then((res) => {
                	this.props.onDataUpdate()
                })
                commit(true);
            },
        };

        let dataAdapter = new $.jqx.dataAdapter(source);

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
                    AccountHelper.delete(dataRecord.uid).then( (res) => {
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

                }
            },
        	{ text: 'Id', datafield: '_id', width: 50 },
            { text: 'Name', datafield: 'account_name', width: 230 },
            { text: 'Limit', datafield: 'limit', width: 100 },
            { text: 'Status', datafield: 'status', width: 50, columntype: 'checkbox' },
            { text: 'Hide', datafield: 'hide', width: 50, columntype: 'checkbox' },
        ];

        return (
            <div>
         		 <JqxGrid ref="jqxgrid" width={"100%"} 
                            height={600} source={dataAdapter} pageable={true} 
                            sortable={true} altrows={true} enabletooltips={true} 
                            editable={true} columns={columns} filterable={true} showfilterrow={true} />
            </div>
        );
    }
}

export default AccountGrid;
