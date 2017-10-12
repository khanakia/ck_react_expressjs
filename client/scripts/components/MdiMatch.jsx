import React, { Component } from "react";
import SessionEntry from "./SessionEntry"
class MdiMatch extends Component {


    render() {
    	const matchId = this.props.match.params.id

        return (
	        <div>
			    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
			        <li className="nav-item">
			            <a className="nav-link active" id="pills-match-tab" data-toggle="pill" href="#pills-match" role="tab" aria-controls="pills-match" aria-expanded="true">Match</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link" id="pills-session-tab" data-toggle="pill" href="#pills-session" role="tab" aria-controls="pills-session" aria-expanded="true">Session</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link" id="pills-player-tab" data-toggle="pill" href="#pills-player" role="tab" aria-controls="pills-player" aria-expanded="true">Meter</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link" id="pills-browser-tab" data-toggle="pill" href="#pills-browser" role="tab" aria-controls="pills-browser" aria-expanded="true">Browser</a>
			        </li>
			    </ul>
			    <div className="tab-content" id="pills-tabContent">
			        <div className="tab-pane fade show active" id="pills-match" role="tabpanel" aria-labelledby="pills-match-tab">
			        	<SessionEntry matchId={matchId} />
			        	
			        </div>
			        <div className="tab-pane fade" id="pills-session" role="tabpanel" aria-labelledby="pills-session-tab">
			        	
			        </div>
			        <div className="tab-pane fade" id="pills-player" role="tabpanel" aria-labelledby="pills-player-tab">
			        	
			        </div>
			        <div className="tab-pane fade" id="pills-browser" role="tabpanel" aria-labelledby="pills-browser-tab">
			        	
			        </div>
			    </div>
	        </div>
        );
    }
}

export default MdiMatch;
