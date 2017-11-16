import { observable } from 'mobx';

import SessionHelper from '../helpers/SessionHelper'

import { API_URL_SESSIONS } from "../Constant"


export class SessionStoreClass {
	@observable fetched = false;
	@observable sessionList = [];
	
	fetchList(matchId=null) {
		axios.get(API_URL_SESSIONS, {
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

