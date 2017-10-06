export default class AccountHelper {

	static index(data) {
		return axios({
	    method: 'get',
	      url: "/accounts"
	    })
	}

	static store(data) {
		return axios({
	    method: 'post',
	      url: "/accounts",
	      data: data
	    })
	}

	static update(data) {
		return axios({
      method: 'put',
      url: "/accounts/" + data.id,
      data: data
    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/accounts/"+id
	    })
	}
}