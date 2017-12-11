import React, { Component } from "react";

import InputDecimal from '../controls/InputDecimal.jsx'
// import ComboBoxMember from '../controls/ComboBoxMember.jsx'
import ComboBoxLocal from '../controls/ComboBoxLocal.jsx'
import CSelect from '../controls/CSelect.jsx'
import AccountHelper from '../../helpers/AccountHelper'

import {LIST_COMM_TYPE, LIST_STATUS_BOOLEAN} from '../../Constant'

import GlobalHelper from "../../helpers/GlobalHelper"
import TooltipQuestion from '../controls/TooltipQuestion';

class MemberForm extends Component {

    constructor(props) {
        super(props);

        this.defaultItem = {
            _id: null,
            limit: 0,
            sess_comm: 0,
            match_comm: 0,
            lk_comm: 0,
            player_comm: 0,
            khada_comm: 0,
            cup_comm: 0,
            tfr_sess_comm: 0,
            tfr_match_comm: 0,
            tfr_lk_comm: 0,
            tfr_player_comm: 0,
            tfr_khada_comm: 0,
            tfr_cup_comm: 0,
            status: true,
            hide: false,
            patti: [],

            match_comm_accounts: [],
            sess_comm_accounts:[],
            meter_comm_accounts:[]

        }
    }
    static defaultProps = {
        accountsList : [],
        onSubmit: function() {},
        cancelFormClick: function() {},
        item: {}
    }

