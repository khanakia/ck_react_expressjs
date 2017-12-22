import { observable, action } from 'mobx';

import MatchHelper from '../helpers/MatchHelper'
import MeterHelper from '../helpers/MeterHelper'
import MeterEntryHelper from '../helpers/MeterEntryHelper'

import { API_URL_METER_ENTRIES, API_URL_METER_ENTRIES_PLINFO, API_URL_METER_ENTRIES_WINLOSSLIST } from "../Constant"


export class MeterEntryStoreClass {
    @observable fetched = false;
    @observable.shallow meterEntriesList = [];
    @observable.ref meterPlInfo = {};
    @observable.shallow meterWinLossList = [];

    // this is we are using to scroll to that run in meterEntryWinLossGrid
    @observable lastEnteredRun = null;

    // @observable displayData = {
    //     meterEntriesList: [],
    //     meterPlInfo: {},
    //     meterWinLossList: [],
    // }

    clearAll() {
        this.meterEntriesList = []
        this.meterPlInfo = {}
        this.meterWinLossList = []
    }

    fetchAll(meterId) {
        axios.all([
            this.fetchList(meterId),
            this.fetchPlInfo(meterId),
            this.fetchWinLossList(meterId)
        ])
        .then(axios.spread(action((res1, res2, res3) => {

            this.meterEntriesList = res1.data;
            this.meterPlInfo = res2.data;
            this.meterWinLossList = res3.data;

        })));
    }

    @action
    fetchList(meterId) {
        return axios.get(API_URL_METER_ENTRIES, {
            params: {
                meter_id: meterId
            }
        })
    }

    @action
    fetchPlInfo(meterId) {
        return axios.get(API_URL_METER_ENTRIES_PLINFO, {
            params: {
                meter_id: meterId
            }
        })
    }

    fetchWinLossList(meterId) {
        return axios.get(API_URL_METER_ENTRIES_WINLOSSLIST + "/" + meterId, {
            params: {
                meter_id: meterId
            }
        })
    }
}
