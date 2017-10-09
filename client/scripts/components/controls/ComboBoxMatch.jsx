import React, { Component } from "react";


import ComboBox from './ComboBox.jsx'

class ComboBoxMatch extends ComboBox {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    field_name: '',
    field_id: '',
    width: 225,
    onChange: function(){},
    onSelect: function() {},
    selectedValue: null,
    width: 225,
    name: 'match',
    url: '/matches',
    valueMember: '_id',
    displayMember: 'match_name'
  }
}

export default ComboBoxMatch;
