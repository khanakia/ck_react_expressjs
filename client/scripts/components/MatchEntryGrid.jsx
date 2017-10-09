import React, { Component } from "react";

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

import MatchEntryHelper from '../helpers/MatchEntryHelper'

class MatchEntryGrid extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    matchId: null,
    matchTeams: []
  }

  componentDidMount() {
    console.log(this.props.matchId)
  }
  
  refresh = () => {
    this.refs.jqxgrid.updatebounddata();
  }

  render() {  
    var _this = this;
    var datafields = [
                  { name: 'account_name', type: 'string' },
                  { name: 'rate', type: 'string' },
                  { name: 'amount', type: 'string' },
                  { name: 'lk', type: 'string' },
                  { name: 'team_name', type: 'string' },
                  { name: 'team_id', type: 'string' },
                  { name: 'account_id', type: 'string' },
                  { name: 'match_id', type: 'string' },
                  { name: 'amounts', type: 'string' },
              ];

    console.log(this.props.matchTeams)
    if(this.props.matchTeams.length>0) {

        this.props.matchTeams.map(function(item, i) {
            datafields.push({
                name: item.team_name
            })
        })
    }

    let source =
          {
              datatype: 'json',
              datafields: datafields,
   
              id: '_id',
              url: '/match_entries?id='+this.props.matchId
          };
     
      let dataAdapter = new $.jqx.dataAdapter(source);

      let columns =
      [
          {
              text: 'Delete', datafield: 'Delete', columntype: 'button', width:50, filterable: false,
              cellsrenderer: () => {
                  return 'Delete';
              }, buttonclick: (row) => {
                  let dataRecord = this.refs.jqxgrid.getrowdata(row);
                  console.log(dataRecord.uid)
                  MatchEntryHelper.delete(dataRecord.uid).then(function(res){
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
                  MatchEntryHelper.show(dataRecord.uid).then(function(res){
                    console.log(res.data)
                    _this.setState({
                      isNew: false,
                      item: res.data
                    })
                  })

              }
          },
          { text: 'Party', datafield: 'account_name', width: 150 },
          { text: 'Rate', datafield: 'rate', width: 100 },
          { text: 'Amount', datafield: 'amount', width: 100 },
          { text: 'L/K', datafield: 'lk', width: 50 },
          { text: 'Team', datafield: 'team_name', width: 100 }
      ];

        this.props.matchTeams.map(function(item, i) {
            columns.push({
                text: item.team_name, datafield: item.team_name, width: 100 
            })
        })
       
      return (
        <div>
            <JqxGrid
              ref="jqxgrid"
              width={"100%"} height={400} source={dataAdapter} pageable={true}
              sortable={true} altrows={true} enabletooltips={true}
              editable={true} columns={columns}
              filterable={true} showfilterrow={true}
            />
        </div>
      );
  }
}

export default MatchEntryGrid;
