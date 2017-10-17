import { observable, action } from 'mobx';

import MatchHelper from '../helpers/MatchHelper'
import SessionHelper from '../helpers/SessionHelper'
import SessionEntryHelper from '../helpers/SessionEntryHelper'

export class SessionEntryStoreClass {
	@observable fetched = false;	
	@observable sessionEntriesList = [];
	@observable sessionPlInfo = {};
	@observable sessionWinLossList = [];

	@observable displayData = {
		sessionEntriesList: [],
		sessionPlInfo: {},
		sessionWinLossList: [], 
	}

	fetch(sessionId) {
  		axios.all([
			this.fetchList(sessionId),
         	this.fetchPlInfo(sessionId),
         	this.fetchWinLossList(sessionId)
  		])
	  	.then(axios.spread( action((res1, res2, res3) => {

	  	 	this.sessionEntriesList = res1.data;
			this.sessionPlInfo = res2.data;
			this.sessionWinLossList = res3.data;

		})));
	}
 
	@action
 	fetchList(sessionId) {
		return axios.get('/session_entries', {
  			params : {
  				session_id: sessionId  				
  			}
  		})
  	}

  	@action
  	fetchPlInfo(sessionId) {
  		return axios.get('/session_entries/session_plinfo', {
  			params : {
  				session_id: sessionId
  			}
  		})
  	}

  	fetchWinLossList(sessionId) {
		return axios.get('/session_entries/winlosslist/' + sessionId, {
  			params : {
  				session_id: sessionId  				
  			}
  		})
  	}
}

