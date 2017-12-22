import { observable } from 'mobx';

import { API_URL_LIVE_MATCHSCHEDULES } from "../Constant"

export class LiveApiStoreClass {
	@observable fetched = false;
	
	@observable.shallow matchScheduleList = [];
	
	fetchMatchScheduleList(params={}) {
		// axios.get(API_URL_LIVE_MATCHSCHEDULES, {
  // 		})
  		axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_LIVE_MATCHSCHEDULES,
            params: params
        })
	    .then((res) => {
	    	this.matchScheduleList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	
}

