import { observable } from 'mobx';

import MatchHelper from '../helpers/MatchHelper'

export class MatchStoreClass {
	@observable fetched = false;
	@observable match = {};

 
	// fetch(matchId) {
	//   axios.get('http://localhost:3000/matches/1')
	//     .then(() => this.fetched = true)
	//     .catch(() => this.fetched = false);
	// }

  	fetch(matchId) {
		MatchHelper.show(matchId).then((res) => {
		    this.match = res.data
		})
  	}
}

