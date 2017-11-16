import { API_URL_BACKUPS_LISTDBFILES, API_URL_BACKUPS_BACKUP_DB, API_URL_BACKUPS_RESTORE_DB } from "../Constant"

export default class BackupHelper {

    static dbBackupList(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_BACKUPS_LISTDBFILES,
            params: params
        })
    }

    static createDbBackup(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_BACKUPS_BACKUP_DB,
            params: params
        })
    }

    static restoreDbBackup(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_BACKUPS_RESTORE_DB,
            params: params
        })
    }

    
}
