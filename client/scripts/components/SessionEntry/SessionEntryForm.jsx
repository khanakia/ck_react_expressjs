import React from 'react'
import ComboBoxMatch from '../controls/ComboBoxMatch.jsx'
import ComboBoxTeam from '../controls/ComboBoxTeam.jsx'
import ComboBoxMember from '../controls/ComboBoxMember.jsx'
import InputDecimal from '../controls/InputDecimal.jsx'

import SessionEntryHelper from '../../helpers/SessionEntryHelper'

import CSelect from '../controls/CSelect'

import {LIST_SESSION_YN} from '../../Constant'


class SessionEntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchId: this.props.matchId,
            scount: 0,
            item: {
                rate: 1
            }

        }
    }

    static defaultProps = {
        matchId: null,
        sessionId: null,
        onFormSubmitted: function() {},

    }


    edit(rowdata) {
        this.setState({
            scount: this.state.scount + 1,
            item: rowdata
        })
    }

    resetForm = () => {
        this.setState({
            scount: this.state.scount + 1,
            item: {
                rate: 1
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.props.matchId) {
            toastr.error("Please Select Match First.")
            return false;
        }


        if (!this.props.sessionId) {
            toastr.error("Please Select Session First.")
            return false;
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
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit}>
                    <input type="hidden" defaultValue={this.props.matchId} name="match_id" />
                    <input type="hidden" defaultValue={this.props.sessionId} name="session_id" key={this.props.sessionId}/>
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <label>S.N.</label>
                            <div>
                                <input className="form-control form-control-sm w-100p" readOnly={true} defaultValue={item._id} key={item._id}/>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Rate</label>
                            <div>
                                <InputDecimal className="form-control form-control-sm w-100p error-hide required number" name="rate" value={item.rate} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Runs</label>
                            <div>
                                <input type="number" className="form-control form-control-sm w-100p error-hide required number" name="runs" defaultValue={item.runs} key={item._id} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Y/N</label>
                            <div>
                                <CSelect className="uk-select uk-form-small" name="yn" value={item.yn} items={LIST_SESSION_YN}>
                                </CSelect>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Amount</label>
                            <div>
                                <InputDecimal className="form-control form-control-sm w-100p error-hide required number" name="amount" value={item.amount} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Party</label>
                            <div>
                                <ComboBoxMember width={150} field_id="account_id" selectedValue={item.account_id} />
                            </div>
                        </div>
                        <div className="col-auto ">
                          <label className="">&nbsp;</label>
                          <div>
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                              <button className="btn btn-primary btn-sm" type="submit">Save</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto ">
                          <label className="">&nbsp;</label>
                          <div>
                              <button className="btn btn-primary btn-sm" type="button" onClick={this.resetForm}>Cancel</button>

                          </div>
                        </div>
                        <div className="col-auto ">
                          <label className="">&nbsp;</label>
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
