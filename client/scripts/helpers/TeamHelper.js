export default class TeamHelper {

	static store(data) {
		return axios({
      method: 'post',
      url: "/teams",
      data: data
    })
	}

	static update(data) {
		return axios({
      method: 'put',
      url: "/teams/" + data.id,
      data: data
    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/teams/"+id
	    })
	}
}