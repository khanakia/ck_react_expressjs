import { API_URL_SESSIONS } from "../Constant"

export default class SessionHelper {

    static index(data) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_SESSIONS
        })
    }

    static show(id) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_SESSIONS + "/" + id
        })
    }

    static store(data) {
        return axios({
            method: 'post',
            headers: Auth.header(),
            url: API_URL_SESSIONS,
            data: data
        })
    }

    static update(id, data) {
        return axios({
            method: 'put',
            headers: Auth.header(),
            url: API_URL_SESSIONS + "/" + id,
            data: data
        })
    }


    static delete(id) {
        return axios({
            method: 'delete',
            headers: Auth.header(),
            url: API_URL_SESSIONS + "/" + id
        })
    }

    static save(data, id = null) {
        // const dataJson = URI.parseQuery(data)
        if (id) {
            var ajaxObj = SessionHelper.update(id, data)
        } else {
            var ajaxObj = SessionHelper.store(data)
        }
        return ajaxObj;
    }
}
