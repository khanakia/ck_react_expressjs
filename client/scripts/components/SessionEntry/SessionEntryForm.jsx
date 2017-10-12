import React from 'react'
import ComboBoxMatch from '../controls/ComboBoxMatch.jsx'
import ComboBoxTeam from '../controls/ComboBoxTeam.jsx'
import ComboBoxMember from '../controls/ComboBoxMember.jsx'
import InputDecimal from '../controls/InputDecimal.jsx'

import SessionEntryHelper from '../../helpers/SessionEntryHelper'

import CSelect from '../controls/CSelect'

class SessionEntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchId: this.props.matchId,
            scount: 0,
            item: {}

        }
    }

    static defaultProps = {
        matchId: null,
        sessionId: null,
        onFormSubmitted: function() {},

    }


    // componentWillReceiveProps(nextProps) {
    //   if(nextProps.sessionId!==this.props.sessionId) {
    //       this.setState({scount: this.state.scount+1})
    //   }
    // }


    edit(rowdata) {
        this.setState({
            scount: this.state.scount + 1,
            item: rowdata
        })
    }

    resetForm = () => {
        this.setState({
            scount: this.state.scount + 1,
            item: {}
        })
    }

    formSubmit = (e) => {
        e.preventDefault()

        if (!this.props.matchId) {
            toastr.error("Please Select Match First.")
        }

        if (!this.props.sessionId) {
            toastr.error("Please Select Session First.")
        }

        let data = jQuery(e.target).serialize()
        const dataJson = URI.parseQuery(data)
        console.log(dataJson)
        SessionEntryHelper.save(dataJson, this.state.item._id).then((response) => {
            this.props.onFormSubmitted(response);
        }).catch((error) => {
            toastr.error("Validation failed.")
        })
        return false;
    }


    render() {

        const { item } = this.state

        let selectItems = [
            { id: "L", text: "L" },
            { id: "K", text: "K" }
        ]

        return (
            <div>
                <form ref="form" onSubmit={(e)=> this.formSubmit(e)}>
                    <input type="text" defaultValue={this.props.matchId} name="match_id" />
                    <input type="text" defaultValue={this.props.sessionId} name="session_id" key={this.props.sessionId}/>
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <label>S.N.</label>
                            <div>
                                <input className="form-control form-control-sm error-hide required number" type="number" readOnly={true}/>
                            </div>
                        </div>
                        <div className="col-auto uk-padding-left-5 ">
                            <label>Rate</label>
                            <div>
                                <InputDecimal className="form-control form-control-sm error-hide required number" name="rate" value={item.rate} />
                            </div>
                        </div>
                        <div className="col-auto uk-padding-left-5 ">
                            <label>Runs</label>
                            <div>
                                <input type="number" className="form-control form-control-sm error-hide required number" name="runs" value={item.runs} />
                            </div>
                        </div>
                        <div className="col-auto uk-padding-left-5 ">
                            <label>Y/N</label>
                            <div>
                                <CSelect className="uk-select uk-form-small" name="lk" value={item.lk} items={selectItems}>
                                </CSelect>
                            </div>
                        </div>
                        <div className="col-auto uk-padding-left-5 ">
                            <label>Amount</label>
                            <div>
                                <InputDecimal className="form-control form-control-sm error-hide required number" name="amount" value={item.amount} />
                            </div>
                        </div>
                        <div className="col-auto uk-padding-left-5 ">
                            <label>Party</label>
                            <div>
                                <ComboBoxMember width="100%" field_id="account_id" selectedValue={item.account_id} />
                            </div>
                        </div>
                        <div className="col-auto ">
                          <label className="" >&nbsp;</label>
                          <div>
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                              <button className="btn btn-primary btn-sm" type="submit">Save</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto ">
                          <label className="" >&nbsp;</label>
                          <div>
                              <button className="btn btn-primary btn-sm" type="button" onClick={this.resetForm}>Cancel</button>

                          </div>
                        </div>
                        <div className="col-auto ">
                          <label className="" >&nbsp;</label>
                          <div>
                                <label className="form-check-label">
                                  <input type ="hidden" value="false" name="comm_yn" />
                                  <input className="form-check-input" type="checkbox" name="comm_yn" value={true} defaultChecked={true}/> Add Commission
                                </label>
                          </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionEntryForm;
