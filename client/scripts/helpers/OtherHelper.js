import { 
    API_URL_OTHERS_SERVER_DBSTATUS,
    API_URL_OTHERS_START_DB_SERVER,
    API_URL_OTHERS_REMOVE_ALL_RECORDS,
    API_URL_OTHERS_REMOVE_LEDGER_RECORDS,
    API_URL_OTHERS_CLEAR_WHOLE_DB,
    API_URL_OTHERS_SETTINGS
} from "../Constant"

export default class OtherHelper {

    static removeAllRecords(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_OTHERS_REMOVE_ALL_RECORDS,
            params: params
        })
    }

    static removeLedgerRecords(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_OTHERS_REMOVE_LEDGER_RECORDS,
            params: params
        })
    }

    static clearWholeDb(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_OTHERS_CLEAR_WHOLE_DB,
            params: params
        })
    }

    static dbServerStatus(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_OTHERS_SERVER_DBSTATUS,
            params: params
        })
    }

    static startDbServer(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_OTHERS_START_DB_SERVER,
            params: params
        })
    }

    static saveSettings(data) {
        return axios({
            method: 'post',
            headers: Auth.header(),
            url: API_URL_OTHERS_SETTINGS,
            data: data
        })
    }

    static getSettings() {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_OTHERS_SETTINGS,
        })
    }

    
}
