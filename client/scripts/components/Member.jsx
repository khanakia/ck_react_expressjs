import React, { Component } from "react";

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';
// import JqxComboBox from './jqwidgets-react/react_jqxcombobox.js';

// import ComboBoxMember from './controls/ComboBoxMember.jsx'

import MemberForm from './controls/MemberForm.jsx'
import AccountHelper from '../helpers/AccountHelper'

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNew: true,
      item: {
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
        tfr_player_comm:0,
        tfr_khada_comm: 0,
        tfr_cup_comm: 0,
        patti: []
      }
    }
  }

  formSubmit = (e) => {
    e.preventDefault()
    var _this = this;
    // if(! $(this.refs.memberForm.refs.form).valid()) {
    //   return false;
    // }

    let data = jQuery(e.target).serialize()
    // console.log(data);
    AccountHelper.save(data, this.state.item._id).then(function (response) {
      console.log(response);
      _this.refreshComponent()
    }).catch(function (error) {
      if(error.response.data.cerror) {
        toastr.error(error.response.data.cerror)  
      } else {
        toastr.error("Validation failed.")
      }
    });
    
  }

  resetPage() {
    this.setState({
      isNew: true,
      item: {
        sess_comm: 0,
        match_comm: 0,
        lk_comm: 0,
        player_comm: 0,
        khada_comm: 0,
        cup_comm: 0,
        tfr_sess_comm: 0,
        tfr_match_comm: 0,
        tfr_lk_comm: 0,
        tfr_player_comm:0,
        tfr_khada_comm: 0,
        tfr_cup_comm: 0,
        patti: []
      } 
    })
  }

  componentDidMount() {

  }

  refreshComponent() {
     this.refs.jqxgrid.updatebounddata();
     this.refs.memberForm.refresh()
     // this.refs.memberDdl.memberDataAdapter.dataBind()
  }

  
  render() {  
    // console.log("This State", this.state.isNew)
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
                AccountHelper.update(rowdata.uid, {
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
                },
                {
                    text: 'Edit', datafield: 'Edit', columntype: 'button', width:50, filterable: false,
                    cellsrenderer: () => {
                        return 'Edit';
                    }, buttonclick: (row) => {
                        let dataRecord = this.refs.jqxgrid.getrowdata(row);
                        // console.log(dataRecord.uid)
                        AccountHelper.show(dataRecord.uid).then(function(res){
                          console.log(res.data)
                          _this.setState({
                            isNew: false,
                            item: res.data
                          })
                        })

                    }
                }
            ];
      
      return (
          <div>
            <h3>Member</h3>

            <div className="uk-grid" >
                <div className="uk-width-1-4">
                    <JqxGrid
                      ref="jqxgrid"
                      width={400} height={600} source={dataAdapter} pageable={true}
                      sortable={true} altrows={true} enabletooltips={true}
                      editable={true} columns={columns}
                       filterable={true} showfilterrow={true}
                    />
                </div>
                <div className="uk-width-1-2">
                  <MemberForm ref="memberForm" item={this.state.item} onSubmit={(e) => this.formSubmit(e)} cancelFormClick={() => this.resetPage()} />
                </div>
            </div>
          </div>
      );
  }
}

export default Member;
