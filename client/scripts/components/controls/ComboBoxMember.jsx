import React, { Component } from "react";

import JqxComboBox from '../jqwidgets-react/react_jqxcombobox.js';

class ComboBoxMember extends Component {
  static defaultProps = {
    inputName: 'account'
  }


  componentDidMount() {
    this.refs.JqxComboBox.on('change', (e) => {
        var value = e.args.item.value;
            // console.log(value)
            this.refs.inputHidden.value = value;
        });
  }

  render() {  
    let source =
        {
            datatype: 'json',
            datafields: [
                { name: '_id' },
                { name: 'account_name' }
            ],
            url: '/accounts',
            async: false
        };
    this.memberDataAdapter = new $.jqx.dataAdapter(source, { async: false });
    return (
        <div>
            <JqxComboBox ref='JqxComboBox'
                width={300} height={25} selectedIndex={-1} source={this.memberDataAdapter}
                displayMember={'account_name'} valueMember={'_id'}
            />
            <input type="hidden" ref="inputHidden" name={this.props.inputName} />
        </div>
    )
  }
}

export default ComboBoxMember;
