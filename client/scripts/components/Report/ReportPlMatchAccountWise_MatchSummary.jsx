import React, { Component } from "react";
import { render } from 'react-dom'

import { inject, observer } from 'mobx-react';
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

import ReportPlMatchAccountWise_Entries from './ReportPlMatchAccountWise_Entries';
import {
    
    API_URL_REPORTS_PL_MATCH_ACCOUNTWISE_MATCHSUMMARY,

} from "../../Constant"

// @inject('reportStore')
// @observer
class ReportPlMatchAccountWise_MatchSummary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            match_id: null,
            account_id: null,
            selected: false,
            entriesList: []
        }
    }

    static defaultProps = {
        match_id: null,
        account_id: null,
        entriesList: []
    }

    componentDidMount() {
        // console.log(this.props)
        // this.props.reportStore.fetchPlMatchAccountWise_MatchSummaryList(this.props.match_id, this.props.account_id)

        this.fetch(this.props.match_id, this.props.account_id)
    }

    componentWillMount() {
        this.initDataAdapter()        
    }

    componentDidUpdate() {

    }    

    fetch(matchId, accountId) {
        axios.get(API_URL_REPORTS_PL_MATCH_ACCOUNTWISE_MATCHSUMMARY, {
            params : {
                match_id: matchId,
                account_id: accountId
            }
        })
        .then((res) => {
            this.setState({
                entriesList:res.data
            })
            // this.plMatchAccountWise_MatchSummaryList = res.data
        })
        .catch(() => this.fetched = false);
    }

    
    initDataAdapter() {
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'ref_type', type: 'string' },                
                { name: 'ref_id', type: 'string' },
                { name: 'total', type: 'string' },
                { name: 'account_id', type: 'string' },
            ],
            localdata: this.state.entriesList,
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'Name', datafield: 'name', width: 150 },
            { text: 'Ref Type', datafield: 'ref_type', width: 150 },
            { text: 'Ref Id', datafield: 'ref_id', width: 100 },
            { text: 'Balance', datafield: 'total', width: 100 },
        ];
    }

    render() {
        // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
        // plMatchWiseList when i call this variable then mobx will update the component otherwise not
        this.source.localdata = this.state.entriesList
        this.dataAdapter.dataBind()


        let initrowdetails = (index, parentElement, gridElement, record) => {
            // console.log(index, parentElement, gridElement, record)
            let grid = $($(parentElement).children()[0]);
            let grid1 = ($(parentElement).children()[0]);
            if (grid != null) {
                console.log(record)
                render(<ReportPlMatchAccountWise_Entries ref_type={record.ref_type} ref_id={record.ref_id} account_id={record.account_id} key={Math.random()} /> , grid1);
            }
           // return 'dsfds'
        }

        let rowdetailstemplate = { rowdetails: '<div id="grid" class="grid" style="margin: 10px;"></div>', rowdetailsheight: 220, rowdetailshidden: true };
        
        return (
            <div className="mx-2">
                <JqxGrid ref="jqxgrid11" source={this.dataAdapter} columns={this.columns} 
                    width={"100%"} height={450}  selectionmode={'none'}
                    rowdetails={true} rowdetailstemplate={rowdetailstemplate} initrowdetails={initrowdetails}
                    pageable={false} sortable={false} altrows={true} enabletooltips={false} 
                    editable={false}  filterable={false} showfilterrow={false} />
            </div>
        );
    }
}

export default ReportPlMatchAccountWise_MatchSummary;
