import { observable } from 'mobx';

import MeterHelper from '../helpers/MeterHelper'

export class MeterStoreClass {
	@observable fetched = false;
	@observable meterList = [];
	
	fetchList(matchId=null) {
		axios.get('/meters', {
  			params : {
  				match_id: matchId,
  			}
  		})
	    .then((res) => {
	    	this.meterList = res.data
	    })
	    .catch(() => this.fetched = false);
  	}
}

