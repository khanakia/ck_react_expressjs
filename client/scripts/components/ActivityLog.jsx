import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { inject, observer } from 'mobx-react';
import JqxGrid from './jqwidgets-react/react_jqxgrid.js';


class RenderTable extends Component {
    static defaultProps = {
        record: {}
    }

    render_matchEntry(data) {
        return (
            <table className="table table-striped table-sm">
                <tbody>
                    <tr>
                        <th>Match ID</th>
                        <td>{data.match_id}</td>
                    </tr>
                    <tr>
                        <th>Match Name</th>
                        <td>{data.match_name}</td>
                    </tr>
                    <tr>
                        <th>Party</th>
                        <td>{data.account_name}</td>
                    </tr>
                    <tr>
                        <th>Rate</th>
                        <td>{data.rate}</td>
                    </tr>
                    <tr>
                        <th>Amount</th>
                        <td>{data.amount}</td>
                    </tr>
                    <tr>
                        <th>LK</th>
                        <td>{data.lk}</td>
                    </tr>
                    <tr>
                        <th>Team</th>
                        <td>{data.team_name}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render_sessionEntry(data) {
        return (
            <table className="table table-striped table-sm">
                <tbody>
                    <tr>
                        <th>Match ID</th>
                        <td>{data.match_id}</td>
                    </tr>
                    <tr>
                        <th>Match Name</th>
                        <td>{data.match_name}</td>
                    </tr>
                    <tr>
                        <th>Session</th>
                        <td>{data.session_name}</td>
                    </tr>
                    <tr>
                        <th>Party</th>
                        <td>{data.account_name}</td>
                    </tr>
                    <tr>
                        <th>Rate</th>
                        <td>{data.rate}</td>
                    </tr>
                    <tr>
                        <th>Amount</th>
                        <td>{data.amount}</td>
                    </tr>
                    <tr>
                        <th>Runs</th>
                        <td>{data.runs}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render_match(data) {
        return (
            <table className="table table-striped table-sm">
                <tbody>
                    <tr>
                        <th>Match ID</th>
                        <td>{data._id}</td>
                    </tr>
                    <tr>
                        <th>Match Name</th>
                        <td>{data.match_name}</td>
                    </tr>
                    <tr>
                        <th>Winner Team</th>
                        <td>{data.team_name}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render_session(data) {
        return (
            <table className="table table-striped table-sm">
                <tbody>
                    <tr>
                        <th>SessionId</th>
                        <td>{data._id}</td>
                    </tr>
                    <tr>
                        <th>Session</th>
                        <td>{data.session_name}</td>
                    </tr>
                    <tr>
                        <th>Match ID</th>
                        <td>{data.match_id}</td>
                    </tr>
                    <tr>
                        <th>Match Name</th>
                        <td>{data.match_name}</td>
                    </tr>
                    <tr>
                        <th>Winner Team</th>
                        <td>{data.team_name}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render_matchTeam(data) {
        return (
            <table className="table table-striped table-sm">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <td>{data._id}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{data.status}</td>
                    </tr>
                    <tr>
                        <th>Match ID</th>
                        <td>{data.match_id}</td>
                    </tr>
                    <tr>
                        <th>Match Name</th>
                        <td>{data.match_name}</td>
                    </tr>
                    <tr>
                        <th>Team</th>
                        <td>{data.team_name}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        const {data, type} = this.props.record

        if(type=="Match Entry") {
            return this.render_matchEntry(data)
        }

        if(type=="Session Entry") {
            return this.render_sessionEntry(data)
        }

        if(type=="Match") {
            return this.render_match(data)
        }

        if(type=="Session") {
            return this.render_session(data)
        }

        if(type=="Match Team") {
            return this.render_matchTeam(data)
        }
        
    }
}

@inject('reportStore')
@observer
class ActivityLog extends Component {
    componentDidMount() {
        this.props.reportStore.fetchActivityLogList()
    }

    componentWillMount() {
        window.onDataCellHover = (cell, row) => {
            // console.log(row)
            let dataRecord = this.refs.jqxgrid.getrowdata(row);

            var div = document.createElement('div')
            ReactDOM.render(<RenderTable record={dataRecord} />, div)
            var html = jQuery(div).html()

            jQuery(cell).jqxTooltip({
                content: html,
                position: 'top',
                name: 'movieTooltip',
                width: 300
            })
            jQuery(cell).jqxTooltip('open')

        }
        this.initDataAdapter()
    }

    componentDidUpdate() {
   
    }

    // exportReport = () => {
    //     // this.refs.jqxgrid.exportdata('pdf', 'pl_match_wise');
    //     axios.get('/exportreports/pl_matchwise', {
    //     })
    //     .then((res) => {
    //         window.location.href = res.data.fileDownloadUrl  
    //     })
    // }


    renderTable = (item) => {
        if(item.type=="Match") {
            return (
                <div>
                    {item.type}
                </div>
            )
        }

        return null
    }

    onDataCellHover = (row) => {
        console.log('Hovered')
    }

    initDataAdapter = () => {
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'created_at', type: 'date'},
                { name: 'type', type: 'string' },
                { name: 'action', type: 'string' },
                { name: 'username', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'data' },

            ],

            // id: '_id',
            // url: URL_MATCHES,
            localdata: this.props.reportStore.activityLogList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'Created At', datafield: 'created_at', width: 150, cellsformat: 'dd/MM/yyyy Thh:mm tt' },
            { text: 'Type', datafield: 'type', width: 100 },
            { text: 'Action', datafield: 'action', width: 100 },
            { text: 'UserName', datafield: 'username', width: 100 },
            {
                text: '',
                datafield: 'Edit',
                columntype: 'custom',
                width: 100,
                filterable: false,
                cellsrenderer: (row, column, value) => {                    
                    // console.log(row)
                    return '<div class="itemPopoverParent" onmouseover="onDataCellHover(this,' +row + ')">View Data</div>'
                },
                // buttonclick: (row) => {
                //     let dataRecord = this.refs.jqxgrid.getrowdata(row);
                //     console.log(dataRecord)
                // }
            },
            { text: 'Description', datafield: 'description', width: 500 }            
        ];
    }

    render() {
        // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
        // plMatchWiseList when i call this variable then mobx will update the component otherwise not
        
        this.source.localdata = this.props.reportStore.activityLogList.slice()
        this.dataAdapter.dataBind()

        return (
            <div className="page d-inline-block mx-2">
                <h6><i className="fa fa-bar-chart"></i> Report - User Activity Log</h6>
                {/*<div className="mb-1 text-right">
                    <button ref='pdfExport' onClick={this.exportReport} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>
                </div>*/}
                <JqxGrid key={Math.random()} ref="jqxgrid" source={this.dataAdapter} columns={this.columns} 
                    width={"1100"} height={500} pagesize={100}
                    pageable={true} sortable={true} altrows={true} enabletooltips={true} 
                    editable={false}  filterable={true} showfilterrow={true} />
            </div>
        );
    }
}

export default ActivityLog;
