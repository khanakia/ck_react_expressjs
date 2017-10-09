import React from 'react'

import ComboBox from './controls/ComboBox.jsx'
import MatchEntryForm from './MatchEntryForm.jsx'
import MatchEntryGrid from './MatchEntryGrid.jsx'
import MatchEntryTeamGrid from './MatchEntry/MatchEntryTeamGrid.jsx'
import MatchEntryAvgBlock from './MatchEntry/MatchEntryAvgBlock.jsx'
import MatchEntryBookDdl from './MatchEntry/MatchEntryBookDdl.jsx'


import MatchHelper from '../helpers/MatchHelper'
import MatchTeamHelper from '../helpers/MatchTeamHelper'

class MatchEntry extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			item: {}
		}
	}
	componentDidMount() {
		this.match_id = this.props.match.params.id
	 	MatchHelper.show(this.props.match.params.id).then((res) => {
	 		this.setState({item:res.data})
	 	})


	 	// MatchTeamHelper.index({
	 	// 	match_id: 'dsfsdfds'
	 	// }).then((res) => {
	 	// 	console.log("MATCH TEAMS" , res)
	 	// })
	 	console.log(this.props.match.params.id)
  }

  onFormSubmitted = () => {
  	this.refs.matchGrid.refresh()
  }
  render() {
  	if(!this.state.item._id) return null;
    return (
      <div>
        <h3>Match Entry</h3>
        <div>
        	<label className="uk-display-inline-block v-align-middle uk-padding-right-5">{this.state.item.match_name} ({this.state.item._id})</label>
        </div>

        <div className="uk-grid">
	     		<div className="uk-width-1-4">
	     			<MatchEntryAvgBlock matchId={this.state.item._id} />
	     			<MatchEntryBookDdl matchId={this.state.item._id} />
	     			<MatchEntryTeamGrid ref="teamGrid" matchId={this.state.item._id} />
	     		</div>
	     		<div className="uk-width-3-4">
	     				<MatchEntryForm matchId={this.state.item._id} onFormSubmitted={this.onFormSubmitted}/>
	     			<div className="uk-margin">
     					<MatchEntryGrid ref="matchGrid" matchId={this.state.item._id} matchTeams={this.state.item.match_teams} />
     				</div>

	     		</div>
        </div>
      </div>
    );
  }
}

export default MatchEntry;
