export default class JournalEntryHelper {

	static index(data) {
		return axios({
	    method: 'get',
	      url: "/journal_entries"
	    })
	}

	static show(id) {
		return axios({
	    method: 'get',
	      url: "/journal_entries/"+id
	    })
	}

	static store(data) {
		return axios({
	    method: 'post',
	      url: "/journal_entries",
	      data: data
	    })
	}

	static update(id,data) {
		return axios({
	      method: 'put',
	      url: "/journal_entries/" + id,
	      data: data
	    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/journal_entries/"+id
	    })
	}

	static save(data, id=null) {
		// const dataJson = URI.parseQuery(data)
		if(id) {
			var ajaxObj = JournalEntryHelper.update(id,data)
		} else {
			var ajaxObj = JournalEntryHelper.store(data)
		}
		return ajaxObj;
	}
}