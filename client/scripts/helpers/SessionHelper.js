export default class SessionHelper {

	static index(data) {
		return axios({
	    method: 'get',
	      url: "/sessions"
	    })
	}

	static show(id) {
		return axios({
	    method: 'get',
	      url: "/sessions/"+id
	    })
	}

	static store(data) {
		return axios({
	    method: 'post',
	      url: "/sessions",
	      data: data
	    })
	}

	static update(id,data) {
		return axios({
	      method: 'put',
	      url: "/sessions/" + id,
	      data: data
	    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/sessions/"+id
	    })
	}

	static save(data, id=null) {
		// const dataJson = URI.parseQuery(data)
		if(id) {
			var ajaxObj = SessionHelper.update(id,data)
		} else {
			var ajaxObj = SessionHelper.store(data)
		}
		return ajaxObj;
	}
}