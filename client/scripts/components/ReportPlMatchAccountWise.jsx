import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

@inject('reportStore')
@observer
class ReportPlMatchAccountWise extends Component {
    componentDidMount() {
        this.props.reportStore.fetchPlMatchAccountWiseList()
    }

    componentWillMount() {
        this.initDataAdapter()        
    }

    componentDidUpdate() {
        // this.source.localdata = this.props.reportStore.plMatchAccountWiseList.slice()
        // this.dataAdapter.dataBind()
    }    

    initDataAdapter() {
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'match_id', type: 'string'},
                { name: 'match_name', type: 'string' },
                { name: 'account_id', type: 'string' },
                { name: 'account_name', type: 'string' },                
                { name: 'bal', type: 'string' },
            ],

            // id: '_id',
            // url: URL_MATCHES,
            localdata: this.props.reportStore.plMatchAccountWiseList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'MatchId', datafield: 'match_id', width: 100 },
            { text: 'Match Name', datafield: 'match_name', width: 150 },
            { text: 'AccountId', datafield: 'account_id', width: 100 },
            { text: 'Account Name', datafield: 'account_name', width: 150 },
            { text: 'Balance', datafield: 'bal', width: 100 },
        ];
    }

    render() {
        // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
        // plMatchWiseList when i call this variable then mobx will update the component otherwise not
        this.source.localdata = this.props.reportStore.plMatchAccountWiseList.slice()
        this.dataAdapter.dataBind()
        
        return (
            <div>
                <h5>Report - PL Match AccountWise</h5>
                <JqxGrid key={Math.random()} ref="jqxgrid" source={this.dataAdapter} columns={this.columns} 
                    width={"100%"} height={500} 
                    pageable={true} sortable={true} altrows={true} enabletooltips={true} 
                    editable={false}  filterable={true} showfilterrow={true} />
            </div>
        );
    }
}

export default ReportPlMatchAccountWise;
