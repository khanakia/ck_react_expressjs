import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

class UserGrid extends Component {
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

    componentDidMount() {

    }

    initDataAdapter() {
         var datafields = [
            // { name: '_id', type: 'string' },
            { name: 'username', type: 'string' },
            { name: 'fullname', type: 'string' },
            { name: 'status', type: 'boolean' },
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
            // { text: 'Id', datafield: '_id', width: 70 },
            { text: 'UserName', datafield: 'username', width: 115 },
            { text: 'FullName', datafield: 'fullname', width: 150 },
            { text: 'Status', datafield: 'status', width: 50, columntype: 'checkbox' },
        ];
    }

    render() {
        return (
            <div>
         		<JqxGrid ref="jqxgrid" key1={Math.random()}
                   source={this.dataAdapter} columns={this.columns}
                    width={"100%"} height={350} pageable={false} pagermode={'simple'} pagesize={1000}
                    sortable={true} altrows={true} enabletooltips={true}
                    editable={false} 
                    filterable={false} showfilterrow={false} />
            </div>
        );
    }
}

export default UserGrid;
