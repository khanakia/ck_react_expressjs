import { API_URL_ACCOUNTS } from "../Constant"

export default class AccountHelper {

    static index(params) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_ACCOUNTS,
            params: params
        })
    }

    static show(id) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_ACCOUNTS + "/" + id
        })
    }

    static store(data) {
        return axios({
            method: 'post',
            headers: Auth.header(),
            url: API_URL_ACCOUNTS,
            data: data
        })
    }

    static update(id, data) {
        return axios({
            method: 'put',
            headers: Auth.header(),
            url: API_URL_ACCOUNTS + "/" + id,
            data: data
        })
    }


    static delete(id) {
        return axios({
            method: 'delete',
            headers: Auth.header(),
            url: API_URL_ACCOUNTS + "/" + id
        })
    }

    static save(data, id = null) {
        // const dataJson = URI.parseQuery(data)
        if (id) {
            var ajaxObj = AccountHelper.update(id, data)
        } else {
            var ajaxObj = AccountHelper.store(data)
        }
        return ajaxObj;
    }
}
