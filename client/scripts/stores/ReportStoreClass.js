import { observable } from 'mobx';

import {
	API_URL_REPORTS_JOURNAL_SUMMARY,
	API_URL_REPORTS_CONNECT_LIST_MATCHES,
	API_URL_REPORTS_CONNECT_REPORT,
	API_URL_REPORTS_BALANCE_SHEET,
	API_URL_REPORTS_PL_MATCH_ACCOUNTWISE,
	API_URL_REPORTS_PL_MATCHWISE,
	API_URL_REPORTS_ACTIVITY_LOG,
	API_URL_MATCH_ENTRIES_BEFORE_DECLARATION
} from "../Constant"

export class ReportStoreClass {
	@observable fetched = false;
	
	
	@observable accountBalanceList = [];
	@observable plMatchAccountWiseList = [];
	@observable plMatchWiseList = [];
	@observable journalSummaryList = [];
	@observable connectListMatches = [];
	@observable connectReportList = [];
	@observable activityLogList = [];
	@observable beforeDeclarationList = [];


	fetchAccountBalanceList() {
		axios.get(API_URL_REPORTS_BALANCE_SHEET, {
  		})
	    .then((res) => {
	    	this.accountBalanceList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	fetchConnectListMatches() {
		axios.get(API_URL_REPORTS_CONNECT_LIST_MATCHES, {
  		})
	    .then((res) => {
	    	this.connectListMatches = res.data
	    })
	    .catch(() => this.fetched = false);
	}


	fetchConnectReportList(filters = []) {
		axios({
	    method: 'post',
	      url: API_URL_REPORTS_CONNECT_REPORT,
	      data: filters
	    })
	    .then((res) => {
	    	this.connectReportList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	fetchPlMatchAccountWiseList() {
		axios.get(API_URL_REPORTS_PL_MATCH_ACCOUNTWISE, {
  		})
	    .then((res) => {
	    	this.plMatchAccountWiseList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	fetchPlMatchWiseList() {
		axios.get(API_URL_REPORTS_PL_MATCHWISE, {
  		})
	    .then((res) => {
	    	this.plMatchWiseList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	fetchJournalSummary() {
		axios.get(API_URL_REPORTS_JOURNAL_SUMMARY, {
  		})
	    .then((res) => {
	    	this.journalSummaryList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	fetchActivityLogList() {
		axios.get(API_URL_REPORTS_ACTIVITY_LOG, {
  		})
	    .then((res) => {
	    	this.activityLogList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

	fetchBeforeDeclarationList(params) {
		axios.get(API_URL_MATCH_ENTRIES_BEFORE_DECLARATION, {
			params : params
  		})
	    .then((res) => {
	    	this.beforeDeclarationList = res.data
	    })
	    .catch(() => this.fetched = false);
	}
}

