import React, { Component } from "react";

import ComboBoxMatchType from '../controls/ComboBoxMatchType.jsx'
import MatchHelper from '../../helpers/MatchHelper'
import GlobalHelper from "../../helpers/GlobalHelper"


import ComboBoxLocal from '../controls/ComboBoxLocal.jsx'
import {LIST_MATCH_TYPE, MATCH_TYPE_ONEDAY} from '../../Constant'
class MatchForm extends Component {
	constructor(props) {
        super(props);

        this.defaultItem = {
            _id: null,
            match_name: null,
            match_type: MATCH_TYPE_ONEDAY
        }
    }
    static defaultProps = {
        onSubmit: function(item) {},
        cancelFormClick: function() {},
        item: {}
    }

    componentDidMount() {
        this.mtrap = GlobalHelper.mousetrapFormInit(this.refs.form)
    }


    onSubmit = (e) => {
        e.preventDefault()
        

        if (!$(this.refs.form).valid()) {
            return false;
        }

        let data = jQuery(this.refs.form).serialize()

        var match_type = this.refs.combo.getSelectedValue()
        if (!match_type) {
            toastr.error("Please Select Match Type")
            return;
        }

        MatchHelper.save(data, this.props.item._id).then((res) => {
            toastr.success('Successfully Saved.')
            // console.log(res);
            this.refs.match_name.value = ''
            this.refs.match_name.focus()
            this.props.onSubmit(res.data)
        }).catch(function(error) {
            console.log(error)
            toastr.error(error.response.data.message)
        });
        return false;
    }

    render() {
    	const item = Object.assign({}, this.defaultItem, this.props.item || {} )
        return (
            <div>
            	<form className="" ref="form"  key={`form_${item._id}`}>
                    <div className="form-row align-items-center">
                        <div className="form-group col-auto">
                            <label className="col-form-label">Name</label>
                            <input type="text" className="form-control form-control-sm required error-hide" 
                                        name="match_name" ref="match_name" defaultValue={item.match_name} />
                        </div>
                  
                        <div className="form-group col-auto">
                            <label className="col-form-label">Match Type</label>                            
                            <ComboBoxLocal ref="combo" width={"100"} field_id="match_type" valueMember='id'
                                        displayMember='text' data={LIST_MATCH_TYPE}  selectedValue={item.match_type} />
                        </div>
                    
                        <div className="form-group col-auto">
                            <label className="col-form-label">&nbsp;</label>
                            <div>
                                <button className="btn btn-primary btn-sm" type="button" onClick={this.onSubmit} onFocus={this.onSubmit}><i className="fa fa-floppy-o"></i> Save</button>
                                <button className="btn btn-danger btn-sm ml-1" type="button" onClick={()=>this.props.cancelFormClick()}><i className="fa fa-undo"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
         
            </div>
        );
    }
}

export default MatchForm;
