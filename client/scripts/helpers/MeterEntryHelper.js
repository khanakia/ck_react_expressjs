import { API_URL_METER_ENTRIES } from "../Constant"

export default class MeterEntryHelper {

    static index(data) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_METER_ENTRIES
        })
    }

    static show(id) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_METER_ENTRIES + "/" + id
        })
    }

    static store(data) {
        return axios({
            method: 'post',
            headers: Auth.header(),
            url: API_URL_METER_ENTRIES,
            data: data
        })
    }

    static update(id, data) {
        return axios({
            method: 'put',
            headers: Auth.header(),
            url: API_URL_METER_ENTRIES + "/" + id,
            data: data
        })
    }


    static delete(id) {
        return axios({
            method: 'delete',
            headers: Auth.header(),
            url: API_URL_METER_ENTRIES + "/" + id
        })
    }

    static save(data, id = null) {
        // const dataJson = URI.parseQuery(data)
        if (id) {
            var ajaxObj = MeterEntryHelper.update(id, data)
        } else {
            var ajaxObj = MeterEntryHelper.store(data)
        }
        return ajaxObj;
    }
}
