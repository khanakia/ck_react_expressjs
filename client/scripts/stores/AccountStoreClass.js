import { observable } from 'mobx';

import AccountHelper from '../helpers/AccountHelper'

export class AccountStoreClass {
	@observable fetched = false;
	@observable account = {};
	@observable accountList = [];
	
	
	fetchList() {
        AccountHelper.index().then( (res) => {
            this.accountList = res.data
        })
    }

  	fetch(id) {
		AccountHelper.show(id).then((res) => {
		    this.account = res.data
		})
  	}
}

