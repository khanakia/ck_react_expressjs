import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import JqxGrid from './jqwidgets-react/react_jqxgrid.js';
import ExportHelper from '../helpers/ExportHelper'

import ComboBoxLocal from './controls/ComboBoxLocal.jsx'
import { LOCALSTORAGE_MATCHID } from "../Constant"


@inject('matchStore')
@inject('reportStore')
@observer
class ReportBeforeDeclaration extends Component {

    componentWillMount() {
        
    }

    componentDidMount() {
    	this.props.matchStore.fetchList({is_declared: false, is_abandoned: false})

        const matchId = localStorage.getItem(LOCALSTORAGE_MATCHID);
        this.props.matchStore.fetchTeams(matchId)
        this.props.reportStore.fetchBeforeDeclarationList({match_id: matchId})

        // this.props.reportStore.fetchBeforeDeclarationList()
    }

    componentDidUpdate() {
        // this.source.localdata = this.props.reportStore.plMatchAccountWiseList.slice()
        // this.dataAdapter.dataBind()
        // this.initDataAdapter()
    }    

    // exportReport = () => {
    //     // this.refs.jqxgrid.exportdata('pdf', 'pl_match_wise');
    //     // axios.get('/exportreports/pl_match_accountwise', {
    //     // })
    //     ExportHelper.exportPlMatchAccountWise()
    //     .then((res) => {
    //         window.location.href = res.data.fileDownloadUrl  
    //     })
    // }
    
    initDataAdapter() {
    }


    combMemberOnClose = () => {
    	const matchId = (this.refs.comboMember.getSelectedValue())
    	this.props.matchStore.fetchTeams(matchId)
    	this.props.reportStore.fetchBeforeDeclarationList({match_id: matchId})
    	console.log(matchId)
    }

    render() {
        
        // this.source.localdata = this.props.reportStore.beforeDeclarationList.slice()
        // this.dataAdapter.dataBind()

        
        const {matchList, teamsList} = this.props.matchStore
        // console.log(teamsList)
    	// if(teamsList.length==0) return null


    	var datafields =  [
	            { name: 'account_name', type: 'string' },
	            { name: 'account_id', type: 'string' },
	            { name: 'match_id', type: 'string' },
	            
            ]

    	if (teamsList.length > 0) {
            teamsList.map(function(item, i) {
                datafields.push({
                    name: item.team_name
                })
            })
        }

        this.source = {
            datatype: 'json',
            datafields: datafields,
            localdata: this.props.reportStore.beforeDeclarationList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'Party', datafield: 'account_name', width: 150 },
        ];

        teamsList.map((item, i) => {
            this.columns.push({
                text: item.team_name,
                datafield: item.team_name,
                width: 100
            })
        })
       
        return (
            <div className="page d-inline-block mx-2">
                <h6><i className="fa fa-bar-chart"></i> Report - Before Declaration</h6>
                <div className="mb-3">
                	<label>Select Match:</label>
                	<ComboBoxLocal width={"200"} ref="comboMember" field_id="match_id" valueMember='_id'
                                            displayMember='match_name' data={matchList} onClose={this.combMemberOnClose} />
                </div>
                {/*<div className="mb-1 text-right">
                    <button ref='pdfExport' onClick={this.exportReport} className="btn btn-sm btn-primary mr-1"><i className="fa fa-file-text-o"></i> Export</button>
                </div>*/}
                <JqxGrid key={Math.random()} ref="jqxgrid" source={this.dataAdapter} columns={this.columns} 
                    width={"1200"} height={500} 
                    pageable={true} sortable={true} altrows={true} enabletooltips={true} 
                    editable={false}  filterable={true} showfilterrow={true} />
            </div>
        );
    }
}

export default ReportBeforeDeclaration;
