import { observable } from 'mobx';

// import JournalHelper from '../helpers/JournalHelper'
import JournalEntryHelper from '../helpers/JournalEntryHelper'

export class JournalEntryStoreClass {
	@observable fetched = false;
	@observable journal = {};
	@observable journalEntriesList = [];
	@observable accountBalanceList = [];
	@observable selectedAccMonFinalBal = 0;
	@observable selectedAccBal = 0;


	fetchAccountBalanceObject(accountId) {
		axios.get('/journal_entries/account/'+accountId+'/balance', {
  		})
	    .then((res) => {
	    	this.selectedAccMonFinalBal = res.data.monFinalBal
	    	this.selectedAccBal = res.data.totalBal
	    })
	    .catch(() => this.fetched = false);
	}

	fetchAccountBalanceList() {
		axios.get('/journal_entries/balance', {
  		})
	    .then((res) => {
	    	this.accountBalanceList = res.data
	    })
	    .catch(() => this.fetched = false);
	}

  	fetchListByAccount(account_id, is_monday_final=false) {
		axios.get('/journal_entries', {
  			params : {
  				account_id: account_id,
  				is_monday_final : is_monday_final
  			}
  		})
	    .then((res) => {
	    	this.journalEntriesList = res.data
	    })
	    .catch(() => this.fetched = false);
  	}

  
}

