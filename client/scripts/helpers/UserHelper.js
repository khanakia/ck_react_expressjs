import {
        API_URL_USER,
        API_URL_CHANGE_PWD
    } from '../Constant.js'


import Auth from './auth.js'

export default class UserHelper {
    constructor() {

    }

    static index(params) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: "/users",
            params: params
        })
    }

    static show(id) {
        return axios({
        method: 'get',
        headers: Auth.header(),
          url: "/users/"+id
        })
    }

    static store(data) {
        return axios({
        method: 'post',
          url: "/users",
          headers: Auth.header(),
          data: data
        })
    }

    static update(id,data) {
        return axios({
          method: 'put',
          url: "/users/" + id,
          headers: Auth.header(),
          data: data,
        })
    }


    static save(data, id=null) {
        // const dataJson = URI.parseQuery(data)
        if(id) {
            var ajaxObj = UserHelper.update(id,data)
        } else {
            var ajaxObj = UserHelper.store(data)
        }
        return ajaxObj;
    }

    static showCurrent() {
        return axios({
            method: 'get',
            url: API_URL_USER + '/show_current',
            headers: Auth.header(),
        });
    }


    static changePassword(param) {
        return axios({
            method: 'post',
            url: API_URL_CHANGE_PWD ,
            headers: Auth.header(),
            data : param,
        });
    }
}

