import { observable } from 'mobx';

import MatchHelper from '../helpers/MatchHelper'

export class MatchStoreClass {
	@observable fetched = false;
	@observable match = {};
	@observable matchList = [];

	fetchList() {
		MatchHelper.index().then((res) => {
		    this.matchList = res.data
		})
  	}

  	fetch(matchId) {
		MatchHelper.show(matchId).then((res) => {
		    this.match = res.data
		})
  	}
}

