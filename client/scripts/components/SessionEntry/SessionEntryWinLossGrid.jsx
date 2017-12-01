import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
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
        window.abc = this
    }

    componentDidUpdate() {
        // console.log(this.props.lastEnteredRun)
        this.scrollToRow(this.props.lastEnteredRun)
    }

    scrollToRow(index) {
        // var rows = this.refs.jqxgrid.getrows()
        // console.log(rows.length)
        // this.refs.jqxgrid.selectrow(rows.length-1)
        // this.refs.jqxgrid.ensurerowvisible(rows.length-1)
        // console.log(index)
        if(index>0) {
            var newIndex = index+4
            try {
                // console.log(index)
                this.refs.jqxgrid.selectrow(index)
                this.refs.jqxgrid.ensurerowvisible(newIndex)
            } catch(err) {
                
            }
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
                    width={'100%'} height={400} 
                    sortable={false} altrows={false} enabletooltips={false} 
                    editable={false} columns={columns} 
                    filterable={false} showfilterrow={false} pagesize={100} pageable={false} />
            </div>
        );
    }

}

export default SessionEntryWinLossGrid;
