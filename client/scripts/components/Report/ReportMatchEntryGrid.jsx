import React, { Component } from "react";
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

class ReportMatchEntryGrid extends Component {
    constructor(props) {
        super(props);
        this.hasInit = false
    }

    static defaultProps = {
        matchId: null,
        teamsList: [],
        entriesList : [],
        onEditButtonClick: function(data) {},
        onDataUpdate: function() {},
        filterable: true,
        showfilterrow: true,
        selectionmode: 'singlerow'
    }

    componentWillMount() {
        this.initDataAdapter()
    }

    componentDidUpdate() {
        console.log('update')
        // const {sessionEntriesList} = this.props.sessionEntryStore
        console.log(this.props.entriesList.slice())
        this.source.localdata = this.props.entriesList.slice()
        // this.source.localdata = sessionEntriesList.slice()
        this.dataAdapter.dataBind()

        // let el = document.querySelector('#matchEntryGrid'); 
        // if(el) {
        //     let headers = el.querySelectorAll('.jqx-grid-column-header');
        //     let lastHeader = headers[headers.length -1];
        //     if(lastHeader && lastHeader.parentElement.previousElementSibling) {
        //         lastHeader.parentElement.remove();
        //     }
        // }
    }

    // refresh = () => {        
    //     this.dataAdapter.dataBind()
    // }


    initDataAdapter = () => {
        // console.log('inIT')
        var datafields = [
            { name: '_id', type: 'string' },
            { name: 'account_name', type: 'string' },
            { name: 'rate', type: 'number' },
            { name: 'amount', type: 'number' },
            { name: 'lk', type: 'string' },
            { name: 'team_name', type: 'string' },
            { name: 'team_id', type: 'number' },
            { name: 'account_id', type: 'number' },
            { name: 'match_id', type: 'number' },
            { name: 'match_team_id', type: 'number' },
            { name: 'amounts', type: 'number' },
            { name: 'comm_yn', type: 'boolean' },
            { name: 'is_summarized', type: 'boolean' },
            { name: 'created_at', type: 'date'},
            { name: 'updated_at', type: 'date'}
        ];

        this.source = {
            datatype: 'json',
            id: '_id',
            localdata: this.props.entriesList.slice(),
            datafields: datafields,
        };

        this.dataAdapter = new $.jqx.dataAdapter(this.source);

        this.columns = [
            { text: 'Id', datafield: '_id', width: 50 },
            { text: 'Party', datafield: 'account_name', width: 150 },
            { text: 'Rate', datafield: 'rate', width: 100 },
            { text: 'Amount', datafield: 'amount', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'L/K', datafield: 'lk', width: 50 },
            { text: 'Team', datafield: 'team_name', width: 100 },
        ];

      
        this.columns.push(
                { text: 'Comm YN', datafield: 'comm_yn', width: 100, columntype: 'checkbox', filtertype:'bool' },
                { text: 'Is Summarized', datafield: 'is_summarized', width: 100, columntype: 'checkbox', filtertype:'bool'},
                { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' },
            )
    }

    render() {
        // console.log(this.props.entriesList)
        const { filterable, showfilterrow, selectionmode } = this.props

        return (
            <div id="matchEntryGrid">
                <JqxGrid key={Math.random()}
                  ref="jqxgrid"
                  width={"100%"} height={400} source={this.dataAdapter} pageable={false}
                  sortable={true} altrows={true} enabletooltips={false}
                  editable={false} columns={this.columns} selectionmode={selectionmode}
                  showstatusbar={true} showaggregates={true} statusbarheight={25}
                  filterable={filterable} showfilterrow={showfilterrow}
                />
            </div>
        );
    }
}

export default ReportMatchEntryGrid;
