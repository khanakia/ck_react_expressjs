import React from 'react'
import { render } from 'react-dom'


import ComboBoxMatchTeam from '../controls/ComboBoxMatchTeam.jsx'
import ComboBoxTeam from '../controls/ComboBoxTeam.jsx'
import ComboBoxMember from '../controls/ComboBoxMember.jsx'
import InputDecimal from '../controls/InputDecimal.jsx'


import MatchEntryHelper from '../../helpers/MatchEntryHelper'
import CSelect from '../controls/CSelect'

import { LIST_MATCH_LK, MATCH_TYPE_CUP} from '../../Constant'

import GlobalHelper from "../../helpers/GlobalHelper"
import AccountHelper from "../../helpers/AccountHelper"

import AccountLimitExceed from '../controls/AccountLimitExceed'

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
        this.mtrap = GlobalHelper.mousetrapFormInit(this.refs.form)
        jQuery(this.refs.form).find('input').off('focus').focus(function(){
            jQuery(this).select()
        })
    }

    componentDidUpdate() {
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
        
        let data = jQuery(this.refs.form).serialize()
        const dataJson = URI.parseQuery(data)

        AccountHelper.canBid(dataJson.account_id, dataJson.amount).then((response) => {
            console.log(response)
            var responseData = response.data

            if(responseData.canBid) {
                this.saveForm()
            } else {

                let widgetContainer = document.createElement('div');
                render(<AccountLimitExceed item={responseData} />, widgetContainer);

                $.confirm({
                    title: 'Limit Exceeded!',
                    content: widgetContainer,
                    // onOpen: function () {
                    //     // after the modal is displayed.
                    //     alert('onOpen');
                    // },
                    buttons: {
                        confirm: {
                            text: 'Confirm',
                            btnClass: 'btn-blue',
                            keys: ['enter'],
                            action: () => {
                                this.saveForm()
                            }
                        },
                        // confirm: () => {
                        //     console.log('confirmed')
                        //     this.saveForm()
                        // },
                        cancel: function () {
                            
                        },
                    }
                });
            }
        })
        
        return false;
    }

    saveForm() {
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

            setTimeout(() => {
                this.refs.idinput.focus()
            }, 500)

            this.props.onFormSubmitted(response);

        }).catch((err) => {
            toastr.error(err.response.data.message)
        })

    }

    onCloseComboMember = () => {
        this.refs.submitBtn.focus()
    }

    render() {

        const { item, scount } = this.state
        const comm_yn = this.props.match.match_type==MATCH_TYPE_CUP ? false : true
        return (
            <div>
                <form ref="form" className="matchEntryForm">
                    <input type="hidden" defaultValue={this.props.matchId} name="match_id" />
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <label className="">S.N.</label>
                            <div>

                                <input className="form-control form-control-sm w-50p error-hide required number idinput-match" ref="idinput" type="number" readOnly={true} key={item._id} defaultValue={item._id} />

                            </div>
                        </div>
                        <div className="col-auto">
                            <label className="">Rate</label>
                            <div>

                                <InputDecimal className="form-control form-control-sm w-100p error-hide required number" name="rate" scale={3} ref="rate" value={item.rate} />
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
                                <ComboBoxMember width={150} field_id="account_id" selectedValue={item.account_id} key={scount} url="/accounts?status=true" onClose={this.onCloseComboMember} />
                            </div>
                        </div>
                        <div className="col-auto ">
                            <label className="">&nbsp;</label>
                            <div>
                                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                    <button className="btn btn-primary btn-sm" type="button" ref="submitBtn" onClick={this.formSubmit}><i className="fa fa-floppy-o"></i> Save</button>
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
