import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

class MatchEntryTeamGrid extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    matchId: null,
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
                  { name: 'team_name', type: 'string' },
                  { name: 'total_bid_amt' },
              ];

    let source =
          {
              datatype: 'json',
              datafields: datafields,
   
              id: '_id',
              url: '/match_teams?match_id='+this.props.matchId
          };
     
      let dataAdapter = new $.jqx.dataAdapter(source);

      let columns =
      [
          { text: 'Team', datafield: 'team_name', width: 150 },
          { text: 'Amount', datafield: 'total_bid_amt', width: 100 },
      ];
       
      return (
        <div>
            <JqxGrid
              ref="jqxgrid"
              width={"100%"} height={400} source={dataAdapter} pageable={true}
              sortable={true} altrows={true} enabletooltips={true}
              editable={false} columns={columns}
              filterable={false}
            />
        </div>
      );
  }
}

export default MatchEntryTeamGrid;
