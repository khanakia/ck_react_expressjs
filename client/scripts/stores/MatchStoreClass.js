import { observable } from 'mobx';

import MatchHelper from '../helpers/MatchHelper'
import { API_URL_MATCH_TEAMS } from "../Constant"


export class MatchStoreClass {
	@observable fetched = false;
	@observable.ref match = {};
	@observable.shallow matchList = [];
	@observable.shallow teamsList = [];

	fetchList(params) {
		MatchHelper.index(params).then((res) => {
		    this.matchList = res.data
		})
  	}

  	fetch(matchId) {
		var axios = MatchHelper.show(matchId)
		axios.then((res) => {
		    this.match = res.data
		})
		return axios
  	}

  	fetchTeams(matchId) {
		axios.get(API_URL_MATCH_TEAMS, {
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

