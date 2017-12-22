import { observable, action, runInAction } from 'mobx';

import AccountHelper from '../helpers/AccountHelper'

export class AccountStoreClass {
	@observable fetched = false;
	@observable.ref account = {};
	@observable.shallow accountList = [];
	
	@action fetchList(params={is_company: null}) {
        AccountHelper.index(params).then( (res) => {
            this.accountList = res.data
        })
    }

  	@action fetch(id) {
		AccountHelper.show(id).then((res) => {
			this.account = res.data
		})
  	}
}

