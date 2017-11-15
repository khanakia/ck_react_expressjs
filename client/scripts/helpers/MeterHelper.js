export default class MeterHelper {

	static index(data) {
		return axios({
	    method: 'get',
	      url: "/meters"
	    })
	}

	static show(id) {
		return axios({
	    method: 'get',
	      url: "/meters/"+id
	    })
	}

	static store(data) {
		return axios({
	    method: 'post',
	      url: "/meters",
	      data: data
	    })
	}

	static update(id,data) {
		return axios({
	      method: 'put',
	      url: "/meters/" + id,
	      data: data
	    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/meters/"+id
	    })
	}

	static save(data, id=null) {
		// const dataJson = URI.parseQuery(data)
		if(id) {
			var ajaxObj = MeterHelper.update(id,data)
		} else {
			var ajaxObj = MeterHelper.store(data)
		}
		return ajaxObj;
	}
}