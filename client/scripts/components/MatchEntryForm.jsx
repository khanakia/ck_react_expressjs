import React from 'react'
import ComboBoxMatch from './controls/ComboBoxMatch.jsx'
import ComboBoxTeam from './controls/ComboBoxTeam.jsx'
import ComboBoxMember from './controls/ComboBoxMember.jsx'
import InputDecimal from './controls/InputDecimal.jsx'

import MatchEntryHelper from '../helpers/MatchEntryHelper'


class MatchEntryForm extends React.Component {
  static defaultProps = {
    matchId : null,
    onFormSubmitted: function() {}
  }

  formSubmit(e) {
    e.preventDefault()
    var _this = this;
    
    if(!this.props.matchId) {
      toastr.error("Please Select Match First.")
    }

    let data = jQuery(e.target).serialize()
    console.log(data)
    MatchEntryHelper.store(data).then((response) => {
            
      this.props.onFormSubmitted(response);
    })
    return false;
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={(e) => this.formSubmit(e)}>
          <input type="text" defaultValue={this.props.matchId} name="match_id"/>
          <div className="uk-grid">
            <div className="uk-width-1-12">
              <label className="uk-form-label" >S.N.</label>
              <div className="uk-form-controls">
                  <input className="uk-input uk-form-small error-hide required number" type="number" readOnly={true}/>
              </div>
            </div>
            <div className="uk-width-1-12 uk-padding-left-5 ">
              <label className="uk-form-label" >Rate</label>
              <div className="uk-form-controls">
                <InputDecimal className="uk-input uk-form-small error-hide required number" name="rate" />
              </div>
            </div>
            <div className="uk-width-1-12 uk-padding-left-5 ">
              <label className="uk-form-label" >Amount</label>
              <div className="uk-form-controls">
                  <InputDecimal className="uk-input uk-form-small error-hide required number" name="amount" />
              </div>
            </div>
            <div className="uk-width-1-12 uk-padding-left-5 ">
              <label className="uk-form-label" >L/K</label>
              <div className="uk-form-controls">
                  <select className="uk-select uk-form-small" name="lk">
                    <option value="L">L</option>
                    <option value="K">K</option>
                  </select>
              </div>
            </div>
            <div className="uk-width-1-12 uk-padding-left-5 ">
              <label className="uk-form-label" >Team</label>
              <div className="uk-form-controls">
                  <ComboBoxTeam width="100%" field_id="team_id" />
              </div>
            </div>
            <div className="uk-width-1-12 uk-padding-left-5 ">
              <label className="uk-form-label" >Party</label>
              <div className="uk-form-controls">
                  <ComboBoxMember width="100%" field_id="account_id"/>
              </div>
            </div>
            <div className="uk-width-1-6 uk-padding-left-5  ">
              <label className="uk-form-label" >&nbsp;</label>
              <div className="uk-form-controls">
                  <button className="uk-button uk-button-primary uk-button-small" type="submit">Save</button>
                    <input type ="hidden" value="false" name="comm_yn" />
                  <label className="uk-padding-left-5">
                    <input className="uk-checkbox" type="checkbox" name="comm_yn" defaultChecked={true}/> Add Commission</label>
              </div>
            </div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default MatchEntryForm;
