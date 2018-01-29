import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

class AllMatchGrid extends Component {

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
        this.refs.jqxgrid.on('rowselect', (event) => {
            this.props.connectReportFn()
        });
    }

    componentDidUpdate() {
        this.source.localdata = this.props.entriesList.slice()
        this.dataAdapter.dataBind()

        $('#allMatchGrid .jqx-grid-header').children().filter(":not(:eq(-1))").filter(":not(:eq(-1))").remove()
    }

    getSelectedRowsData = () => {
        var getselectedrowindexes = this.refs.jqxgrid.getselectedrowindexes()
        // console.log(getselectedrowindexes)
        var selectedRowsData = []
        if (getselectedrowindexes.length > 0) {
            
            selectedRowsData = getselectedrowindexes.map((item,i) => {
                return this.refs.jqxgrid.getrowdata(item);
            })
            return selectedRowsData;
        }

        return selectedRowsData
    }

    initDataAdapter() {
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'created_at', type: 'date'},
                { name: 'match_id', type: 'string' },
                { name: 'id', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'ref_type', type: 'string' },
                { name: 'is_declared', type: 'boolean' },
            ],

            id: '_id',
            localdata: this.props.entriesList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'MatchId', datafield: 'match_id', width: 80 },
            { text: 'Dated', datafield: 'created_at', width: 100, cellsformat: 'dd/MM/yyyy' },
            { text: 'Id', datafield: 'id', width: 70 },
            { text: 'Name', datafield: 'name', width: 150 },
            { text: 'Type', datafield: 'ref_type', width: 150 },
            /*{ text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox'  },*/
        ];
    }

    render() {

        return (
            <div id="allMatchGrid">
         		<JqxGrid ref="jqxgrid" source={this.dataAdapter} columns={this.columns} 
                    width={"100%"} height={550} 
         			pageable={false} sortable={true} altrows={true} enabletooltips={true} 
         			editable={false}  filterable={true} showfilterrow={true}
                    selectionmode={'checkbox'} />
            </div>
        );
    }
}

export default AllMatchGrid;
