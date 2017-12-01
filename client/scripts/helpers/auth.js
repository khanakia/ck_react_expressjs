import localstore from './localstore.js'

import UserHelper from './UserHelper'


export default class Auth {
	constructor() {
		
	}
	
	static attempt({username=null, password=null}) {
		var ajaxObj =  axios.post("/users/login", {
					username: username,
					password: password,
				})

		ajaxObj.then(function (response) {
			Auth.login(response.data.token)
		}).catch(function (error) {
			console.log(error);
		});

		return ajaxObj;
	}


	static login(token=null) {
		if(!token) return "Cannot Login";
		localStorage.setItem('token', token);
	}

	static logout() {
		localStorage.removeItem('token');
		localstore.clear()
	}

	static check() {
		return this.getToken() ? true : false;
	}

	static getToken() {
		return localStorage.getItem('token');
	}

	static getTokenDecoded() {
		var token = Auth.getToken()
		if(!token) return {}
		return jwt_decode(Auth.getToken());
	}

	static is_admin() {
		const data = Auth.getTokenDecoded();
		return data.is_admin | data.is_sa;
	}

	static getUserID() {
		const data = Auth.getTokenDecoded();
		return data._id;
	}

	// Header which i will add to ajax request
	static header() {
		return {
			'Authorization' : 'Bearer ' + Auth.getToken(),
			'x-access-token' : Auth.getToken()
		}
	}

	static getTokenBearer() {
		return 'Bearer ' + Auth.getToken();	
	}

	static getCurrentUser() {
		return UserHelper.showCurrent().catch(function (error) {
			Auth.logout()
		});
	}


}