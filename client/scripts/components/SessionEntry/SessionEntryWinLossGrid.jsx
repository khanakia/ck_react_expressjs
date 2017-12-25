import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

@inject('sessionEntryStore')
@observer
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

    componentWillMount() {
        this.initDataAdapter()
    }

    componentDidMount() {
        // window.abc = this
    }

    componentDidUpdate() {

        const {sessionWinLossList, lastEnteredRun} = this.props.sessionEntryStore

        this.source.localdata = sessionWinLossList.slice()
        this.dataAdapter.dataBind()

        // console.log(this.props.lastEnteredRun)
        // this.scrollToRow(this.props.lastEnteredRun)
        this.scrollToRow(lastEnteredRun)
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

    initDataAdapter() {
         const {sessionWinLossList, lastEnteredRun} = this.props.sessionEntryStore


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

        this.source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            // localdata: this.props.entriesList.slice(),
            localdata: sessionWinLossList.slice(),
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'Runs', datafield: 'runs', width: 60, cellclassname: cellclassname_Amt },
            {
                text: 'Amount',
                datafield: 'amount',
                width: 100,
                cellclassname: cellclassname_Amt
            }
        ];
    }

    render() {

       const {sessionWinLossList, lastEnteredRun} = this.props.sessionEntryStore

        return (
            <div>
                <JqxGrid ref="jqxgrid" key11={Math.random()}
                    source={this.dataAdapter}
                    width={'100%'} height={400} 
                    sortable={false} altrows={false} enabletooltips={false} 
                    editable={false} columns={this.columns} 
                    filterable={false} showfilterrow={false} pagesize={100} pageable={false} />
            </div>
        );
    }

}

export default SessionEntryWinLossGrid;
