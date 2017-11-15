import React from 'react'

import ComboBoxLocal from '../controls/ComboBoxLocal'
import ComboBoxMember from '../controls/ComboBoxMember.jsx'
import InputDecimal from '../controls/InputDecimal.jsx'
import CSelect from '../controls/CSelect'
import GlobalHelper from "../../helpers/GlobalHelper"
import MeterEntryHelper from '../../helpers/MeterEntryHelper'
import {LIST_YN} from '../../Constant'

class MeterEntryForm extends React.Component {
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
        meterId: null,
        onFormSubmitted: function() {},
        comboMeterOnClose: function() {},
        meterList: []

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


        if (!this.props.meterId) {
            toastr.error("Please Select Meter First.")
            return false;
        }

        let data = jQuery(this.refs.form).serialize()
        const dataJson = URI.parseQuery(data)
        // console.log(dataJson)
        MeterEntryHelper.save(dataJson, this.state.item._id).then((response) => {
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
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <label>S.N.</label>
                            <div>
                                <input className="form-control form-control-sm w-50p idinput-meter" readOnly={true} defaultValue={item._id} key={item._id}/>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Meter</label>
                            <div>
                                <ComboBoxLocal ref="comboMeter" width={150} field_id="meter_id" 
                                    data={this.props.meterList} displayMember='meter_name'
                                    selectedValue={this.props.meterId} onClose={this.props.comboMeterOnClose} />    
 
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
                                <CSelect className="uk-select uk-form-small" name="yn" value={item.yn} items={LIST_YN}>
                                </CSelect>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label>Rate</label>
                            <div>
                                <InputDecimal className="form-control form-control-sm w-50p error-hide required number" min="0" name="rate" value={item.rate} />
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

export default MeterEntryForm;
