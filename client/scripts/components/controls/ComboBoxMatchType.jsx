import React, { Component } from "react";


import ComboBox from './ComboBox.jsx'

class ComboBoxMatchType extends ComboBox {
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
    url: '/match_types',
    valueMember: 'match_type_val',
    displayMember: 'match_type_name'
  }
}

export default ComboBoxMatchType;
