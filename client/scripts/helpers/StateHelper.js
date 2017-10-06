export default class StateHelper {

	static store(data) {
		return axios({
      method: 'post',
      url: "/states",
      data: data
    })
	}

	static update(data) {
		return axios({
      method: 'put',
      url: "/states/" + data.id,
      data: data
    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/states/"+id
	    })
	}
}