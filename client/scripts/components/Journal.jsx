import React, { Component } from "react";

import ComboBoxMember from './controls/ComboBoxMember.jsx'
import JournalEntryForm from './Journal/JournalEntryForm.jsx'
import JournalEntryGrid from './Journal/JournalEntryGrid.jsx'


import JournalEntryHelper from "helpers/JournalEntryHelper"

class Journal extends Component {

    onCloseComboMember = () => {
        const accountId = (this.refs.comboMember.getSelectedValue())
        console.log(accountId)
        this.props.history.push("/journals/" + accountId)
       
    }


    componentDidMount() {
        this.refs.comboMember.setSelectedValue(this.props.match.params.id)
    }

    onFormSubmitted = () => {
        console.log("FORM SUBMITTED")
        this.refs.entryGrid.refresh()
    }


    render() {  
        const id = this.props.match.params.id

        return (
            <div>
                <h3>Journal</h3>
                <div className="uk-margin">
                    Select Account: <ComboBoxMember 
                        field_id="from_account_id" ref="comboMember" onClose={this.onCloseComboMember}  />
                </div>

                { id ?
                    <div>
                        <div className="mt-3 mb-1">
                            <JournalEntryForm accountId={id} onFormSubmitted={this.onFormSubmitted} />
                        </div>    
                        <JournalEntryGrid ref="entryGrid" accountId={id} key={id} />
                    </div>
                    : ''
                }
                
            </div>
        );
    }
}

export default Journal;
