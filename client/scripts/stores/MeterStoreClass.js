import { observable } from 'mobx';

import MeterHelper from '../helpers/MeterHelper'
import { API_URL_METERS } from "../Constant"

export class MeterStoreClass {
	@observable fetched = false;
	@observable meterList = [];
	
	fetchList(matchId=null) {
		axios.get(API_URL_METERS, {
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

