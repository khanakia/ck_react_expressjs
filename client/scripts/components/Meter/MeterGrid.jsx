import React, { Component } from "react";
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import MeterHelper from '../../helpers/MeterHelper'


class MeterGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        matchId: null,
        meterId: null,
        entriesList : [],
        
        onDataUpdate: function(data) {},
        onEditButtonClick: function(data) {},
        onRowSelect: function(rowdata) {},
    }

    componentWillMount() {

        this.initDataAdapter()
    }
    componentDidMount() {
        this.refs.jqxgrid.on('bindingcomplete', () => {
            this.selectRowByMeterId(this.props.meterId)
            this.onRowSelect()
        })
        window.grid = this.refs.jqxgrid
        window.grid_data = this.props.entriesList.slice()
        window.dataAdapter = this.dataAdapter

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {
        this.source.localdata = this.props.entriesList.slice()
        this.dataAdapter.dataBind()
    }

    refresh = () => {
        this.dataAdapter.dataBind()
        this.onRowSelect()
    }

    onRowSelect() {
        this.refs.jqxgrid.off('rowselect');
        this.refs.jqxgrid.on('rowselect', (event) => {
            var args = event.args;
            this.props.onRowSelect(args.row)
            
        });
    }

    selectRowByMeterId(meterId) {
        this.refs.jqxgrid.off('rowselect');
        var rows = (this.refs.jqxgrid.getrows())
        var rowsCount = rows.length;
            for (var i = 0; i < rowsCount; i++) {
                var value = this.refs.jqxgrid.getcellvalue(i, "_id")
                if (value == meterId) {
                    this.refs.jqxgrid.selectrow(i)
                    break;
                };
            };
        
    }


    getSelectedRowData() {
        var getselectedrowindex = this.refs.jqxgrid.getselectedrowindex()
        console.log(getselectedrowindex)
        if (getselectedrowindex !== -1) {
            // returns the selected row's data.
            var selectedRowData = this.refs.jqxgrid.getrowdata(getselectedrowindex);
            return selectedRowData;
        }
        return {}    
    }

    initDataAdapter() {
         var datafields = [
            { name: '_id', type: 'string' },
            { name: 'meter_name', type: 'string' },
            { name: 'declared_runs', type: 'Number' },
            { name: 'is_declared', type: 'Boolean' },
            { name: 'inn', type: 'Number' },
            { name: 'is_monday_final', type: 'Boolean' },
        ];

        this.source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            localdata: this.props.entriesList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [{
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
                    MeterHelper.delete(dataRecord.uid).then((res) => {
                        this.props.onDataUpdate()
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
            { text: 'Meter', datafield: 'meter_name', width: 100 },
            { text: 'Inn', datafield: 'inn', width: 50 },
            { text: 'Runs', datafield: 'declared_runs', width: 50 },
            { text: 'MF', datafield: 'is_monday_final', width: 40, columntype: 'checkbox', filtertype:'bool' },
        ];
        
    }

    render() {
        return (
            <div>
                <JqxGrid ref="jqxgrid"
                    source={this.dataAdapter} columns={this.columns}
                    width={"100%"} height={365} pageable={false}
                    sortable={true} altrows={true} enabletooltips={true}
                    editable={false} 
                    filterable={false} showfilterrow={false}
                />
            </div>
        );
    }
}

export default MeterGrid;
