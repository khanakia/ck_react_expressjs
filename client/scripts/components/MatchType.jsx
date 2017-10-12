import React, { Component } from "react";

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

import MatchTypeHelper from '../helpers/MatchTypeHelper'

class State extends Component {

  formSubmit = (e) => {
    e.preventDefault()
    var _this = this;
     if(! $(this.refs.form).valid()) {
      return false;
    }

    let data = jQuery(e.target).serialize()
    MatchTypeHelper.store(data).then(function (response) {
      console.log(response);
      _this.refreshComponent()
    }).catch(function (error) {
      toastr.error("Please fill all the required fields.")
    });
    return false;
  }

  refreshComponent() {
     this.refs.jqxgrid.updatebounddata();
  }
  
  render() {  
    var _this = this;
    let source =
          {
              datatype: 'json',
              datafields: [
                  { name: 'match_type_name', type: 'string' },
                  { name: 'match_type_val', type: 'string' },
              ],
   
              id: '_id',
              url: '../match_types',

              updaterow: (rowid, rowdata, commit) => {
                MatchTypeHelper.update({
                  id: rowdata.uid,
                  match_type_name: rowdata.match_type_name,
                  match_type_val: rowdata.match_type_val
                })
                commit(true);
              },
          };
     
      let dataAdapter = new $.jqx.dataAdapter(source);

      let columns =
            [
                { text: 'Name', datafield: 'match_type_name', width: 150 },
                { text: 'value', datafield: 'match_type_val', width: 150 },
                {
                    text: 'Delete', datafield: 'Delete', columntype: 'button', width:50, filterable: false,
                    cellsrenderer: () => {
                        return 'Delete';
                    }, buttonclick: (row) => {
                        let dataRecord = this.refs.jqxgrid.getrowdata(row);
                        console.log(dataRecord.uid)
                        MatchTypeHelper.delete(dataRecord.uid).then(function(res){
                          _this.refreshComponent()
                        })

                    }
                }
            ];
      return (
          <div>
            <h3>Match Type (ADMIN USE ONLY)</h3>
            <form ref="form" onSubmit={(e) => this.formSubmit(e)} >
              <div className="uk-margin">
                <div>
                  <input type="text" className="uk-input uk-form-width-medium uk-form-small required error-hide" placeholder="Name" name="match_type_name" />
                  <input type="text" className="uk-input uk-form-width-medium uk-form-small required error-hide" placeholder="Type Value" name="match_type_val" />
                  <button className="uk-button uk-button-default uk-form-small" type="submit">Save</button>
                </div>
              </div>
            </form>

            <JqxGrid
              ref="jqxgrid"
              width={400} height={600} source={dataAdapter} pageable={true}
              sortable={true} altrows={true} enabletooltips={true}
              editable={true} columns={columns}
               filterable={true} showfilterrow={true}
            />
          </div>
      );
  }
}

export default State;
