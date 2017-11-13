import React, { Component } from "react";
import CSelect from '../controls/CSelect.jsx'
import UserHelper from '../../helpers/UserHelper'

import {LIST_STATUS_BOOLEAN} from '../../Constant'

import GlobalHelper from "../../helpers/GlobalHelper"
import Auth from '../../helpers/auth.js'

class UserForm extends Component {

    constructor(props) {
        super(props);

        this.defaultItem = {
            _id: null,
            fullname: null,
            username: null,
            password: null,
            status: true,


        }
    }
    static defaultProps = {
        onSubmit: function() {},
        cancelFormClick: function() {},
        item: {}
    }

    componentDidUpdate() {
        this.mtrap = GlobalHelper.mounstrapFormInit(this.refs.form)
    }

    onSubmit = (e) => {
        e.preventDefault()

        if(!Auth.is_admin()) {
            toastr.error('Permission denied.')
            return;
        }

        if(! $(this.refs.form).valid()) {
          return false;
        }
        let data = jQuery(this.refs.form).serialize()
        UserHelper.save(data, this.props.item._id).then( (response) => {
            this.props.onSubmit()
        }).catch(function(err) {
            toastr.error(err.response.data.message)
        });
    }

    render() {
        const item = Object.assign({}, this.defaultItem, this.props.item || {} )
        return (
            <div className="">
                <form className="moustrapform" ref="form" key={Math.random()}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="col-form-label">Name</label>
                            <input className="form-control form-control-sm error-hide required" type="text" name="fullname" defaultValue={item.fullname} />
                        </div>
                    </div>
                    <div className="form-row">    
                        <div className="form-group col-md-4">
                            <label className="col-form-label">User Name</label>
                            <input className="form-control form-control-sm error-hide required" type="text" name="username" defaultValue={item.username} />
                        </div>
                    </div>    
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="col-form-label">Password</label>
                            <input className="form-control form-control-sm error-hide" type="text" name="password" />
                        </div>
                    </div>
                    <div className="form-row">    
                        <div className="form-group col-md-1">
                            <label className="col-form-label">Status:</label>
                            <div className="uk-form-controls">
                                <CSelect className="form-control form-control-sm" name="status" value={item.status} items={LIST_STATUS_BOOLEAN}> </CSelect>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-right col-md-4">
                        <button className="btn btn-primary btn-sm" type="button" onClick={this.onSubmit}><i className="fa fa-floppy-o"></i> Save</button>
                        <button className="btn btn-danger btn-sm ml-1" type="button" onClick={this.props.cancelFormClick}><i className="fa fa-undo"></i> Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserForm;
