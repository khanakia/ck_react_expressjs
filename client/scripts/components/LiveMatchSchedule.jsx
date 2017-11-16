import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { inject, observer } from 'mobx-react';
import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

@inject('liveApiStore')
@observer
class LiveMatchSchedule extends Component {
    componentDidMount() {
        this.props.liveApiStore.fetchMatchScheduleList()
    }

    componentWillMount() {
        this.initDataAdapter()
    }

    componentDidUpdate() {
   
    }


    initDataAdapter = () => {
        this.source = {
            datatype: 'json',
            datafields: [
                { name: '_id', type: 'number'},
                { name: 'dated', type: 'date'},
                { name: 'match_name', type: 'string' },
                { name: 'time', type: 'string' },
                { name: 'series_name', type: 'string' },
                { name: 'location', type: 'string' },

            ],

            id: '_id',
            // url: URL_MATCHES,
            localdata: this.props.liveApiStore.matchScheduleList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'ID', datafield: '_id', width: 70 },
            { text: 'Date', datafield: 'dated', width: 150, cellsformat: 'dd/MM/yyyy Thh:mm tt' },
            { text: 'Time', datafield: 'time', width: 70 },
            { text: 'Match', datafield: 'match_name', width: 250 },
            { text: 'Series', datafield: 'series_name', width: 250 },
            { text: 'Location', datafield: 'location', width: 250 },   
        ];
    }

    render() {
        // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
        // plMatchWiseList when i call this variable then mobx will update the component otherwise not
        
        this.source.localdata = this.props.liveApiStore.matchScheduleList.slice()
        this.dataAdapter.dataBind()

        return (
            <div className="page d-inline-block mx-2">
                <h6><i className="fa fa-bar-chart"></i> Match Schedule</h6>
                <JqxGrid key={Math.random()} ref="jqxgrid" source={this.dataAdapter} columns={this.columns} 
                    width={"1100"} height={500} pagesize={100}
                    pageable={true} sortable={true} altrows={true} enabletooltips={true} 
                    editable={false}  filterable={true} showfilterrow={true} />
            </div>
        );
    }
}

export default LiveMatchSchedule;
