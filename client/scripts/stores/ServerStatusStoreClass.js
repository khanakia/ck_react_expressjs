import { observable } from 'mobx';

import OtherHelper from '../helpers/OtherHelper'

export class ServerStatusStoreClass {
    @observable fetched = false;
    @observable dbServerStatus = 0;

    fetchDbServerStatus(matchId = null) {
        // axios.get(API_URL_OTHERS_SERVER_DBSTATUS, {
        // 			params : {
        // 				match_id: matchId,
        // 			}
        // 		})

        OtherHelper.dbServerStatus()
            .then((res) => {
                this.dbServerStatus = res.data.status
            })
            .catch((err) => {
                console.log(err.response.data.error)
                if (err.response.data.error == 5001) {
                    this.dbServerStatus = 0
                }
            });
    }
}
