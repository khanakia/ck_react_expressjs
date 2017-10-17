import React, { Component } from "react";

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';
import TeamHelper from '../helpers/TeamHelper'
import {APP_URL_TEAMS} from '../Constant'
class Team extends Component {

    onSubmit = (e) => {
        e.preventDefault()
        if(! $(e.target).valid()) {
          return false;
        }

        let data = jQuery(e.target).serialize()
        TeamHelper.store(data).then( (res) => {
            this.refreshComponent()
        }).catch( (error) => {
            toastr.error("Please fill all the required fields.")
        });
        return false;
    }

    refreshComponent() {
        this.refs.jqxgrid.updatebounddata();
    }

    render() {
        let source = {
            datatype: 'json',
            datafields: [
                { name: '_id', type: 'string' },
                { name: 'team_name', type: 'string' },
            ],

            id: '_id',
            url: APP_URL_TEAMS,

            updaterow: (rowid, rowdata, commit) => {
                TeamHelper.update({
                    id: rowdata.uid,
                    name: rowdata.name
                })
                commit(true);
            },
        };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [
            { text: 'Id', datafield: '_id', width: 50 },
            { text: 'Name', datafield: 'team_name', width: 250 },
            {
                text: 'Delete',
                datafield: 'Delete',
                columntype: 'button',
                width: 50,
                filterable: false,
                cellsrenderer: () => {
                    return 'Delete';
                },
                buttonclick: (row) => {
                    let dataRecord = this.refs.jqxgrid.getrowdata(row);

                    var r = confirm("Are you sure!");
                    if (r == true) {
                        TeamHelper.delete(dataRecord.uid).then( (res) => {
                            this.refreshComponent()
                        }).catch(function(err) {
                            toastr.error(err.response.data.message)
                        });
                    }

                }
            }
        ];
        return (
            <div>
                <h5>Team</h5>
                <form ref="form" onSubmit={this.onSubmit} className="mb-1">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="input-group">
                                <input type="text" className="form-control form-control-sm required error-hide" placeholder="Name" ref="name" name="team_name" />
                                <span className="input-group-btn">
                                  <button className="btn btn-primary btn-sm" type="submit">Save</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
                <JqxGrid ref="jqxgrid" width={400} height={600} source={dataAdapter} 
                            pageable={true} sortable={true} altrows={true} enabletooltips={true} 
                            editable={true} columns={columns} filterable={true} showfilterrow={true} />
            </div>

        );
    }
}

export default Team;
