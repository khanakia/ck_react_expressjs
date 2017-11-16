import { API_URL_TEAMS } from "../Constant"

export default class TeamHelper {

    static store(data) {
        return axios({
            method: 'post',
            headers: Auth.header(),
            url: API_URL_TEAMS,
            data: data
        })
    }

    static update(data) {
        return axios({
            method: 'put',
            headers: Auth.header(),
            url: API_URL_TEAMS + "/" + data.id,
            data: data
        })
    }


    static delete(id) {
        return axios({
            method: 'delete',
            headers: Auth.header(),
            url: API_URL_TEAMS + "/" + id
        })
    }
}
