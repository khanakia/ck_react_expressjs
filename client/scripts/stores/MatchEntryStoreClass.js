import { observable } from 'mobx';

import MatchHelper from '../helpers/MatchHelper'
import MatchTeamHelper from '../helpers/MatchTeamHelper'

import { API_URL_MATCH_ENTRIES, API_URL_MATCH_ENTRIES_PLINFO } from "../Constant"

export class MatchEntryStoreClass {
	@observable fetched = false;
	@observable match = {};
	@observable matchPlInfo = {
		bookNoList : [],
		teamsWinLossList : []
	};
	@observable entriesList = [];

  	fetchList(matchId, bookNo=null) {
		axios.get(API_URL_MATCH_ENTRIES, {
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

  	fetchPlInfo(matchId, bookNo=null) {
  		axios.get(API_URL_MATCH_ENTRIES_PLINFO, {
  			params : {
  				match_id: matchId,
  				book_no: bookNo
  			}
  		})
	    .then((res) => this.matchPlInfo = res.data)
	    .catch(() => this.fetched = false);
  	}
}

