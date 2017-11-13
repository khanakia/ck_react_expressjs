import React, { Component } from "react";

import Auth from '../helpers/auth.js'

class UserLogin extends Component {
	componentDidMount() {
        if(Auth.check()) {
            hashHistory.push('/dashboard')
            return false;
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        var valid = jQuery(".loginForm").valid();
        if (!valid) {
            return false 
        };        
    	
    	Auth.attempt({username: this.refs.username.value, password: this.refs.password.value}).then((response) => {
            if (response.data.token != null) {
                hashHistory.push('/dashboard')
            } else {                
                toastr.error(trans.invalid_credentials);
            }
        }).catch(function (error) {
            toastr.error(error.response.data.message);
        });
    }

    render() {

        return (
            <div className="mx-2">
         		<div className="loginform">
                    <div id="errordiv"></div>
                    <div className="container">
                        <div className="row">
                            <div className="formstyle1Ct">
                                <h3 className="form_title text-center">Login</h3>
                                <form className="form-horizontal formstyle1 loginForm" ref='form' onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="col-sm-12 col-xs-12">User Name</label>
                                        <div className="col-sm-12 col-xs-12">
                                            <input type="username" className="form-control required" name="username" id="username" placeholder="Username" ref='username'/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-12 col-xs-12">
                                            <div className="row">
                                                <div className="col-sm-5">Password</div> 
                                            </div>
                                        </label>
                                        <div className="col-sm-12 col-xs-12">
                                            <input type="password" className="form-control required minlength" name="password" id="password"  placeholder="••••••••••" ref='password'/>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default UserLogin;
