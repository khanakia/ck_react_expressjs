import { 
    API_URL_EXPORTS_BALANCE_SHEET,
    API_URL_EXPORTS_CONNECT_REPORT,
    API_URL_EXPORTS_PL_MATCH_ACCOUNTWISE,
    API_URL_EXPORTS_PL_MATCHWISE
} from "../Constant"

export default class ExportHelper {

    static exportBalanceSheet(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_EXPORTS_BALANCE_SHEET,
            params: params
        })
    }

    static exportConnectReport(data={}) {
        return axios({
            method: 'post',
            headers: Auth.header(),
            url: API_URL_EXPORTS_CONNECT_REPORT,
            data: data
        })
    }

    static exportPlMatchWise(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_EXPORTS_PL_MATCHWISE,
            params: params
        })
    }

    static exportPlMatchAccountWise(params={}) {
        return axios({
            method: 'get',
            headers: Auth.header(),
            url: API_URL_EXPORTS_PL_MATCH_ACCOUNTWISE,
            params: params
        })
    }

    
}
