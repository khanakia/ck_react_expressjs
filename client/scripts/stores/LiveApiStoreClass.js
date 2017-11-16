import { observable } from 'mobx';

import { API_URL_LIVE_MATCHSCHEDULES } from "../Constant"

export class LiveApiStoreClass {
	@observable fetched = false;
	
	@observable matchScheduleList = [];
	
	fetchMatchScheduleList() {
		axios.get(API_URL_LIVE_MATCHSCHEDULES, {
  		})
	    .then((res) => {
	    	this.matchScheduleList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	
}

