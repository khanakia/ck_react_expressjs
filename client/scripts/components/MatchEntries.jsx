/*
  This page will show all the matches which is not declared yet so user can enter to particular match to add entries
*/
import React from 'react'

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';
import {URL_MATCHES, URL_MATCH_ENTRIES_MATCH, APP_URL_MDI_MATCH} from '../Constant';

class MatchEntries extends React.Component {
  render() {
    var _this = this;
    let source =
      {
          datatype: 'json',
          datafields: [
              { name: 'match_name', type: 'string' },
          ],

          id: '_id',
          url: URL_MATCHES,

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
            text: 'Select', datafield: 'Select', columntype: 'button', width:50, filterable: false,
            cellsrenderer: () => {
                return 'Select';
            }, buttonclick: (row) => {
                let dataRecord = this.refs.jqxgrid.getrowdata(row);
                _this.props.history.push(URL_MATCH_ENTRIES_MATCH + "/" + dataRecord.uid)
            }
        },
        {
            text: 'Select', datafield: 'Select1', columntype: 'button', width:50, filterable: false,
            cellsrenderer: () => {
                return 'Select';
            }, buttonclick: (row) => {
                let dataRecord = this.refs.jqxgrid.getrowdata(row);
                _this.props.history.push(APP_URL_MDI_MATCH + "/" + dataRecord.uid)
            }
        }
    ];
    return (
      <div>
        <h3>Select Match</h3>
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

export default MatchEntries;
