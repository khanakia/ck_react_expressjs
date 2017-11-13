import { observable } from 'mobx';

import UserHelper from '../helpers/UserHelper'

export class UserStoreClass {
	@observable fetched = false;
	@observable user = {};
	@observable userList = [];
	
	
	fetchList(params={}) {
        UserHelper.index(params).then( (res) => {
            this.userList = res.data
        })
    }

  	fetch(id) {
		UserHelper.show(id).then((res) => {
		    this.user = res.data
		})
  	}
}

