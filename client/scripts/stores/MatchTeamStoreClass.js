import { observable } from 'mobx';

import MatchTeamHelper from '../helpers/MatchTeamHelper'

export class MatchTeamStoreClass {
	@observable fetched = false;
	@observable matchTeam = {};
	@observable matchTeamList = [];

	fetchList(matchId) {
		MatchTeamHelper.index({
			match_id: matchId
		}).then((res) => {
		    this.matchTeamList = res.data
		})
  	}

  	fetch(matchTeamId) {
		MatchTeamHelper.show(matchTeamId).then((res) => {
		    this.matchTeam = res.data
		})
  	}
}

