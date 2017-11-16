import React, { Component } from "react";


import ComboBox from './ComboBox.jsx'
import {API_URL_SESSIONS} from '../../Constant'

class ComboBoxSession extends ComboBox {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    field_name: '',
    field_id: '',
    width: 225,
    onChange: function(){},
    onSelect: function() {},
    onClose: function() {},
    selectedValue: null,
    width: 225,
    name: 'session',
    url: API_URL_SESSIONS,
    valueMember: '_id',
    displayMember: 'session_name'
  }
}

export default ComboBoxSession;
