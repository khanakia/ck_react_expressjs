import React, { Component } from "react";

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

import TeamHelper from '../helpers/TeamHelper'

class State extends Component {

  formSubmit() {
    var _this = this;
    const stateName = this.refs.name.value
    TeamHelper.store({
      name: stateName
    }).then(function (response) {
      console.log(response);
      _this.refreshComponent()
    })
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
                  { name: 'name', type: 'string' },
              ],
   
              id: '_id',
              url: '../teams',

              updaterow: (rowid, rowdata, commit) => {
                TeamHelper.update({
                  id: rowdata.uid,
                  name: rowdata.name
                })
                commit(true);
              },
          };
     
      let dataAdapter = new $.jqx.dataAdapter(source);

      let columns =
            [
                { text: 'Name', datafield: 'name', width: 250 },
                {
                    text: 'Delete', datafield: 'Delete', columntype: 'button', width:50, filterable: false,
                    cellsrenderer: () => {
                        return 'Delete';
                    }, buttonclick: (row) => {
                        let dataRecord = this.refs.jqxgrid.getrowdata(row);
                        console.log(dataRecord.uid)
                        TeamHelper.delete(dataRecord.uid).then(function(res){
                          _this.refreshComponent()
                        })

                    }
                }
            ];
      return (
          <div>
            <h3>Team</h3>
            <form ref="form" onSubmit={() => this.formSubmit()}>
              <div className="uk-margin">
                <div>
                  <input type="text" className="uk-input uk-form-width-medium uk-form-small required error-hide" placeholder="State Name" ref="name" />
                  <button className="uk-button uk-button-default uk-form-small" type="submit">Save</button>
                </div>
              </div>
            </form>

            <JqxGrid
              ref="jqxgrid"
              width={850} height={400} source={dataAdapter} pageable={true}
              sortable={true} altrows={true} enabletooltips={true}
              editable={true} columns={columns}
               filterable={true} showfilterrow={true}
            />
          </div>
      );
  }
}

export default State;
