import { observable, action } from 'mobx';

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


	fetchAll(matchId, bookNo=null) {
		axios.all([
            this.fetchListAction(matchId, bookNo),
            this.fetchPlInfoAction(matchId, bookNo)            
        ])
        .then(axios.spread(action((res1, res2) => {
        	// console.log(res1)
            this.entriesList = res1.data
            this.matchPlInfo = res2.data
        })));
  	}


  	@action
    fetchListAction(matchId, bookNo=null) {
        return axios.get(API_URL_MATCH_ENTRIES, {
  			params : {
  				match_id: matchId,
  				book_no: bookNo
  			}
  		})
    }

    @action
    fetchPlInfoAction(matchId, bookNo=null) {
        return axios.get(API_URL_MATCH_ENTRIES_PLINFO, {
  			params : {
  				match_id: matchId,
  				book_no: bookNo
  			}
  		})
    }

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

