import React from 'react'


import JqxDateTimeInput from '../jqwidgets-react/react_jqxdatetimeinput.js';
import ComboBoxMember from '../controls/ComboBoxMember.jsx'
import InputDecimal from '../controls/InputDecimal.jsx'

import JournalEntryHelper from '../../helpers/JournalEntryHelper'



class JournalEntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchId: this.props.matchId,
            isNew: true,
            item: {
                _id: null,
                account_id: null,
                narration: null,
                dr_amt: 0,
                cr_amt: 0,                
            },
        }
    }

    static defaultProps = {
        matchId: null,
        onFormSubmitted: function() {},
        getBookNo: function() {}
    }

    edit(rowdata) {
        this.setState({
            isNew: false,
            item: rowdata
        })
    }

    resetForm = () => {
        console.log(this.state)
        this.setState({
            isNew: false,
            item: {

            }
        })
    }

    formSubmit = (e) => {
        e.preventDefault()

        if(!jQuery(this.refs.form).valid()) {
           return false;
        }
        
        const dated = this.refs.dated.getText()
        if (!dated) {
            toastr.error("Please Select Date.")
        }

        if (!this.props.accountId) {
            toastr.error("Please Select Account First.")
        }

        let data = jQuery(this.refs.form).serialize()

        const dataJson = URI.parseQuery(data)
        dataJson.created_at = dated;
        dataJson.from_account_id = this.props.accountId
        console.log(dataJson)
        JournalEntryHelper.save(dataJson, this.state.item._id).then((response) => {
            this.props.onFormSubmitted(response);
        }).catch((err) => {
            console.log(err)
            toastr.error(err.response.data.message)
            // console.log(error)
        })
        return false;
    }

    render() {

        const { item } = this.state

        return (
            <div>
                <form ref="form" >
                    <div className="form-row">
                        <div className="col-auto">
                            <label>Date</label>
                            <div>
                                <JqxDateTimeInput ref="dated" width={110} height={25} />
                            </div>
                        </div>
                        <div className="col-auto ">
                            <label>Account</label>
                            <div>
                                <ComboBoxMember width="150" field_id="account_id" selectedValue={item.account_id} key={this.state.item._id} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Narration</label>
                            <div>
                                <input className="form-control form-control-sm error-hide w-300p required" name="narration"  />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Pay (Dr.)</label>
                            <div>
                                <InputDecimal className="form-control form-control-sm error-hide required number" name="dr_amt" value={item.dr_amt} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Receive (Cr.)</label>
                            <div>
                                <InputDecimal className="form-control form-control-sm error-hide required number" name="cr_amt" value={item.cr_amt} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>&nbsp;</label>
                            <div>
                                <button className="btn btn-primary btn-sm" type="button" onClick={this.formSubmit}>Save</button>
                            </div>
                        </div>
                        <div className="col-auto ">
                          <label className="" >&nbsp;</label>
                          <div>
                              <button className="btn btn-primary btn-sm" type="button" onClick={this.resetForm}>Cancel</button>

                          </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default JournalEntryForm;
