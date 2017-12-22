import { observable, action } from 'mobx';

import JournalEntryHelper from '../helpers/JournalEntryHelper'

export class JournalEntryStoreClass {
    @observable fetched = false;
    @observable.ref journal = {};
    @observable.shallow journalEntriesList = [];
    // @observable accountBalanceList = [];
    @observable selectedAccMonFinalBal = 0;
    @observable selectedAccCurrentBal = 0;
    @observable selectedAccBal = 0;



    fetchAll(accountId, is_monday_final = false) {
        axios.all([
            this.fetchListByAccount(accountId, is_monday_final),
            this.fetchAccountBalanceObject(accountId)
        ])
        .then(axios.spread(action((res1, res2) => {            
            this.journalEntriesList = res1.data
            this.selectedAccMonFinalBal = res2.data.monFinalBal
            this.selectedAccBal = res2.data.totalBal
            this.selectedAccCurrentBal = res2.data.currentBal

        })));
    }


    @action fetchAccountBalanceObject(accountId) {
        return JournalEntryHelper.accountBalance(accountId)
            // .then((res) => {
            //     this.selectedAccMonFinalBal = res.data.monFinalBal
            //     this.selectedAccBal = res.data.totalBal
            //     this.selectedAccCurrentBal = res.data.currentBal
            // })
            // .catch(() => this.fetched = false);
    }

    @action fetchListByAccount(accountId, is_monday_final = false) {
        var params = {
            account_id: accountId,
            is_monday_final: is_monday_final
        }

        // stores.ajaxStore.increment()
       return JournalEntryHelper.index(params)
            // .then((res) => {
            //     this.journalEntriesList = res.data
            //     stores.ajaxStore.decrement()
            // })
            // .catch(() => this.fetched = false);
    }


}
