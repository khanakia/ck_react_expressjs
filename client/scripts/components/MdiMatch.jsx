import React, { Component } from "react";

import MatchInfoBlock from "./Match/MatchInfoBlock"
import SessionEntry from "./SessionEntry"

import { inject, observer } from 'mobx-react';


@inject('matchStore')
@observer
class MdiMatch extends Component {
	componentWillMount() {
		window.currentPage = "mdiMatchPage"
	}

	componentDidMount() {
		const matchId = this.props.match.params.id
	    this.props.matchStore.fetch(matchId)
	  }

    render() {
    	const matchId = this.props.match.params.id
    	const {match} = this.props.matchStore

        return (
	        <div className="mdiPage">
	        	<div>
	        		<MatchInfoBlock item={match} />
	        	</div>
			    <ul className="nav nav-pills mb-3" id="mdi-tab" role="tablist">
			        <li className="nav-item">
			            <a className="nav-link active" id="pills-match-tab" data-toggle="tab" href="#pills-match" role="tab" aria-controls="pills-match" aria-expanded="true">
			            	Match  <span className="badge badge-light">ALT+1</span>
			            </a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link" id="pills-session-tab" data-toggle="tab" href="#pills-session" role="tab" aria-controls="pills-session" aria-expanded="true">
			            	Session <span className="badge badge-light">ALT+2</span>
			            </a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link" id="pills-player-tab" data-toggle="tab" href="#pills-player" role="tab" aria-controls="pills-player" aria-expanded="true">
			            	Meter <span className="badge badge-light">ALT+3</span>
			            </a>
			        </li>
			    
			    </ul>
			    <div className="tab-content" id="pills-tabContent">
			        <div className="tab-pane fade show active" id="pills-match" role="tabpanel" aria-labelledby="pills-match-tab">
			        	{/*<SessionEntry matchId={matchId} />*/}
			        	
			        </div>
			        <div className="tab-pane fade" id="pills-session" role="tabpanel" aria-labelledby="pills-session-tab">
			        	
			        </div>
			        <div className="tab-pane fade" id="pills-player" role="tabpanel" aria-labelledby="pills-player-tab">
			        	
			        </div>
			    
			    </div>
	        </div>
        );
    }
}

export default MdiMatch;
