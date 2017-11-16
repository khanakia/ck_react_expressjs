import { API_URL_METERS } from "../Constant"

export default class MeterHelper {

    static index(data) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_METERS
        })
    }

    static show(id) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_METERS + "/" + id
        })
    }

    static store(data) {
        return axios({
            method: 'post',
            headers: Auth.header(),
            url: API_URL_METERS,
            data: data
        })
    }

    static update(id, data) {
        return axios({
            method: 'put',
            headers: Auth.header(),
            url: API_URL_METERS + "/" + id,
            data: data
        })
    }


    static delete(id) {
        return axios({
            method: 'delete',
            headers: Auth.header(),
            url: API_URL_METERS + "/" + id
        })
    }

    static save(data, id = null) {
        // const dataJson = URI.parseQuery(data)
        if (id) {
            var ajaxObj = MeterHelper.update(id, data)
        } else {
            var ajaxObj = MeterHelper.store(data)
        }
        return ajaxObj;
    }
}
