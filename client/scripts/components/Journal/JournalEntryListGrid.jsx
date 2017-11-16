import React, { Component } from "react";

import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

class JournalEntryListGrid extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        entriesList: [],
        onEditButtonClick: function(data) {}
    }

    componentDidUpdate() {
        this.dataAdapter.dataBind()
    }

    refresh = () => {
        this.dataAdapter.dataBind()
    }

    render() {
        var datafields = [
            { name: '_id', type: 'string' },
            { name: 'account_name', type: 'string' },
            { name: 'dr_amt', type: 'string' },
            { name: 'cr_amt', type: 'string' },
            { name: 'bal', type: 'string' },
            { name: 'narration', type: 'string' },
            { name: 'account_id', type: 'string' },
            { name: 'match_id', type: 'string' },
            { name: 'journal_id', type: 'string' },
            { name: 'created_at', type: 'date' },
            { name: 'is_monday_final', type: 'boolean' },
            { name: 'ref_type', type: 'string`' },
            { name: 'ref_id', type: 'string' },
            { name: 'type', type: 'string' },
        ];

        let source = {
            datatype: 'json',
            datafields: datafields,
            id: '_id',
            localdata: this.props.entriesList.slice(),
        };


        this.dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [
            { text: 'Id', datafield: '_id', width: 50 },
            { text: 'Match Id', datafield: 'match_id', width: 100 },
            { text: 'Ref. Type', datafield: 'ref_type', width: 100 },
            { text: 'Ref. Id', datafield: 'ref_id', width: 100 },
            { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' },
            { text: 'Account', datafield: 'account_name', width: 150 },
            { text: 'Type', datafield: 'type', width: 100 },
            { text: 'Narration', datafield: 'narration', width: 500 },
            { text: 'Debit', datafield: 'dr_amt', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Credit', datafield: 'cr_amt', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Balance', datafield: 'bal', width: 100, cellsformat: 'd2', aggregates: ['sum'] },
            { text: 'Is Monday Final', datafield: 'is_monday_final', width: 100, columntype: 'checkbox', filterable: false },
        ];

        return (
            <div>
                <JqxGrid key={Math.random()} ref="jqxgrid" 
                        width={ "100%"} height={500} source={this.dataAdapter} 
                        pageable={true} sortable={true} altrows={false} enabletooltips={false} 
                        editable={false} columns={columns} filterable={true} showfilterrow={true} 
                        columnsresize={true} 
                        showstatusbar={true} showaggregates={true} statusbarheight={25} 
                        pagesize={500} pagesizeoptions={['50', '100', '500']} />
            </div>
        );
    }
}

export default JournalEntryListGrid;
