import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import AccountHelper from '../../helpers/AccountHelper'

class AccountGrid extends Component {
	constructor(props) {
        super(props);
    }

	static defaultProps = {
        entriesList : [],
        onDataUpdate: function() {},
        editItem: function(account_id){},
        onRowSelect: function(rowdata) {},
        onCellClick: function(rowdata) {},
       
    }

    componentWillMount() {
        this.initDataAdapter()
        // console.log(this.refs.jqxgrid)
    }

    componentDidUpdate() {
        this.source.localdata = this.props.entriesList.slice()
        this.dataAdapter.dataBind()
        // this.refs.jqxgrid.refresh()
        // this.refs.jqxgrid.updatebounddata('cells')
    }

    componentDidMount() {
        // console.log("DID MOUnt")
        // window.grid = this.refs.jqxgrid
        // window.grid_data = this.props.entriesList.slice()
        // window.dataAdapter = this.dataAdapter

        this.refs.jqxgrid.on('bindingcomplete', () => {
            // this.onRowSelect()
            if(!this.refs.jqxgrid) return null
            this.refs.jqxgrid.on('cellclick', (event) => {
                this.props.onCellClick(event.args.row.bounddata)
                
            });
        })
    }

    // onRowSelect = () => {
    //     if(!this.refs.jqxgrid) return null
    //     this.refs.jqxgrid.off('rowselect');
    //     this.refs.jqxgrid.on('rowselect', (event) => {
    //         var args = event.args;
    //         this.props.onRowSelect(args.row)
            
    //     });
    // }

    initDataAdapter() {
         var datafields = [
            { name: '_id', type: 'string' },
            { name: 'account_name', type: 'string' },
            { name: 'limit', type: 'number' },
            { name: 'status', type: 'boolean' },
            { name: 'hide', type: 'boolean' },
        ];

        this.source = {
            datatype: 'json',
            datafields: datafields,

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
                cellsrenderer: () => {
                    return 'Del';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    // console.log(dataRecord.uid)
                    var r = confirm("Are you sure!", ' ');
                    if (r == true) {
                        AccountHelper.delete(dataRecord.uid).then( (res) => {
                            this.props.onDataUpdate()
                        }).catch((err) => {
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
                cellsrenderer: () => {
                    return 'Edit';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    this.props.editItem(dataRecord.uid)

                }
            },
            { text: 'Id', datafield: '_id', width: 68 },
            { text: 'Name', datafield: 'account_name', width: 200 },
            // { text: 'Limit', datafield: 'limit', width: 100 },
            // { text: 'Status', datafield: 'status', width: 50, columntype: 'checkbox' },
            // { text: 'Hide', datafield: 'hide', width: 50, columntype: 'checkbox' },
        ];
    }

    render() {
        return (
            <div>
         		<JqxGrid ref="jqxgrid" key={Math.random()}
                   source={this.dataAdapter} columns={this.columns} selectionmode={'singlecell'}
                    width={"100%"} height={540} pageable={false} pagermode={'simple'} pagesize={1000}
                    sortable={true} altrows={true} enabletooltips={true}
                    editable={false} 
                    filterable={false} showfilterrow={false} />
            </div>
        );
    }
}

export default AccountGrid;
