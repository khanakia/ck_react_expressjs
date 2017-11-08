import { observable } from 'mobx';

import MatchHelper from '../helpers/MatchHelper'

export class MatchStoreClass {
	@observable fetched = false;
	@observable match = {};
	@observable matchList = [];
	@observable teamsList = [];

	fetchList() {
		MatchHelper.index().then((res) => {
		    this.matchList = res.data
		})
  	}

  	fetch(matchId) {
		MatchHelper.show(matchId).then((res) => {
		    this.match = res.data
		})
  	}

  	fetchTeams(matchId) {
		axios.get('/match_teams', {
  			params : {
  				match_id: matchId
  			}
  		})
	    .then((res) => {
	    	this.teamsList = res.data
	    })
	    .catch(() => this.fetched = false);
  	}
}

