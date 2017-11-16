import { observable } from 'mobx';
// import JournalHelper from '../helpers/JournalHelper'

export class JournalStoreClass {
	@observable fetched = false;
	@observable journalEntriesList = [];
	
	// fetchEntriesList(params) {
	// 	axios.get('/journals/entries', {
	// 		params: params
 //  		})
	//     .then((res) => {
	//     	this.journalEntriesList = res.data
	//     })
	//     .catch(() => this.fetched = false);
	// }

}

