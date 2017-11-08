import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

@inject('reportStore')
@observer
class ReportPlMatchWise extends Component {
    componentDidMount() {
        this.props.reportStore.fetchPlMatchWiseList()
    }

    componentWillMount() {
        this.initDataAdapter()        
    }

    componentDidUpdate() {
        // console.log(this.props.reportStore.plMatchWiseList.slice())
        // this.source.localdata = this.props.reportStore.plMatchWiseList.slice()
        // this.dataAdapter.dataBind()
    }    

    initDataAdapter() {
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'match_id', type: 'string'},
                { name: 'match_name', type: 'string' },
                { name: 'comm_match', type: 'string' },
                { name: 'patti_match', type: 'string' },
                { name: 'pl_match', type: 'string' },
                { name: 'comm_session', type: 'string' },
                { name: 'patti_session', type: 'string' },
                { name: 'pl_session', type: 'string' },
                { name: 'bal', type: 'string' },

            ],

            // id: '_id',
            // url: URL_MATCHES,
            localdata: this.props.reportStore.plMatchWiseList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'MatchId', datafield: 'match_id', width: 100 },
            { text: 'Match Name', datafield: 'match_name', width: 150 },
            { text: 'Match - Comm', datafield: 'comm_match', width: 150 },
            { text: 'Match - Patti', datafield: 'patti_match', width: 100 },
            { text: 'Match - PL', datafield: 'pl_match', width: 100 },
            { text: 'Session - Comm', datafield: 'comm_session', width: 150 },
            { text: 'Session - Patti', datafield: 'patti_session', width: 150 },
            { text: 'Session - PL', datafield: 'pl_session', width: 100 },
            { text: 'Balance', datafield: 'bal', width: 100 },
        ];
    }

    render() {
        // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
        // plMatchWiseList when i call this variable then mobx will update the component otherwise not
        
        this.source.localdata = this.props.reportStore.plMatchWiseList.slice()
        this.dataAdapter.dataBind()

        return (
            <div>
                <h5>Report - PL MatchWise</h5>
                <JqxGrid key={Math.random()} ref="jqxgrid" source={this.dataAdapter} columns={this.columns} 
                    width={"100%"} height={500} 
                    pageable={true} sortable={true} altrows={true} enabletooltips={true} 
                    editable={false}  filterable={true} showfilterrow={true} />
            </div>
        );
    }
}

export default ReportPlMatchWise;
