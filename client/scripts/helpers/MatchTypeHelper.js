export default class MatchTypeHelper {

	static store(data) {
		return axios({
      method: 'post',
      url: "/match_types",
      data: data
    })
	}

	static update(data) {
		return axios({
      method: 'put',
      url: "/match_types/" + data.id,
      data: data
    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/match_types/"+id
	    })
	}
}