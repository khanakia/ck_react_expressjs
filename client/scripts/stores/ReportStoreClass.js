import { observable } from 'mobx';

export class ReportStoreClass {
	@observable fetched = false;
	
	
	@observable plMatchAccountWiseList = [];
	@observable plMatchWiseList = [];
	


	fetchPlMatchAccountWiseList() {
		axios.get('/reports/pl_match_accountwise', {
  		})
	    .then((res) => {
	    	this.plMatchAccountWiseList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	fetchPlMatchWiseList() {
		axios.get('/reports/pl_matchwise', {
  		})
	    .then((res) => {
	    	this.plMatchWiseList = res.data
	    })
	    .catch(() => this.fetched = false);
	}
}

