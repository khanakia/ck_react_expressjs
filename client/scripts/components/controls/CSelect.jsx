import React, { Component } from "react";

class CSelect extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: this.props.value
      }
    }

    static defaultProps = {
        name: "",
        className: "",
        width: 225,
        onChange: function() {},
        onSelect: function() {},
        selectedValue: null,
        items: []
    }


    getSelectedValue() {
        var e = this.refs.select;
        var val = e.options[e.selectedIndex].value;
        return val;
    }


    setSelectedValue(val) {
        this.refs.select.value = val
    }


    componentDidMount() {
        // alert(this.getSelectedValue())
        // this.setSelectedValue("L")
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.value!==this.props.value) {
          this.setState({value: nextProps.value})
      }
    }

    handleChange = (event) => {
      // var val = parseFloat(event.target.value).toFixed(2);
      var value = event.target.value;
      this.setState({
          value: value
      })
      this.props.onChange(value);
    }

    renderOptions(){
        const items = this.props.items
        return items.map((item,i) => {
            // const selected = (this.props.selected == item.id) ? "selected" : ""
            return(
                <option value={item.id} key={item.id}>{item.text}</option>
            )
        })
    }

    render() {
      // console.log(this.state.value)
        return (
          <select ref="select" className={this.props.className} onChange={this.handleChange} 
            value={this.state.value} name={this.props.name} >
            {this.renderOptions()}
          </select>
        )
    }
}

export default CSelect;
