import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import MatchHelper from '../../helpers/MatchHelper'
import {URL_MATCHES, APP_URL_MDI_MATCH} from '../../Constant'

class MatchGrid extends Component {

	constructor(props) {
        super(props);

        this.entered = false
    }

	static defaultProps = {
        entriesList : [],
        onDataUpdate: function() {},
        onDelete: function() {},
        editItem: function(account_id){}
       
    }

    componentWillMount() {
        this.initDataAdapter()        
    }


    componentDidMount() {
        this.initMouseTrap()
    }

    componentDidUpdate() {
        this.source.localdata = this.props.entriesList.slice()
        this.dataAdapter.dataBind()
    }

     initMouseTrap = () => {
        var mtrap = new  Mousetrap()
        mtrap.stopCallback = function(e, element, combo) {
            return false;
        }

        mtrap.bind('alt+g', () => { 
            if(typeof this.refs.jqxgrid !=="undefined") {
                this.refs.jqxgrid.selectrow(0)
                this.refs.jqxgrid.focus()
            }
        });

        mtrap.bind('enter', (e) => { 

            var isJqxgrid = jQuery(e.target).parents('.jqx-grid').length
            if(isJqxgrid > 0) {
                var data = this.getSelectedRowData()
                if(data) {
                    hashHistory.push(APP_URL_MDI_MATCH + "/" + data.uid)
                }
                // console.log(data)
            }
        });

        
    }


    getSelectedRowData() {
        if(typeof this.refs.jqxgrid == "undefined") return false;
        var getselectedrowindex = this.refs.jqxgrid.getselectedrowindex()
        console.log(getselectedrowindex)
        if (getselectedrowindex !== -1) {
            // returns the selected row's data.
            var selectedRowData = this.refs.jqxgrid.getrowdata(getselectedrowindex);
            return selectedRowData;
        }
        return {}    
    }

    handlekeyboardnavigation = (event) => {
        if(this.entered) return true
        var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
        if(key==13) {
            this.entered = true
            var data = this.getSelectedRowData()
            hashHistory.push(APP_URL_MDI_MATCH + "/" + data.uid)
            console.log(data)
            return true;
        }

        // console.log(key)
    }

    initDataAdapter() {
        var _this = this;
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
                     if(data.is_declared || data.is_abandoned) {
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
                            this.props.onDelete()
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
                cellclassname: function (row, column, value, data) {
                     if(data.is_declared || data.is_abandoned) {
                        return "jqx_cell_disabled"
                     }
                },
                cellsrenderer: () => {
                    return 'Edit';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    this.props.editItem(dataRecord.uid)
                }
            },

            {
                text: '',
                datafield: 'Select1',
                columntype: 'button',
                width: 100,
                filterable: false,
                cellsrenderer: () => {
                    return 'Enter Match';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);
                    hashHistory.push(APP_URL_MDI_MATCH + "/" + dataRecord.uid)
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
