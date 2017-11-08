import { observable } from 'mobx';

import MatchHelper from '../helpers/MatchHelper'
import MatchTeamHelper from '../helpers/MatchTeamHelper'

export class MatchEntryStoreClass {
	@observable fetched = false;
	@observable match = {};
	@observable matchPlInfo = {
		bookNoList : [],
		teamsWinLossList : []
	};
	@observable entriesList = [];
	// @observable teamsList = [];

 
	// fetch(matchId) {
	//   axios.get('http://localhost:3000/matches/1')
	//     .then(() => this.fetched = true)
	//     .catch(() => this.fetched = false);
	// }

  	fetchList(matchId, bookNo=null) {
		axios.get('/match_entries', {
  			params : {
  				match_id: matchId,
  				book_no: bookNo
  			}
  		})
	    .then((res) => {
	    	this.entriesList = res.data
	    	// console.log(res.data)
	    })
	    .catch(() => this.fetched = false);
  	}

  // 	fetchTeams(matchId) {
		// axios.get('/match_teams', {
  // 			params : {
  // 				match_id: matchId
  // 			}
  // 		})
	 //    .then((res) => {
	 //    	this.teamsList = res.data
	 //    })
	 //    .catch(() => this.fetched = false);
  // 	}

  	fetchPlInfo(matchId, bookNo=null) {
  		axios.get('/match_entries/match_plinfo', {
  			params : {
  				match_id: matchId,
  				book_no: bookNo
  			}
  		})
	    .then((res) => this.matchPlInfo = res.data)
	    .catch(() => this.fetched = false);
  	}
}

