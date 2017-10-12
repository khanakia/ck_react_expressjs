import React, { Component } from "react";

import ComboBoxMatchType from '../controls/ComboBoxMatchType.jsx'
import MatchHelper from '../../helpers/MatchHelper'
import ComboBoxLocal from '../controls/ComboBoxLocal.jsx'
import {LIST_MATCH_TYPE} from '../../Constant'
class MatchForm extends Component {
	constructor(props) {
        super(props);

        this.defaultItem = {
            _id: null,
            match_name: null,
            match_type: "One Day"
        }
    }
    static defaultProps = {
        onSubmit: function() {},
        cancelFormClick: function() {},
        item: {}
    }


    onSubmit = (e) => {
        e.preventDefault()
        var _this = this;

        if (!$(e.target).valid()) {
            return false;
        }

        let data = jQuery(e.target).serialize()

        var match_type = this.refs.combo.getSelectedValue()
        if (!match_type) {
            toastr.error("Please Select Match Type")
        }

        MatchHelper.save(data, this.props.item._id).then((res) => {
            console.log(res);
            this.props.onSubmit()
        }).catch(function(error) {
            console.log(error)
            // if (error.response.data.cerror) {
            //     toastr.error(error.response.data.cerror)
            // } else {
            //     toastr.error("Validation failed.")
            // }
        });
        return false;
    }

    render() {
    	const item = Object.assign({}, this.defaultItem, this.props.item || {} )
        return (
            <div>
            	<form className="" ref="form" onSubmit={this.onSubmit} key={`form_${item._id}`}>
                    <div className="form-row align-items-center">
                        <div className="form-group col-md-2">
                            <label className="col-form-label">Name</label>
                            <input type="text" className="form-control form-control-sm required error-hide" 
                                        name="match_name" defaultValue={item.match_name} />
                        </div>
                  
                        <div className="form-group col-md-2">
                            <label className="col-form-label">Match Type</label>
                            {/*<ComboBoxMatchType ref="combo" field_id="match_type" selectedValue={item.match_type} />*/}
                            <ComboBoxLocal ref="combo" width={"100%"} field_id="match_type" valueMember='id'
                                        displayMember='text' data={LIST_MATCH_TYPE}  selectedValue={item.match_type} />
                        </div>
                    
                        <div className="form-group col-md-3">
                            <label className="col-form-label">&nbsp;</label>
                            <div>
                                <button className="btn btn-primary btn-sm" type="submit">Save</button>
                                <button className="btn btn-danger btn-sm ml-1" type="button" onClick={()=>this.props.cancelFormClick()}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
         
            </div>
        );
    }
}

export default MatchForm;
