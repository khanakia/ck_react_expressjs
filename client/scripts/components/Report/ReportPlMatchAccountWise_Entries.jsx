import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

import MatchEntryGrid from '../MatchEntry/MatchEntryGrid.jsx'
import SessionEntryGrid from '../SessionEntry/SessionEntryGrid'


import {
    
    API_URL_REPORTS_PL_MATCH_ACCOUNTWISE_ENTRIES,

} from "../../Constant"

// @inject('reportStore')
// @observer
class ReportPlMatchAccountWise_Entries extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entriesList: []
        }
    }

    static defaultProps = {
        ref_type: null,
        ref_id: null,
        account_id: null,
    }

    componentDidMount() {
        this.fetch(this.props.ref_type, this.props.ref_id, this.props.account_id)
    }

    componentWillMount() {
        
    }

    componentDidUpdate() {

    }    

    fetch(ref_type, ref_id, account_id) {
        axios.get(API_URL_REPORTS_PL_MATCH_ACCOUNTWISE_ENTRIES, {
            params : {
                ref_type: ref_type,
                ref_id: ref_id,
                account_id: account_id
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


    renderMatchEntryGrid = () => {
        return (
            <MatchEntryGrid ref="matchGrid" 
                        entriesList={this.state.entriesList}
                        filterable = {false}
                        showfilterrow = {false}
                        selectionmode = {'none'}
                        teamsList={[]} />
        )
    }

    renderSessionEntryGrid = () => {
        return (
            <SessionEntryGrid ref="entryGrid" 
                        entriesList={this.state.entriesList}
                        filterable = {false}
                        showfilterrow = {false}
                        selectionmode = {'none'} />
        )
    }
    

    renderGrid = () => {
        if(this.props.ref_type=="Match") {
            return this.renderMatchEntryGrid()
        }

        if(this.props.ref_type=="Session") {
            return this.renderSessionEntryGrid()
        }
    }
 
    render() {
  
        return (
            <div className="mx-2">
              {this.renderGrid()}
            </div>
        );
    }
}

export default ReportPlMatchAccountWise_Entries;
