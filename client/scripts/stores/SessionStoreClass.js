import { observable } from 'mobx';

import SessionHelper from '../helpers/SessionHelper'

export class SessionStoreClass {
	@observable fetched = false;
	@observable sessionList = [];
	
	fetchList(matchId=null) {
		axios.get('/sessions', {
  			params : {
  				match_id: matchId,
  			}
  		})
	    .then((res) => {
	    	this.sessionList = res.data
	    })
	    .catch(() => this.fetched = false);
  	}
}

