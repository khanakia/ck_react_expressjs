import { observable, action } from 'mobx';

import MatchHelper from '../helpers/MatchHelper'
import MeterHelper from '../helpers/MeterHelper'
import MeterEntryHelper from '../helpers/MeterEntryHelper'

export class MeterEntryStoreClass {
    @observable fetched = false;
    @observable meterEntriesList = [];
    @observable meterPlInfo = {};
    @observable meterWinLossList = [];

    // this is we are using to scroll to that run in meterEntryWinLossGrid
    @observable lastEnteredRun = null;

    @observable displayData = {
        meterEntriesList: [],
        meterPlInfo: {},
        meterWinLossList: [],
    }

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
        return axios.get('/meter_entries', {
            params: {
                meter_id: meterId
            }
        })
    }

    @action
    fetchPlInfo(meterId) {
        return axios.get('/meter_entries/meter_plinfo', {
            params: {
                meter_id: meterId
            }
        })
    }

    fetchWinLossList(meterId) {
        return axios.get('/meter_entries/winlosslist/' + meterId, {
            params: {
                meter_id: meterId
            }
        })
    }
}
