import { observable } from 'mobx';

import BackupHelper from '../helpers/BackupHelper'
import { API_URL_BACKUPS_LISTDBFILES } from "../Constant"

export class BackupStoreClass {
	@observable fetched = false;
	@observable dbBackupList = [];
	
	fetchDbBackupList(matchId=null) {
		// axios.get(API_URL_BACKUPS_LISTDBFILES)
		BackupHelper.dbBackupList()
	    .then((res) => {
	    	this.dbBackupList = res.data
	    })
	    .catch(() => this.fetched = false);
  	}
}

