import { observable } from 'mobx';

export class GlobalStoreClass {
	@observable fetched = false;
	@observable selectedSessionId = localStorage.getItem('sessionId');

	setSessionId(id) {
		localStorage.setItem('sessionId', id)
		this.selectedSessionId = id
	}
}

