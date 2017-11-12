import React from 'react'


// import ComboBoxSession from '../controls/ComboBoxSession.jsx'
import ComboBoxLocal from '../controls/ComboBoxLocal'
import ComboBoxMember from '../controls/ComboBoxMember.jsx'
import InputDecimal from '../controls/InputDecimal.jsx'

import SessionEntryHelper from '../../helpers/SessionEntryHelper'

import CSelect from '../controls/CSelect'

import {LIST_SESSION_YN, URL_SESSIONS} from '../../Constant'

import GlobalHelper from "../../helpers/GlobalHelper"

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
        comboSessionOnClose: function() {},
        sessionList: []

    }

    componentDidMount() {
        this.mtrap = GlobalHelper.mounstrapFormInit(this.refs.form)
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

        if(! $(this.refs.form).valid()) {
          return false;
        }

        if (!this.props.matchId) {
            toastr.error("Please Select Match First.")
            return false;
        }


        if (!this.props.sessionId) {
            toastr.error("Please Select Session First.")
            return false;
        }

        let data = jQuery(this.refs.form).serialize()
        const dataJson = URI.parseQuery(data)
        // console.log(dataJson)
        SessionEntryHelper.save(dataJson, this.state.item._id).then((response) => {
            this.props.onFormSubmitted(response.data);
        }).catch((err) => {
            toastr.error(err.response.data.message)
        })
        return false;
    }


    render() {

        const { item } = this.state
        return (
            <div>
                <form ref="form"  className="moustrapform" >
                    <input type="hidden" defaultValue={this.props.matchId} name="match_id" />
                    {/*<input type="hidden" defaultValue={this.props.sessionId} name="session_id" key={this.props.sessionId}/>*/}
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <label>S.N.</label>
                            <div>
                                <input className="form-control form-control-sm w-50p idinput-session" readOnly={true} defaultValue={item._id} key={item._id}/>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Session</label>
                            <div>
                                {/*<ComboBoxSession ref="comboSession" width={150} field_id="session_id" 
                                    selectedValue={this.props.sessionId} onClose={this.props.comboSessionOnClose} 
                                    url={URL_SESSIONS + "?match_id=" + this.props.matchId}/>*/}

                                <ComboBoxLocal ref="comboSession" width={150} field_id="session_id" 
                                    data={this.props.sessionList} displayMember='session_name'
                                    selectedValue={this.props.sessionId} onClose={this.props.comboSessionOnClose} />    
 
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Rate</label>
                            <div>
                                <InputDecimal className="form-control form-control-sm w-50p error-hide required number" min="0" name="rate" value={item.rate} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Runs</label>
                            <div>
                                <input type="number" className="form-control form-control-sm w-50p error-hide required number" min="0" name="runs" defaultValue={item.runs} key={item._id} />
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
                                <InputDecimal className="form-control form-control-sm w-100p error-hide required number" min="0" name="amount" value={item.amount} />
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
                              <button className="btn btn-primary btn-sm btnsubmit" type="button" onClick={this.onSubmit}><i className="fa fa-floppy-o"></i> Save</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto ">
                          <label className="">&nbsp;</label>
                          <div>
                              <button className="btn btn-danger btn-sm" type="button" onClick={this.resetForm}><i className="fa fa-undo"></i> Cancel</button>

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
