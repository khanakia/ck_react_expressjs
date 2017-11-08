import React, { Component } from "react";

import JqxComboBox from '../jqwidgets-react/react_jqxcombobox.js';

class ComboBoxMatchTeam extends Component {
    static defaultProps = {
        field_name: '',
        field_id: 'match_team_id',
        field_team_id: 'team_id',
        width: 175,
        valueMember: '_id',
        displayMember: 'team_name',
        data: {},
        onChange: function() {},
        onSelect: function() {},
        onClose: function() {},
        selectedValue: null,
    }

    componentWillUnmount() {
        // it was giving error on route change it was still calling the change method for eg. Journal Page select account and then change route
        this.refs.Combo.off('change')
    }
    componentDidMount() {
        this.init()
    }

    componentDidUpdate() {
        this.dataAdapter.dataBind()
        this.init()

        if (this.props.selectedValue) {
            this.setSelectedValue(this.props.selectedValue);
        }
    }

    init() {
        this.refs.Combo.on('change', (e) => {
            var item = this.getSelectedItem();
            // console.log(item)
            if (item) {
                this.refs.nameInput.value = item.label
                this.refs.idInput.value = item.value
                this.refs.teamIdInput.value = item.originalItem.team_id
            } else {
                this.refs.nameInput.value = null;
                this.refs.idInput.value = null;
                this.refs.teamIdInput.value = null
            }
            this.props.onChange(e)
        });

        this.refs.Combo.on('select', (e) => {
            this.props.onSelect(e)
        });

        this.refs.Combo.on('close', (e) => {
            this.props.onClose(e)
        });

        if (this.props.selectedValue) {
            this.setSelectedValue(this.props.selectedValue);
        }

    }

    getSelectedValue() {
        var item = this.refs.Combo.getSelectedItem();
        if (item) return item.value;
        return null;
    }

    getSelectedItem() {
        var item = this.refs.Combo.getSelectedItem();
        if (item) return item;
        return null;
    }

    setSelectedValue(val) {
        this.refs.Combo.selectItem(val);
    }


    // buttonClick() {
    //     console.log(this.refs.JqxComboBox.getSelectedItem().value)
    // }

    render() {
        let source = {
            datatype: 'json',
            datafields: [
                { name: "_id" },
                { name: "team_id" },
                { name: "team_name" }
            ],
            localdata: this.props.data,
            // url: this.props.url,
            // async: false
        };
        this.dataAdapter = new $.jqx.dataAdapter(source, { async: false });

        return (
                <div>
                      <input type="hidden" ref="nameInput" name={this.props.field_name} />
                      <input type="hidden" ref="idInput" name={this.props.field_id} />
                      <input type="hidden" ref="teamIdInput" name={this.props.field_team_id} />
                      <JqxComboBox ref='Combo' key={Math.random()}
                          width={this.props.width} height={28} selectedIndex={-1} source={this.dataAdapter}
                          displayMember={this.props.displayMember} valueMember={this.props.valueMember}
                      />

                      {/*<button onClick={() => this.buttonClick()}>Get Value</button>*/}
                </div>
        )
    }
}

export default ComboBoxMatchTeam;