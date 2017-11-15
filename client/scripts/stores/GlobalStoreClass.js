import { observable } from 'mobx';

export class GlobalStoreClass {
	@observable fetched = false;
	@observable selectedSessionId = localStorage.getItem('sessionId');
	@observable selectedMeterId = localStorage.getItem('meterId');

	setSessionId(id) {
		localStorage.setItem('sessionId', id)
		this.selectedSessionId = id
	}

	setMeterId(id) {
		localStorage.setItem('meterId', id)
		this.selectedMeterId = id
	}
}

