import React, { Component } from "react";

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';
import JqxComboBox from './jqwidgets-react/react_jqxcombobox.js';

import ComboBoxMember from './controls/ComboBoxMember.jsx'
import AccountHelper from '../helpers/AccountHelper'

class Member extends Component {

  formSubmit(e) {
    e.preventDefault()
    var _this = this;
    // if(! $(this.refs.form).valid()) {
    //   return false;
    // }

    let selectedMember = this.refs.memberDdl.refs.JqxComboBox.getSelectedItem();

    console.log(selectedMember)

    let data = jQuery(this.refs.form).serialize()
    console.log(data);
    AccountHelper.store(data).then(function (response) {
      console.log(response);
      _this.refreshComponent()
    })
    
  }

  componentDidMount() {

  }

  refreshComponent() {
     this.refs.jqxgrid.updatebounddata();
     this.refs.memberDdl.memberDataAdapter.dataBind()
  }

  
  render() {  
    var _this = this;
    let source =
          {
              datatype: 'json',
              datafields: [
                  { name: 'account_name', type: 'string' },
              ],
   
              id: '_id',
              url: '/accounts',

              updaterow: (rowid, rowdata, commit) => {
                AccountHelper.update({
                  id: rowdata.uid,
                  account_name: rowdata.account_name
                })
                commit(true);
              },
          };
     
      let dataAdapter = new $.jqx.dataAdapter(source);

      let columns =
            [
                { text: 'Name', datafield: 'account_name', width: 250 },
                {
                    text: 'Delete', datafield: 'Delete', columntype: 'button', width:50, filterable: false,
                    cellsrenderer: () => {
                        return 'Delete';
                    }, buttonclick: (row) => {
                        let dataRecord = this.refs.jqxgrid.getrowdata(row);
                        console.log(dataRecord.uid)
                        AccountHelper.delete(dataRecord.uid).then(function(res){
                          _this.refreshComponent()
                        })

                    }
                }
            ];
      return (
          <div>
            <h3>Member</h3>

            <div className="uk-grid" >
                <div className="uk-width-1-2">
                    <JqxGrid
                      ref="jqxgrid"
                      width={850} height={400} source={dataAdapter} pageable={true}
                      sortable={true} altrows={true} enabletooltips={true}
                      editable={true} columns={columns}
                       filterable={true} showfilterrow={true}
                    />
                </div>
                <div className="uk-width-1-2">
                  <form className="uk-form-stacked" ref="form" onSubmit={(e) => this.formSubmit(e)}>
                      <div className="uk-margin">
                        <label className="uk-form-label">Name</label>
                        <div className="uk-form-controls">
                            <input className="uk-input error-hide required" id="form-stacked-text" type="text" name="account_name" />
                        </div>
                      </div>
                      <div className="uk-margin">
                        <div className="uk-grid">
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >Sess Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" max="100" defaultValue="0" name="sess_comm" />
                            </div>
                          </div>
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >Match Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="match_comm"/>
                            </div>
                          </div>
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >LK Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="lk_comm"/>
                            </div>
                          </div>
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >Player Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="player_comm"/>
                            </div>
                          </div>
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >Khada Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="khada_comm"/>
                            </div>
                          </div>
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >Cup Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="cup_comm" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="uk-margin">
                        <label className="uk-form-label">Transfer Comm. To:</label>
                        <div className="uk-form-controls">
                            <ComboBoxMember ref="memberDdl" inputName="tfr_comm_to" />
                        </div>
                      </div>

                      <div className="uk-margin">
                        <div className="uk-grid">
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >Sess Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="tfr_sess_comm" />
                            </div>
                          </div>
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >Match Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="tfr_match_comm" />
                            </div>
                          </div>
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >LK Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="tfr_lk_comm" />
                            </div>
                          </div>
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >Player Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="tfr_player_comm" />
                            </div>
                          </div>
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >Khada Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="tfr_khada_comm" />
                            </div>
                          </div>
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >Cup Comm:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="tfr_cup_comm" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="uk-margin">
                        <div className="uk-grid">
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >S.N.</label>
                          </div>
                          <div className="uk-width-1-3 uk-padding-remove-left">
                            <label className="uk-form-label" >Patti Under:</label>
                          </div>
                          <div className="uk-width-1-6 uk-padding-remove-left">
                            <label className="uk-form-label" >Patti (%):</label>
                          </div>
                        </div>
                        <div className="uk-grid uk-margin-small-top">
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >1</label>
                          </div>
                          <div className="uk-width-1-3 uk-padding-remove-left">
                            <div className="uk-form-controls">
                                <ComboBoxMember ref="pattiMemberDDL[1]" inputName="patti[0][account_id]" />
                            </div>
                          </div>
                          <div className="uk-width-1-6 uk-padding-remove-left">
                            <div className="uk-form-controls">
                                <input className="uk-input uk-form-small error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="patti[0][comm]" />
                            </div>
                          </div>
                        </div>
                        <div className="uk-grid uk-margin-small-top">
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >2</label>
                          </div>
                          <div className="uk-width-1-3 uk-padding-remove-left">
                            <div className="uk-form-controls">
                                <ComboBoxMember ref="pattiMemberDDL[1]" inputName="patti[1][account_id]" />
                            </div>
                          </div>
                          <div className="uk-width-1-6 uk-padding-remove-left">
                            <div className="uk-form-controls">
                                <input className="uk-input uk-form-small error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="patti[1][comm]" />
                            </div>
                          </div>
                        </div>
                        <div className="uk-grid uk-margin-small-top">
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >3</label>
                          </div>
                          <div className="uk-width-1-3 uk-padding-remove-left">
                            <div className="uk-form-controls">
                                <ComboBoxMember ref="pattiMemberDDL[1]" inputName="patti[2][account_id]" />
                            </div>
                          </div>
                          <div className="uk-width-1-6 uk-padding-remove-left">
                            <div className="uk-form-controls">
                                <input className="uk-input uk-form-small error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="patti[2][comm]" />
                            </div>
                          </div>
                        </div>
                        <div className="uk-grid uk-margin-small-top">
                          <div className="uk-width-1-6">
                            <label className="uk-form-label" >4</label>
                          </div>
                          <div className="uk-width-1-3 uk-padding-remove-left">
                            <div className="uk-form-controls">
                                <ComboBoxMember ref="pattiMemberDDL[1]" inputName="patti[3][account_id]" />
                            </div>
                          </div>
                          <div className="uk-width-1-6 uk-padding-remove-left">
                            <div className="uk-form-controls">
                                <input className="uk-input uk-form-small error-hide required number" id="form-stacked-text" type="number" defaultValue="0" name="patti[3][comm]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="uk-margin uk-text-right">
                        <button className="uk-button uk-button-primary" type="submit">Save</button>
                      </div>
                  </form>
                </div>
            </div>

            
          </div>
      );
  }
}

export default Member;
