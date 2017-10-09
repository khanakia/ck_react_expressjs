import React, { Component } from "react";


import { render } from 'react-dom'
import {  Redirect } from 'react-router'

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

import MatchTeamHelper from '../helpers/MatchTeamHelper'
import ComboBoxTeam from './controls/ComboBoxTeam'


class MatchTeam extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      // isNew: true,
      item: {
        
      }
    }
  }

  static defaultProps = {
    matchId: null
  }

  componentWillMount() {
    
  }

  formSubmit(e) {
    e.preventDefault()
    var _this = this;
    console.log(this.props.matchId)
    if(!this.props.matchId) {
      toastr.error('Please Select Match first.')
      return false;
    }

    const team_id = this.refs.comboTeam.refs.idInput.value
    MatchTeamHelper.store({
      team_id: team_id,
      match_id: this.props.matchId
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
                  { name: 'team_name', type: 'string' },
              ],
   
              id: '_id',
              url: '../match_teams?match_id='+this.props.matchId,

          };
     
      let dataAdapter = new $.jqx.dataAdapter(source);

      let columns =
            [
                { text: 'Team Name', datafield: 'team_name', width: 250 },
                {
                    text: 'Delete', datafield: 'Delete', columntype: 'button', width:50, filterable: false,
                    cellsrenderer: () => {
                        return 'Delete';
                    }, buttonclick: (row) => {
                        let dataRecord = this.refs.jqxgrid.getrowdata(row);
                        console.log(dataRecord.uid)
                        MatchTeamHelper.delete(dataRecord.uid).then(function(res){
                          _this.refreshComponent()
                        })

                    }
                },
            ];
      return (
          <div>
            <h3>Match Teams</h3>
            <form ref="form" onSubmit={(e) => this.formSubmit(e)}>
              <div className="uk-margin">
                <div className="uk-grid">
                  <div className="uk-width-1-4">
                    <ComboBoxTeam ref="comboTeam" field_id="match_id"/>
                  </div>
                  <div className="uk-width-1-6">
                    <button className="uk-button uk-button-default uk-form-small" type="submit">Add</button>
                  </div>
                </div>  
              </div>
            </form>
            <JqxGrid
              ref="jqxgrid"
              width={450} height={500} source={dataAdapter} pageable={true}
              sortable={true} altrows={true} enabletooltips={true}
              editable={true} columns={columns}
               filterable={true} showfilterrow={true}
            />
          </div>
      );
  }
}

export default MatchTeam;
