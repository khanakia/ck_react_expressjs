import React, { Component } from "react";
import InputDecimal from './InputDecimal.jsx'

import ComboBoxMember from './ComboBoxMember.jsx'
class MemberForm extends Component {
  static defaultProps = {
      item : {
        // _id: null,
        // account_name: null,
        // limit: 0,
        // status: 1,
        // sess_comm: 0,
        // match_comm: 0,
        // lk_comm: 0,
        // player_comm: 0,
        // khada_comm: 0,
        // cup_comm: 0,
        // tfr_sess_comm: 0,
        // tfr_match_comm: 0,
        // tfr_lk_comm: 0,
        // tfr_player_comm:0,
        // tfr_khada_comm: 0,
        // tfr_cup_comm: 0,
        // patti: [],

        onSubmit: function() {},
        cancelFormClick: function() {},
        
      }
  }


  componentDidMount() {
  
  }

  refresh() {
    this.refs.memberDdl.dataAdapter.dataBind()
    this.refs.pattiAccountDdl_0.dataAdapter.dataBind()
    this.refs.pattiAccountDdl_1.dataAdapter.dataBind()
    this.refs.pattiAccountDdl_2.dataAdapter.dataBind()
    this.refs.pattiAccountDdl_3.dataAdapter.dataBind()
  }

  render() {
    var _this = this;
    // console.log("This State", this.props.item)  
    return (
      <div className="">
        {this.props.item.account_name}
        <form className="uk-form-stacked" ref="form" onSubmit={(e) => this.props.onSubmit(e)} key={`form_${this.props.item._id}`}>
            <div className="uk-margin11">
              <label className="uk-form-label">Name  ({this.props.item._id ? this.props.item._id : 'N/A'})</label>
              <div className="uk-form-controls">
                  <input className="uk-input uk-input uk-form-small error-hide required" type="text" name="account_name" defaultValue={this.props.item.account_name} />
              </div>
            </div>

             <div className="uk-margin">
              <div className="uk-grid">
                <div className="uk-width-1-4">
                  <label className="uk-form-label" >Limit:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" max="100" value={this.props.item.limit} name="limit" />
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Status:</label>
                  <div className="uk-form-controls">
                      <input type="hidden" name="status" defaultValue={false} />
                      <input className="" type="checkbox" defaultChecked={this.props.item.status} name="status"/>
                  </div>
                </div>
              </div>
            </div>  

            <div className="uk-margin">
              <div className="uk-grid">
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Sess Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" max="100" value={this.props.item.sess_comm} name="sess_comm" />
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Match Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.match_comm} name="match_comm"/>
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >LK Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.lk_comm} name="lk_comm"/>
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Player Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.player_comm} name="player_comm"/>
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Khada Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.khada_comm} name="khada_comm"/>
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Cup Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.cup_comm} name="cup_comm" />
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label">Transfer Comm. To:</label>
              <div className="uk-form-controls">
                  <ComboBoxMember ref="memberDdl" field_id="tfr_comm_to" selectedValue={this.props.item._id} />

              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-grid">
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Sess Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.tfr_sess_comm} name="tfr_sess_comm" />
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Match Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.tfr_match_comm} name="tfr_match_comm" />
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >LK Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.tfr_lk_comm} name="tfr_lk_comm" />
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Player Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.tfr_player_comm} name="tfr_player_comm" />
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Khada Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.tfr_khada_comm} name="tfr_khada_comm" />
                  </div>
                </div>
                <div className="uk-width-1-6">
                  <label className="uk-form-label" >Cup Comm:</label>
                  <div className="uk-form-controls">
                      <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={this.props.item.tfr_cup_comm} name="tfr_cup_comm" />
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-grid">
                <div className="uk-width-1-12">
                  <label className="uk-form-label" >S.N.</label>
                </div>
                <div className="uk-width-1-4 uk-padding-left-5">
                  <label className="uk-form-label" >Patti Under:</label>
                </div>
                <div className="uk-width-1-12 uk-padding-left-5">
                  <label className="uk-form-label" >Match (%):</label>
                </div>
                <div className="uk-width-1-12 uk-padding-left-5">
                  <label className="uk-form-label">Sess (%):</label>
                </div>
                <div className="uk-width-1-12 uk-padding-left-5">
                  <label className="uk-form-label" >Meter (%):</label>
                </div>
                <div className="uk-width-1-12 uk-padding-left-5">
                  <label className="uk-form-label" >Khada (%):</label>
                </div>
              </div>

              {Array.apply(0, Array(4)).map(function (x, i) {
                var item = _this.props.item;
                var account_id = (item.patti[i] == undefined) ? '' : item.patti[i]['account_id'];
                var comm = (item.patti[i] == undefined) ? 0 : item.patti[i]['comm'];
                
                return ( 
                  <div className="uk-grid uk-margin-small-top" key={`${item.id}_key_${i}`}>
                    <div className="uk-width-1-12">
                      <label className="uk-form-label" >{i+1}</label>
                    </div>
                    <div className="uk-width-1-4 uk-padding-left-5">
                      <div className="uk-form-controls">
                          <ComboBoxMember width="100%" ref={`pattiAccountDdl_${i}`} field_id={`patti[${i}][account_id]`} selectedValue={account_id} />
                      </div>
                    </div>
                    <div className="uk-width-1-12 uk-padding-left-5">
                      <div className="uk-form-controls">
                          <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={comm} name={`patti[${i}][match]`} />
                      </div>
                    </div>
                    <div className="uk-width-1-12 uk-padding-left-5">
                      <div className="uk-form-controls">
                          <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={comm} name={`patti[${i}][session]`} />
                      </div>
                    </div>
                    <div className="uk-width-1-12 uk-padding-left-5">
                      <div className="uk-form-controls">
                          <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={comm} name={`patti[${i}][meter]`} />
                      </div>
                    </div>
                    <div className="uk-width-1-12 uk-padding-left-5">
                      <div className="uk-form-controls">
                          <InputDecimal className="uk-input uk-form-small error-hide required number" type="text" value={comm} name={`patti[${i}][khada]`} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="uk-margin uk-text-right">
              <button className="uk-button uk-button-primary" type="submit">Save</button>
              <button className="uk-button uk-button-danger uk-margin-left" type="button" onClick={(e) => this.props.cancelFormClick(e)}>Cancel</button>
            </div>
        </form>
      </div>
    )
  }
}

export default MemberForm;
