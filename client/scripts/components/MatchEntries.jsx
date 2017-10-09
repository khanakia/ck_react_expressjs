import React from 'react'

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

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
            text: 'Select', datafield: 'Select', columntype: 'button', width:50, filterable: false,
            cellsrenderer: () => {
                return 'Select';
            }, buttonclick: (row) => {
                let dataRecord = this.refs.jqxgrid.getrowdata(row);
                console.log(dataRecord.uid)
                // window.location.href="/#/"
                _this.props.history.push("/match_entries/"+dataRecord.uid)


                // _this.context.router.history.push('/my-new-location')
                // return <Redirect to="/state"  />
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