    componentDidUpdate() {
        this.mtrap = GlobalHelper.mousetrapFormInit(this.refs.form)
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(! $(this.refs.form).valid()) {
          return false;
        }
        let data = jQuery(this.refs.form).serialize()
        AccountHelper.save(data, this.props.item._id).then( (response) => {
            toastr.success('Successfully Saved.')
            this.props.onSubmit(response.data)
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
                            <input className="form-control form-control-sm error-hide required" type="text" name="account_name" defaultValue={item.account_name} />
                        </div>
                    
                        <div className="form-group col-md-2">
                            <label className="col-form-label">Limit:</label>
                            
                            <InputDecimal className="form-control form-control-sm uk-form-small error-hide required number" type="text" max="100" value={item.limit} name="limit" />
                            
                        </div>
                        <div className="form-group col-md-1">
                            <label className="col-form-label">Status:</label>
                            <div className="uk-form-controls">
                                {/*<input type="hidden" name="status" defaultValue={false} />
                                <input className="" type="checkbox" defaultChecked={item.status} name="status" />*/}
                                <CSelect className="form-control form-control-sm" name="status" value={item.status} items={LIST_STATUS_BOOLEAN}> </CSelect>
                            </div>
                        </div>
                        {/*<div className="form-group col-md-1">
                            <label className="col-form-label">Hide:</label>
                            <div className="uk-form-controls">
                                <CSelect className="form-control form-control-sm" name="hide" value={item.hide} items={LIST_STATUS_BOOLEAN}> </CSelect>
                            </div>
                        </div>*/}
                    </div>

                    <fieldset>
                        <legend>Commission:</legend>
                        <div className="form-row">
                            {/*<div className="form-group col-auto">
                                <label className="col-form-label">Match Comm. To:</label>
                                <ComboBoxLocal width={"100%"} ref="memberDdl" field_id="match_comm_to" valueMember='_id'
                                            displayMember='account_name' data={this.props.accountsList}  selectedValue={item.match_comm_to} />
                            </div>
                            <div className="form-group col-auto">
                                <label className="col-form-label">Match Comm. : <TooltipQuestion content={Messages.ACCOUNT_ENTRY_PAY_RECEIVE} /></label>
                                <InputDecimal className="form-control form-control-sm uk-form-small error-hide required number" type="text" value={item.match_comm} name="match_comm" />
                            </div>*/}
                            <div className="form-group col-auto">
                                <label className="col-form-label">Match Commission Type</label>
                                <CSelect className="form-control form-control-sm" name="match_comm_type" value={item.match_comm_type} items={LIST_COMM_TYPE}> </CSelect>
                            </div>
                        </div>

                        <div className="">
                            <div className="row">
                                <div className="col-md-1">
                                    <label className="col-form-label">S.N.</label>
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Match Comm To:</label>
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Match Comm.(%):</label>
                                </div>
                            </div>
                            {Array.apply(0, Array(2)).map( (x, i) => { 
                                var account_id = (item.match_comm_accounts[i] == undefined) ? '' : item.match_comm_accounts[i]['account_id']; 
                                var match_comm = (item.match_comm_accounts[i] == undefined) ? 0 : item.match_comm_accounts[i]['match_comm']; 
                                return (
                                    <div className="row" key={`${item.id}_key_${i}`}>
                                        <div className="col-md-1">
                                            <label className="col-form-label">{i+1}</label>
                                        </div>
                                        <div className="col-md-3">
                                                <ComboBoxLocal width={"100%"} field_id={`match_comm_accounts[${i}][account_id]`} valueMember='_id'
                                            displayMember='account_name' data={this.props.accountsList}  selectedValue={account_id} width="100%" />
                                        </div>
                                        <div className="col-md-2">
                                            <InputDecimal className="form-control form-control-sm uk-form-small error-hide required number" type="text" value={match_comm} name={`match_comm_accounts[${i}][match_comm]`}  />
                                        </div>
                                    </div>
                            ) })}
                        </div>

                        <div className="">
                            <div className="row">
                                <div className="col-md-1">
                                    <label className="col-form-label">S.N.</label>
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Meter Comm To:</label>
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Meter Comm.(Rs.):</label>
                                </div>
                            </div>
                            {Array.apply(0, Array(1)).map( (x, i) => { 
                                var account_id = (item.meter_comm_accounts[i] == undefined) ? '' : item.meter_comm_accounts[i]['account_id']; 
                                var meter_comm = (item.meter_comm_accounts[i] == undefined) ? 0 : item.meter_comm_accounts[i]['meter_comm']; 
                                return (
                                    <div className="row" key={`${item.id}_key_${i}`}>
                                        <div className="col-md-1">
                                            <label className="col-form-label">{i+1}</label>
                                        </div>
                                        <div className="col-md-3">
                                                <ComboBoxLocal width={"100%"} field_id={`meter_comm_accounts[${i}][account_id]`} valueMember='_id'
                                            displayMember='account_name' data={this.props.accountsList}  selectedValue={account_id} width="100%" />
                                        </div>
                                        <div className="col-md-2">
                                            <InputDecimal className="form-control form-control-sm uk-form-small error-hide required number" type="text" value={meter_comm} name={`meter_comm_accounts[${i}][meter_comm]`}  />
                                        </div>
                                    </div>
                            ) })}
                        </div>

                        <div className="">
                            <div className="row">
                                <div className="col-md-1">
                                    <label className="col-form-label">S.N.</label>
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Session Comm To:</label>
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Session Comm.(%): <TooltipQuestion content={Messages.ACCOUNT_ENTRY_PAY_RECEIVE} /></label>
                                </div>
                            </div>
                            {Array.apply(0, Array(2)).map( (x, i) => { 
                                var account_id = (item.sess_comm_accounts[i] == undefined) ? '' : item.sess_comm_accounts[i]['account_id']; 
                                var sess_comm = (item.sess_comm_accounts[i] == undefined) ? 0 : item.sess_comm_accounts[i]['sess_comm']; 
                                return (
                                    <div className="row" key={`${item.id}_key_${i}`}>
                                        <div className="col-md-1">
                                            <label className="col-form-label">{i+1}</label>
                                        </div>
                                        <div className="col-md-3">
                                                <ComboBoxLocal width={"100%"} field_id={`sess_comm_accounts[${i}][account_id]`} valueMember='_id'
                                            displayMember='account_name' data={this.props.accountsList}  selectedValue={account_id} width="100%" />
                                        </div>
                                        <div className="col-md-2">
                                            <InputDecimal className="form-control form-control-sm uk-form-small error-hide required number" type="text" value={sess_comm} name={`sess_comm_accounts[${i}][sess_comm]`}  />
                                        </div>
                                    </div>
                            ) })}
                        </div>
                    </fieldset>
                
                    <fieldset>
                        <legend>Patti:</legend>
                        <div className="">
                            <div className="row">
                                <div className="col-md-1">
                                    <label className="col-form-label">S.N.</label>
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Patti Under:</label>
                                </div>
                                <div className="col-md-2">
                                    <label className="col-form-label">Match (%):</label>
                                </div>
                                <div className="col-md-2">
                                    <label className="col-form-label">Sess (%):</label>
                                </div>
                                <div className="col-md-2">
                                    <label className="col-form-label">Meter (%):</label>
                                </div>
                            </div>
                            {Array.apply(0, Array(3)).map( (x, i) => { 
                                var account_id = (item.patti[i] == undefined) ? '' : item.patti[i]['account_id']; 
                                var match = (item.patti[i] == undefined) ? 0 : item.patti[i]['match']; 
                                var session = (item.patti[i] == undefined) ? 0 : item.patti[i]['session']; 
                                var meter = (item.patti[i] == undefined) ? 0 : item.patti[i]['meter']; 
                                return (
                                    <div className="row" key={`${item.id}_key_${i}`}>
                                        <div className="col-md-1">
                                            <label className="col-form-label">{i+1}</label>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="uk-form-controls">
                                                {/*<ComboBoxMember width="100%" ref={`pattiAccountDdl_${i}`} field_id={`patti[${i}][account_id]`} selectedValue={account_id} />*/}
                                                <ComboBoxLocal width={"100%"} ref={`pattiAccountDdl_${i}`} field_id={`patti[${i}][account_id]`} valueMember='_id'
                                            displayMember='account_name' data={this.props.accountsList}  selectedValue={account_id} width="100%" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="uk-form-controls">
                                                <InputDecimal className="form-control form-control-sm uk-form-small error-hide required number" type="text" value={match} name={`patti[${i}][match]`} />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="uk-form-controls">
                                                <InputDecimal className="form-control form-control-sm uk-form-small error-hide required number" type="text" value={session} name={`patti[${i}][session]`} />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="uk-form-controls">
                                                <InputDecimal className="form-control form-control-sm uk-form-small error-hide required number" type="text" value={meter} name={`patti[${i}][meter]`} />
                                            </div>
                                        </div>
                                  
                                    </div>
                            ) })}
                        </div>
                    </fieldset>    
                    <div className="mt-3 text-right col-md-101">
                        <button className="btn btn-primary btn-sm" type="button" onClick={this.onSubmit} onFocus={this.onSubmit}><i className="fa fa-floppy-o"></i> Save</button>
                        <button className="btn btn-danger btn-sm ml-1" type="button" onClick={this.props.cancelFormClick}><i className="fa fa-undo"></i> Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default MemberForm;
