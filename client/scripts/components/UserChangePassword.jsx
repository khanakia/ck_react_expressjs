import React, { Component } from "react";

import UserHelper from '../helpers/UserHelper'
import Auth from '../helpers/auth.js'

class UserChangePassword extends Component {
	constructor(props) {
    	super(props);
    }

    static defaultProps = {
        onDataUpdate: function(data) { },
    }

    componentWillMount() {
       
    }

    componentDidMount() {
        var _this = this;
        this.validator = jQuery(this.refs.form).validate({
            rules: {
                // password: {
                //     required: true,
                //     minlength: 8,
                //     ContainsAtLeastOneCapitalLetter: true,
                //     ContainsAtLeastOneDigit: true,
                // },
                // password_confirmation: {
                //     equalTo: "#password"
                // }
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var _this = this;

        var valid = jQuery(this.refs.form).valid();
        
        if (!valid) {return false};
        
        let data = jQuery(this.refs.form).serialize();
        const dataJson = URI.parseQuery(data)
        dataJson.id = Auth.getUserID()

        UserHelper.changePassword(dataJson).then((response) => {
        	console.log(response)
            toastr.success("Password changed successfully.")
            this.props.onDataUpdate(response.data)
        }).catch(function (error) {
			toastr.error(error.response.data.message);
		});

        return false;
    }

    // this layout used on Account Page
    render() {
        return (
            <div>
	            <div className="loginform">
	                    <div id="errordiv"></div>
	                    <div className="container">
	                        <div className="row">
				                <div className="formstyle1Ct changepwdCt password-form-wrapper">
				                	<h3 className="form_title text-center">Change Password</h3>
				                    <form className="form-horizontal formstyle1 ChangepwdForm" ref='form' onSubmit={this.handleSubmit}>
				                        <div className="row">
				                            <div className="col-md-12">
				                                <div className="form-group">
				                                    <label className="col-sm-12">Old Password</label>
				                                    <div className="col-sm-12">
				                                        <div className="input-group">
				                                            <div className="input-group-addon"><i className="fa fa-lock" aria-hidden="true"></i></div>
				                                            <input type="password" className="form-control required" name="oldpassword" id="oldpassword" ref="oldpassword" />
				                                        </div>
				                                    </div>
				                                </div>

				                                <div className="form-group">
				                                    <label className="col-sm-12">New Password</label>
				                                    <div className="col-sm-12">
				                                        <div className="input-group">
				                                            <div className="input-group-addon"><i className="fa fa-lock" aria-hidden="true"></i></div>
				                                            <input type="password" className="form-control required" name="password" id="password" ref="password" />
				                                        </div>
				                                        <div className="password_field_errors is_mobile"></div>
				                                    </div>
				                                </div>
				                                <div className="form-group">
				                                    <label className="col-sm-12"><div className="row"><div className="col-sm-12">Confirm Password</div></div></label>
				                                    <div className="col-sm-12">
				                                        <div className="input-group">
				                                            <div className="input-group-addon"><i className="fa fa-lock" aria-hidden="true"></i></div>
				                                            <input type="password" className="form-control required updatePassword" name="password_confirmation" id="password_confirmation" ref="password_confirmation" />
				                                        </div>
				                                        <div className="password_confirmation_field_errors is_mobile"></div>
				                                    </div>
				                                </div>
						                        <div className="text-right col-md-12">
						                            <button type="submit" className="btn btn-primary">Save</button>
						                        </div>
				                            </div>
				                        </div>
				                    </form>
				                </div>
	                        </div>
	                    </div>
	            </div>            
            </div>
        )
    }
}

export default UserChangePassword;
