import React, { Component } from "react";


import { render } from 'react-dom'
import {  Redirect } from 'react-router'

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

import MatchHelper from '../helpers/MatchHelper'

import MatchTeam from './MatchTeam'


class Match extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      isNew: true,
      item: {
        match_name : null
      }
    }
  }

  // componentWillMount() {
  //     var _this = this;
  //     if(this.props.match.params.id) {
  //       console.log(this.props.match.params.id)
  //       MatchHelper.show(this.props.match.params.id).then(function(res){
  //         _this.setState({
  //           item: res.data
  //         })
  //       })
  //     }
  // }


  formSubmit() {
    var _this = this;
    const stateName = this.refs.name.value
    MatchHelper.save({
      match_name: stateName
    }, this.state.item._id).then(function (response) {
      console.log(response);
      _this.refreshComponent()
        _this.setState({
          item: response.data
        })
    })
    return false;
  }

  refreshComponent() {
     this.refs.jqxgrid.updatebounddata(); 
  }

  cancelPage() {
      // this.props.history.push("/matches")
      this.setState({
        isNew: true,
        item: {
          match_name : null
        }
      })
  }
  
  render() {
    var _this = this;
    let source =
          {
              datatype: 'json',
              datafields: [
                  { name: 'match_name', type: 'string' },
              ],
   
              id: '_id',
              url: '../matches',

              updaterow: (rowid, rowdata, commit) => {
                MatchHelper.update(rowdata.uid, {
                  match_name: rowdata.match_name
                })
                commit(true);
              },
          };
     
      let dataAdapter = new $.jqx.dataAdapter(source);

      let columns =
            [
                { text: 'Name', datafield: 'match_name', width: 250 },
                {
                    text: 'Delete', datafield: 'Delete', columntype: 'button', width:50, filterable: false,
                    cellsrenderer: () => {
                        return 'Delete';
                    }, buttonclick: (row) => {
                        let dataRecord = this.refs.jqxgrid.getrowdata(row);
                        console.log(dataRecord.uid)
                        MatchHelper.delete(dataRecord.uid).then(function(res){
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
                        console.log(dataRecord.uid)
                         MatchHelper.show(dataRecord.uid).then(function(res){
                            _this.setState({
                              isNew: false,
                              item: res.data
                            })
                          })
                        // window.location.href="/#/"
                        // _this.props.history.push("/matches/"+dataRecord.uid)


                        // _this.context.router.history.push('/my-new-location')
                        // return <Redirect to="/state"  />
                    }
                }
            ];
      return (
          <div>
            <h3>Match</h3>
            <div className="uk-grid" >
                <div className="uk-width-1-3">
                    <JqxGrid
                      ref="jqxgrid"
                      width={450} height={500} source={dataAdapter} pageable={true}
                      sortable={true} altrows={true} enabletooltips={true}
                      editable={true} columns={columns}
                       filterable={true} showfilterrow={true}
                    />
                </div>
                <div className="uk-width-1-2" key={`item_${this.state.item._id}`}>
                  <form ref="form" onSubmit={() => this.formSubmit()}>
                    <div className="uk-margin">
                      <div>
                        <input type="text" className="uk-input uk-form-width-medium uk-form-small required error-hide" placeholder="Match Name" ref="name" defaultValue={this.state.item.match_name} />
                        <button className="uk-button uk-button-default uk-form-small" type="submit">Save</button>
                        <button className="uk-button uk-button-default uk-form-small" type="button" onClick={()=>this.cancelPage()}>Cancel</button>
                      </div>
                    </div>
                  </form>

                  {
                    this.state.item._id ?
                    <MatchTeam matchId={this.state.item._id} />
                    : ''
                  }
                </div>
            </div>
          </div>
      );
  }
}

export default Match;
