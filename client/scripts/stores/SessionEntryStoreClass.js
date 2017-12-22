import { observable, action } from 'mobx';

import MatchHelper from '../helpers/MatchHelper'
import SessionHelper from '../helpers/SessionHelper'
import SessionEntryHelper from '../helpers/SessionEntryHelper'

import { API_URL_SESSION_ENTRIES, API_URL_SESSION_ENTRIES_PLINFO, API_URL_SESSION_ENTRIES_WINLOSSLIST } from "../Constant"


export class SessionEntryStoreClass {
    @observable fetched = false;
    @observable.shallow sessionEntriesList = [];
    @observable.ref sessionPlInfo = {};
    @observable.shallow sessionWinLossList = [];

    // this is we are using to scroll to that run in SessionEntryWinLossGrid
    @observable lastEnteredRun = null;

    // @observable displayData = {
    //     sessionEntriesList: [],
    //     sessionPlInfo: {},
    //     sessionWinLossList: [],
    // }

    clearAll() {
        this.sessionEntriesList = []
        this.sessionPlInfo = {}
        this.sessionWinLossList = []
    }

    fetchAll(sessionId) {
        axios.all([
            this.fetchList(sessionId),
            this.fetchPlInfo(sessionId),
            this.fetchWinLossList(sessionId)
        ])
        .then(axios.spread(action((res1, res2, res3) => {

            this.sessionEntriesList = res1.data;
            this.sessionPlInfo = res2.data;
            this.sessionWinLossList = res3.data;

        })));
    }

    @action
    fetchList(sessionId) {
        return axios.get(API_URL_SESSION_ENTRIES, {
            params: {
                session_id: sessionId
            }
        })
    }

    @action
    fetchPlInfo(sessionId) {
        return axios.get(API_URL_SESSION_ENTRIES_PLINFO, {
            params: {
                session_id: sessionId
            }
        })
    }

    fetchWinLossList(sessionId) {
        return axios.get(API_URL_SESSION_ENTRIES_WINLOSSLIST + "/" + sessionId, {
            params: {
                session_id: sessionId
            }
        })
    }
}
