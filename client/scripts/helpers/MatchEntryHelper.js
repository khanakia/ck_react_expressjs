export default class MatchEntryHelper {

	static index(data) {
		return axios({
	    method: 'get',
	      url: "/match_entries"
	    })
	}

	static show(id) {
		return axios({
	    method: 'get',
	      url: "/match_entries/"+id
	    })
	}

	static store(data) {
		return axios({
	    method: 'post',
	      url: "/match_entries",
	      data: data
	    })
	}

	static update(id,data) {
		return axios({
	      method: 'put',
	      url: "/match_entries/" + id,
	      data: data
	    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/match_entries/"+id
	    })
	}

	static save(data) {
		const dataJson = URI.parseQuery(data)
		if(dataJson._id) {
			var ajaxObj = MatchHelper.update(dataJson._id,data)
		} else {
			var ajaxObj = MatchHelper.store(data)
		}
		return ajaxObj;
	}

	static count_book(match_id=null) {
		return axios({
	    method: 'get',
	      url: "/match_entries/count_book",
	      params: {
	      	match_id : match_id
	      }
	    })
	}
}