import { observable } from 'mobx';

export class ReportStoreClass {
	@observable fetched = false;
	
	
	@observable plMatchAccountWiseList = [];
	@observable plMatchWiseList = [];
	@observable connectListMatches = [];
	@observable connectReportList = [];
	
	fetchConnectListMatches() {
		axios.get('/reports/connect_list_matches', {
  		})
	    .then((res) => {
	    	this.connectListMatches = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	fetchConnectReportList(filters = []) {
		axios({
	    method: 'post',
	      url: "/reports/connect_report",
	      data: filters
	    })
	    .then((res) => {
	    	this.connectReportList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

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

