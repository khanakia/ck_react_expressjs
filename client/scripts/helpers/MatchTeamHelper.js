import { API_URL_MATCH_TEAMS } from "../Constant"

export default class MatchTeamHelper {

    static index(data) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_MATCH_TEAMS,
            params: data
        })
    }

    static show(id) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_MATCH_TEAMS + "/" + id
        })
    }

    static store(data) {
        return axios({
            method: 'post',
            headers: Auth.header(),
            url: API_URL_MATCH_TEAMS,
            data: data
        })
    }

    static update(id, data) {
        return axios({
            method: 'put',
            headers: Auth.header(),
            url: API_URL_MATCH_TEAMS + "/" + id,
            data: data
        })
    }


    static delete(id) {
        return axios({
            method: 'delete',
            headers: Auth.header(),
            url: API_URL_MATCH_TEAMS + "/" + id
        })
    }

    static save(data) {
        const dataJson = URI.parseQuery(data)
        if (dataJson._id) {
            var ajaxObj = MatchHelper.update(dataJson._id, data)
        } else {
            var ajaxObj = MatchHelper.store(data)
        }
        return ajaxObj;
    }
}
