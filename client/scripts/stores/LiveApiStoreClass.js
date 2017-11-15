import { observable } from 'mobx';

export class LiveApiStoreClass {
	@observable fetched = false;
	
	@observable matchScheduleList = [];
	
	fetchMatchScheduleList() {
		axios.get('/liveapis/match_schdules', {
  		})
	    .then((res) => {
	    	this.matchScheduleList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	
}

