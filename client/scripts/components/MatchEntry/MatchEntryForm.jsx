import React from 'react'


import ComboBoxMatchTeam from '../controls/ComboBoxMatchTeam.jsx'
import ComboBoxTeam from '../controls/ComboBoxTeam.jsx'
import ComboBoxMember from '../controls/ComboBoxMember.jsx'
import InputDecimal from '../controls/InputDecimal.jsx'


import MatchEntryHelper from '../../helpers/MatchEntryHelper'
import CSelect from '../controls/CSelect'

import { LIST_MATCH_LK, MATCH_TYPE_CUP} from '../../Constant'

import GlobalHelper from "../../helpers/GlobalHelper"

class MatchEntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: {},
            matchId: this.props.matchId,
            isNew: true,
            item: {
                _id: null,
                account_id: null,
                match_team_id: null,
                rate: 0,
                amount: 0,
                lk: "L"
            },
            scount: 0,
            teamsList: []

        }
    }

    static defaultProps = {
        matchId: null,
        onFormSubmitted: function() {},
        getBookNo: function() {}
    }

    componentDidMount() {
        this.mtrap = GlobalHelper.mounstrapFormInit(this.refs.form)
    }

    componentDidUpdate() {
        jQuery(this.refs.form).find('input').off('focus').focus(function(){
            jQuery(this).select()
        })
    }

    edit(rowdata) {
        this.setState({
            scount: this.state.scount + 1,
            isNew: false,
            item: rowdata
        })
        this.refs.idinput.focus()
    }

    resetForm = () => {
        // console.log(this.state)
        this.setState({
            isNew: false,
            scount: this.state.scount + 1,
            item: {
                match_team_id: this.refs.comboMatchTeam.getSelectedValue()
            }
        })
    }

    formSubmit = (e) => {
        e.preventDefault()

        var book_no = this.props.getBookNo();
        // console.log("book_no", book_no)

        // return false;

        if (!this.props.matchId) {
            toastr.error("Please Select Match First.")
        }

        let data = jQuery(this.refs.form).serialize()
        const dataJson = URI.parseQuery(data)
        dataJson.book_no = book_no;

        MatchEntryHelper.save(dataJson, this.state.item._id).then((response) => {
            // If in Edit Mode then clear form after submit
            // if(this.state.item._id) {
            // }
            this.resetForm()
            this.refs.idinput.focus()

            this.props.onFormSubmitted(response);

        }).catch((err) => {
            toastr.error(err.response.data.message)
        })
        
        return false;
    }

    render() {

        const { item, scount } = this.state
        const comm_yn = this.props.match.match_type==MATCH_TYPE_CUP ? false : true
        return (
            <div>
                <form ref="form">
                    <input type="hidden" defaultValue={this.props.matchId} name="match_id" />
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <label className="">S.N.</label>
                            <div>
                                <input className="form-control form-control-sm w-50p error-hide required number idinput-match" type="number" readOnly={true} ref="idinput" key={item._id} defaultValue={item._id} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label className="">Rate</label>
                            <div>
                                <InputDecimal className="form-control form-control-sm w-100p error-hide required number" name="rate" value={item.rate} key={scount} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label className="">Amount</label>
                            <div>
                                <InputDecimal className="form-control form-control-sm w-100p error-hide required number" name="amount" value={item.amount} key={scount} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label className="">L/K</label>
                            <div>
                                <CSelect className="form-control form-control-sm w-50p" name="lk" value={item.lk} items={LIST_MATCH_LK}>
                                </CSelect>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label className="">Team</label>
                            <div>
                                <ComboBoxMatchTeam width={150} height={35} ref="comboMatchTeam" selectedValue={item.match_team_id} key11={this.state.item._id} data={this.props.teamsList.slice()} />
                            </div>
                        </div>
                        <div className="col-auto">
                            <label className="">Party</label>
                            <div>
                                <ComboBoxMember width={150} field_id="account_id" selectedValue={item.account_id} key={scount} />
                            </div>
                        </div>
                        <div className="col-auto ">
                            <label className="">&nbsp;</label>
                            <div>
                                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                    <button className="btn btn-primary btn-sm" type="button" onClick={this.formSubmit}><i className="fa fa-floppy-o"></i> Save</button>
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
                                    <input type="hidden" value="false" name="comm_yn" />
                                    <input className="form-check-input" type="checkbox" name="comm_yn" value={comm_yn} defaultChecked={comm_yn}/> Add Commission
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default MatchEntryForm;
