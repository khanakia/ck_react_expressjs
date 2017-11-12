import { observable } from 'mobx';

export class ServerStatusStoreClass {
	@observable fetched = false;
	@observable dbServerStatus = 0;
	
	fetchDbServerStatus(matchId=null) {
		axios.get('/others/server_db_status', {
  			params : {
  				match_id: matchId,
  			}
  		})
	    .then((res) => {
	    	this.dbServerStatus = res.data.status
	    })
	    .catch((err) => {
	    	console.log(err.response.data.error)
	    	if(err.response.data.error==5001) {
	    		this.dbServerStatus = 0
	    	}
	    });
  	}
}

