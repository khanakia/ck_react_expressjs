import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

class BackupDbGrid extends Component {
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

    componentDidMount() {
  
    }

    componentDidUpdate() {
        this.source.localdata = this.props.entriesList.slice()
        this.dataAdapter.dataBind()
    }


    initDataAdapter() {
         var datafields = [
            { name: 'name', type: 'string' },
            { name: 'created_at', type: 'date'},
        ];

        this.source = {
            datatype: 'json',
            datafields: datafields,
            localdata: this.props.entriesList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            {
                text: 'Restore',
                datafield: 'Restore',
                columntype: 'button',
                width: 100,
                filterable: false,
                cellsrenderer: () => {
                    return 'Restore';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    axios.get('/backups/restore_db', {
                        params : {
                            dirname: dataRecord.name,
                        }
                    })
                    .then((res) => {
                        // this.sessionList = res.data
                    })
                    .catch(() => this.fetched = false);

                }
            },
            { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' },
            { text: 'Name', datafield: 'name', width: 150 }
        ];
    }


    render() {
        return (
            <div>
         		<JqxGrid ref="jqxgrid" key1={Math.random()}
                   source={this.dataAdapter} columns={this.columns}
                    width={"450"} height={600} pageable={false} pagermode={'simple'} pagesize={1000}
                    sortable={true} altrows={false} enabletooltips={true}
                    editable={false} 
                    filterable={false} showfilterrow={false} />
            </div>
        );
    }
}

export default BackupDbGrid;
