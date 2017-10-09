export default class MatchTeamHelper {

	static index(data) {
		return axios({
	    method: 'get',
	      url: "/match_teams",
	      params: data
	    })
	}

	static show(id) {
		return axios({
	    method: 'get',
	      url: "/match_teams/"+id
	    })
	}

	static store(data) {
		return axios({
	    method: 'post',
	      url: "/match_teams",
	      data: data
	    })
	}

	static update(id,data) {
		return axios({
	      method: 'put',
	      url: "/match_teams/" + id,
	      data: data
	    })
	}


	static delete(id) {
		return axios({
	      method: 'delete',
	      url: "/match_teams/"+id
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
}