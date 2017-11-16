import {API_URL_JOURNAL_ENTRIES, API_URL_JOURNAL_ACCOUNT_BALANCE} from "../Constant"

export default class JournalEntryHelper {

    static index(params) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            params: params,
            url: API_URL_JOURNAL_ENTRIES
        })
    }

    static show(id) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_JOURNAL_ENTRIES + "/" + id
        })
    }

    static store(data) {
        return axios({
            method: 'post',
            headers: Auth.header(),
            url: API_URL_JOURNAL_ENTRIES,
            data: data
        })
    }

    static update(id, data) {
        return axios({
            headers: Auth.header(),
            method: 'put',
            url: API_URL_JOURNAL_ENTRIES + "/" + id,
            data: data
        })
    }


    static delete(id) {
        return axios({
            method: 'delete',
            headers: Auth.header(),
            url: API_URL_JOURNAL_ENTRIES + "/" + id
        })
    }

    static save(data, id = null) {
        // const dataJson = URI.parseQuery(data)
        if (id) {
            var ajaxObj = JournalEntryHelper.update(id, data)
        } else {
            var ajaxObj = JournalEntryHelper.store(data)
        }
        return ajaxObj;
    }

    static accountBalance(accountId) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_JOURNAL_ACCOUNT_BALANCE(accountId)
        })
    }

}
