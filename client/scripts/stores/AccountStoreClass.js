import { observable } from 'mobx';

import AccountHelper from '../helpers/AccountHelper'

export class AccountStoreClass {
	@observable fetched = false;
	@observable account = {};
	@observable accountList = [];
	
	
	fetchList(params={is_company: null}) {
        AccountHelper.index(params).then( (res) => {
            this.accountList = res.data
        })
    }

  	fetch(id) {
		AccountHelper.show(id).then((res) => {
		    this.account = res.data
		})
  	}
}

