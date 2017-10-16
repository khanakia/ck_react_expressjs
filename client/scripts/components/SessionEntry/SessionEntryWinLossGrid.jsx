import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import { URL_SESSION_ENTRIES_WINLOSSS_LIST } from '../../Constant'

class SessionEntryWinLossGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        sessionId: null,
        onEditButtonClick: function(data) {}
    }

    
    refresh = () => {
        this.refs.jqxgrid.updatebounddata();
    }

    render() {

        var cellclassname_Amt = function (row, column, value, data) {
                     // console.log(row, column , value, data)
                     if(data.amount<0) {
                        return "jqx_cell_bgdanger"
                     } else {
                        return "jqx_cell_bgsuccess"
                     }
                }
        var datafields = [
            { name: 'runs', type: 'string' },
            { name: 'amount', type: 'string' },
        ];

        let source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            url: URL_SESSION_ENTRIES_WINLOSSS_LIST + '/' + this.props.sessionId
        };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [
            { text: 'Runs', datafield: 'runs', width: 150, cellclassname: cellclassname_Amt },
            { text: 'Amount', datafield: 'amount', width: 100, cellclassname: cellclassname_Amt
            }                  
        ];

        return (
            <div>
                <JqxGrid key={this.props.sessionId} 
                  ref="jqxgrid"
                  width={"100%"} height={600} source={dataAdapter} 
                  sortable={false} altrows={false} enabletooltips={false}
                  editable={false} columns={columns}
                  filterable={false} showfilterrow={false}
                  pagesize={100} pageable={false}
                />
            </div>
        );
    }

}

export default SessionEntryWinLossGrid;
