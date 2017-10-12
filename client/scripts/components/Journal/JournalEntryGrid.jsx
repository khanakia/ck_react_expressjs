import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

import MatchEntryHelper from '../../helpers/MatchEntryHelper'

class JournalEntryGrid extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    accountId: null,
    onEditButtonClick: function(data) {}
  }
  
  refresh = () => {
    this.refs.jqxgrid.updatebounddata();
  }

  render() {  
    var _this = this;
    var datafields = [
                { name: '_id', type: 'string' },
                { name: 'account_name', type: 'string' },
                { name: 'dr_amt', type: 'string' },
                { name: 'cr_amt', type: 'string' },
                { name: 'bal', type: 'string' },
                { name: 'narration', type: 'string' },
                { name: 'account_id', type: 'string' },
                { name: 'journal_id', type: 'string' },
                { name: 'created_at', type: 'string' },
            ];

        let source =
        {
            datatype: 'json',
            datafields: datafields,

            id: '_id',
            url: '/journal_entries?account_id='+this.props.accountId
        };

     
        this.dataAdapter = new $.jqx.dataAdapter(source);
        // console.log(dataAdapter._source)

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
                      // console.log(dataRecord)
                      _this.props.onEditButtonClick(dataRecord);
                  }
              },
              { text: 'Date', datafield: 'created_at', width: 150 },
              { text: 'Account', datafield: 'account_name', width: 150 },
              { text: 'Narration', datafield: 'narration', width: 400 },
              { text: 'Debit', datafield: 'dr_amt', width: 100 },
              { text: 'Credit', datafield: 'cr_amt', width: 50 },
              { text: 'Balance', datafield: 'bal', width: 100 }
        ];
       
      return (
        <div>
            <JqxGrid
              ref="jqxgrid"
              width={"100%"} height={400} source={this.dataAdapter} pageable={true}
              sortable={true} altrows={false} enabletooltips={false}
              editable={false} columns={columns}
              filterable={true} showfilterrow={true} columnsresize={true}
            />
        </div>
      );
  }
}

export default JournalEntryGrid;
