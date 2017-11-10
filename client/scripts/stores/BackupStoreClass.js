import { observable } from 'mobx';

export class BackupStoreClass {
	@observable fetched = false;
	@observable dbBackupList = [];
	
	fetchDbBackupList(matchId=null) {
		axios.get('/backups/list_db_backup_files')
	    .then((res) => {
	    	this.dbBackupList = res.data
	    })
	    .catch(() => this.fetched = false);
  	}

  // 	backupDb() {
		// axios.get('/backups/backup_db')
	 //    .then((res) => {
	 //    	// this.sessionList = res.data
	 //    })
	 //    .catch(() => this.fetched = false);
  // 	}

  // 	fetchList(dirname=null) {
		// axios.get('/backups/restore_db', {
  // 			params : {
  // 				dirname: dirname,
  // 			}
  // 		})
	 //    .then((res) => {
	 //    	// this.sessionList = res.data
	 //    })
	 //    .catch(() => this.fetched = false);
  // 	}
}

