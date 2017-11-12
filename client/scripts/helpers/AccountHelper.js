export default class AccountHelper {

	static index(params) {
		return axios({
	    	method: 'get',
	    	url: "/accounts",
	    	params: params
	    })
	}

	static show(id) {
		return axios({
	    method: 'get',
	      url: "/accounts/"+id
	    })
	}

	static store(data) {
		return axios({
	    method: 'post',
	      url: "/accounts",
	      data: data
	    })
	}

	static update(id,data) {
		return axios({
	      method: 'put',
	      url: "/accounts/" + id,
	      data: data
	    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/accounts/"+id
	    })
	}

	static save(data, id=null) {
		// const dataJson = URI.parseQuery(data)
		if(id) {
			var ajaxObj = AccountHelper.update(id,data)
		} else {
			var ajaxObj = AccountHelper.store(data)
		}
		return ajaxObj;
	}
}