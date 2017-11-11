import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import { URL_SESSION_ENTRIES_WINLOSSS_LIST } from '../../Constant'

class SessionEntryWinLossGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        // sessionId: null,
        entriesList: [],
        onEditButtonClick: function(data) {},
        lastEnteredRun: null
    }

    componentDidMount() {
        // window.abc = this
    }

    componentDidUpdate() {
        this.scrollToRow(this.props.lastEnteredRun)
    }

    scrollToRow(index) {
        // var rows = this.refs.jqxgrid.getrows()
        // console.log(rows.length)
        // this.refs.jqxgrid.ensurerowvisible(rows.length-1)
        // this.refs.jqxgrid.ensurerowvisible(rows.length-1)
        // console.log(index)
        if(index>0) {
            this.refs.jqxgrid.ensurerowvisible(index)
            this.refs.jqxgrid.ensurerowvisible(index)            
        }
    }

    refresh = () => {
        this.refs.jqxgrid.updatebounddata();
    }

    render() {

        var cellclassname_Amt = function(row, column, value, data) {
            // console.log(row, column , value, data)
            if (data.amount < 0) {
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
            // url: URL_SESSION_ENTRIES_WINLOSSS_LIST + '/' + this.props.sessionId
            localdata: this.props.entriesList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [
            { text: 'Runs', datafield: 'runs', width: 60, cellclassname: cellclassname_Amt },
            {
                text: 'Amount',
                datafield: 'amount',
                width: 100,
                cellclassname: cellclassname_Amt
            }
        ];

        return (
            <div>
                <JqxGrid ref="jqxgrid" key={Math.random()}
                    source={this.dataAdapter}
                    width={160} height={390} 
                    sortable={false} altrows={false} enabletooltips={false} 
                    editable={false} columns={columns} 
                    filterable={false} showfilterrow={false} pagesize={100} pageable={false} />
            </div>
        );
    }

}

export default SessionEntryWinLossGrid;
