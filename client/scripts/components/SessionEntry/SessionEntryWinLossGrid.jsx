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
        var _this = this;
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
            { text: 'Runs', datafield: 'runs', width: 150 },
            { text: 'Amount', datafield: 'amount', width: 100 }
        ];

        return (
            <div>
                <JqxGrid
                  ref="jqxgrid"
                  width={"100%"} height={600} source={dataAdapter} pageable={true}
                  sortable={false} altrows={false} enabletooltips={false}
                  editable={false} columns={columns}
                  filterable={false} showfilterrow={false}
                  pagesize={100}
                />
            </div>
        );
    }

}

export default SessionEntryWinLossGrid;
