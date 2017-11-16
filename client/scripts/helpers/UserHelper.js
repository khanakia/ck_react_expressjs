import {
    API_URL_USER,
    API_URL_CHANGE_PWD
} from '../Constant.js'

export default class UserHelper {
    static index(params) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_USER,
            params: params
        })
    }

    static show(id) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_USER + "/" + id
        })
    }

    static store(data) {
        return axios({
            method: 'post',
            url: API_URL_USER,
            headers: Auth.header(),
            data: data
        })
    }

    static update(id, data) {
        return axios({
            method: 'put',
            headers: Auth.header(),
            url: API_URL_USER + "/" + id,
            data: data,
        })
    }


    static save(data, id = null) {
        // const dataJson = URI.parseQuery(data)
        if (id) {
            var ajaxObj = UserHelper.update(id, data)
        } else {
            var ajaxObj = UserHelper.store(data)
        }
        return ajaxObj;
    }


    static changePassword(param) {
        return axios({
            method: 'post',
            url: API_URL_CHANGE_PWD,
            headers: Auth.header(),
            data: param,
        });
    }
}
