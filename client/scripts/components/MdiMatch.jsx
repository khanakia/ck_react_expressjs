import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import MatchInfoBlock from "./Match/MatchInfoBlock"
import MatchEntry from "./MatchEntry"
import SessionEntry from "./SessionEntry"
import MeterEntry from "./MeterEntry"
import GlobalHelper from "../helpers/GlobalHelper"



@inject('matchStore')
@observer
class MdiMatch extends Component {
	componentWillMount() {
		// console.log("Mounted")
		window.currentPage = "mdiMatchPage"
	}

	componentDidMount() {
		window.$mdiTab = $(this.refs.mdiTab)

		const matchId = this.props.match.params.id
		localStorage.setItem('matchId', matchId)
	    this.props.matchStore.fetch(matchId)

		this.init()
	    
	}

	componentDidUpdate() {
		// GlobalHelper.mounstrapFormInit()
	}


	init() {
		var moustrapMdiPageClass = new  Mousetrap()
		moustrapMdiPageClass.stopCallback = function(e, element, combo) {
		    return false;
		}
		moustrapMdiPageClass.bind('ctrl+1', function(e) {
	    	// $('#mdi-tab li:eq(0) a').tab('show')
	    	$mdiTab.find('li:eq(0) a').tab('show')
	    });

	    moustrapMdiPageClass.bind('ctrl+2', function(e) {
	    	// $('#mdi-tab li:eq(1) a').tab('show')
	    	$mdiTab.find('li:eq(1) a').tab('show')
	    });

	    moustrapMdiPageClass.bind('ctrl+3', function(e) {
	    	// $('#mdi-tab li:eq(2) a').tab('show')
	    	$mdiTab.find('li:eq(2) a').tab('show')
	    });

	    $mdiTab.find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		  	var href = jQuery(e.target).attr('href');
		  	// console.log(href)
		  	if(href=="#pills-match") {
		  		jQuery(".idinput-match").focus();
		  	}

		  	if(href=="#pills-session") {
		  		jQuery(".idinput-session").focus();
		  	}

		  	if(href=="#pills-meter") {
		  		jQuery(".idinput-meter").focus();
		  	}
		})
	}

    render() {
    	const matchId = this.props.match.params.id
    	const {match} = this.props.matchStore

        return (
	        <div className="mdiPage">
	        	<div>
	        		<MatchInfoBlock item={match} />
	        	</div>
			    <ul className="nav nav-pills mb-2" id="mdi-tab" role="tablist" ref="mdiTab">
			        <li className="nav-item">
			            <a className="nav-link active" id="pills-match-tab" data-toggle="tab" href="#pills-match" role="tab" aria-controls="pills-match" aria-expanded="true">
			            	Match  <span className="badge badge-light">CTRL+1</span>
			            </a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link" id="pills-session-tab" data-toggle="tab" href="#pills-session" role="tab" aria-controls="pills-session" aria-expanded="true">
			            	Session <span className="badge badge-light">CTRL+2</span>
			            </a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link" id="pills-meter-tab" data-toggle="tab" href="#pills-meter" role="tab" aria-controls="pills-meter" aria-expanded="true">
			            	Meter <span className="badge badge-light">CTRL+3</span>
			            </a>
			        </li>
			    </ul>
			    <div className="tab-content" id="pills-tabContent">
			        <div className="tab-pane fade show active" id="pills-match" role="tabpanel" aria-labelledby="pills-match-tab">
			        	<MeterEntry matchId={matchId} />
			        	{/*<MatchEntry matchId={matchId} />*/}
			        </div>
			        <div className="tab-pane fade" id="pills-session" role="tabpanel" aria-labelledby="pills-session-tab">
			        	{/*<SessionEntry matchId={matchId} />*/}
			        </div>
			        <div className="tab-pane fade" id="pills-meter" role="tabpanel" aria-labelledby="pills-meter-tab">
			        	Meter
			        </div>		    
			    </div>
	        </div>
        );
    }
}

export default MdiMatch;
