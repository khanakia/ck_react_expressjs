export default class MatchHelper {

	static index(data) {
		return axios({
	    method: 'get',
	      url: "/matches"
	    })
	}

	static show(id) {
		return axios({
	    method: 'get',
	      url: "/matches/"+id
	    })
	}

	static store(data) {
		return axios({
	    method: 'post',
	      url: "/matches",
	      data: data
	    })
	}

	static update(id,data) {
		return axios({
	      method: 'put',
	      url: "/matches/" + id,
	      data: data
	    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/matches/"+id
	    })
	}

	static save(data, id=null) {
		// const dataJson = URI.parseQuery(data)
		if(id) {
			var ajaxObj = MatchHelper.update(id,data)
		} else {
			var ajaxObj = MatchHelper.store(data)
		}
		return ajaxObj;
	}
}