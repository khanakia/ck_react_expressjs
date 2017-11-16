import { observable } from 'mobx';

import JournalEntryHelper from '../helpers/JournalEntryHelper'

export class JournalEntryStoreClass {
    @observable fetched = false;
    @observable journal = {};
    @observable journalEntriesList = [];
    // @observable accountBalanceList = [];
    @observable selectedAccMonFinalBal = 0;
    @observable selectedAccCurrentBal = 0;
    @observable selectedAccBal = 0;


    fetchAccountBalanceObject(accountId) {
        JournalEntryHelper.accountBalance(accountId)
            .then((res) => {
                this.selectedAccMonFinalBal = res.data.monFinalBal
                this.selectedAccBal = res.data.totalBal
                this.selectedAccCurrentBal = res.data.currentBal
            })
            .catch(() => this.fetched = false);
    }

    fetchListByAccount(account_id, is_monday_final = false) {
        var params = {
            account_id: account_id,
            is_monday_final: is_monday_final
        }
        JournalEntryHelper.index(params)
            .then((res) => {
                this.journalEntriesList = res.data
            })
            .catch(() => this.fetched = false);
    }


}
