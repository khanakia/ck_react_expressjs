export default class MeterEntryHelper {

	static index(data) {
		return axios({
	    method: 'get',
	    headers: Auth.header(),
	      url: "/meter_entries"
	    })
	}

	static show(id) {
		return axios({
	    method: 'get',
	    headers: Auth.header(),
	      url: "/meter_entries/"+id
	    })
	}

	static store(data) {
		return axios({
	    method: 'post',
	    headers: Auth.header(),
	    url: "/meter_entries",
	    data: data
	    })
	}

	static update(id,data) {
		return axios({
	      method: 'put',
	      headers: Auth.header(),
	      url: "/meter_entries/" + id,
	      data: data
	    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      headers: Auth.header(),
	      url: "/meter_entries/"+id
	    })
	}

	static save(data, id=null) {
		// const dataJson = URI.parseQuery(data)
		if(id) {
			var ajaxObj = MeterEntryHelper.update(id,data)
		} else {
			var ajaxObj = MeterEntryHelper.store(data)
		}
		return ajaxObj;
	}

	static count_book(match_id=null) {
		return axios({
	    method: 'get',
	    headers: Auth.header(),
	    url: "/meter_entries/count_book",
    	params: {
	      	match_id : match_id
	      }
	    })
	}
}