import { observable } from 'mobx';

import { LOCALSTORAGE_SESSIONID, LOCALSTORAGE_METERID } from "../Constant"

export class GlobalStoreClass {
	@observable fetched = false;
	@observable selectedSessionId = localStorage.getItem(LOCALSTORAGE_SESSIONID);
	@observable selectedMeterId = localStorage.getItem(LOCALSTORAGE_METERID);

	setSessionId(id) {
		localStorage.setItem(LOCALSTORAGE_SESSIONID, id)
		this.selectedSessionId = id
	}

	setMeterId(id) {
		localStorage.setItem(LOCALSTORAGE_METERID, id)
		this.selectedMeterId = id
	}
}

