import React, { PropTypes } from 'react'

class InputDecimal extends React.Component {

    constructor(props) {
      super(props);


      var value = parseFloat(this.props.value)
      value = window.settings.show_decimals=="1" ? parseFloat(value).toFixed(2) : value
      
      this.state = {
          value: value,
      }
    }

    static defaultProps = {        
      className: '',
      type: 'text',
      name: 'input',
      value: 0,
      scale: 2,
      tabIndex: null,
      min: null,
      onChange: function() {}
    }

    componentDidMount() {

  
    }

    componentDidUpdate() {
         
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.value!==this.props.value) {
          this.setState({value: nextProps.value})
      }
    }

  isNumberKey(evt)
   {
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode != 46 && charCode > 31 
        && (charCode < 48 || charCode > 57))
         return false;

      return true;
   }

    handleChange = (event) => {
      // var val = parseFloat(event.target.value).toFixed(2);
      var value = event.target.value.replace(/[^0-9\.\-]+/g, '');
      this.setState({
          value: value
      })
      this.props.onChange(value);
    }

    handleBlur = (event) => {
      var zero = 0;

      console.log(window.settings.show_decimals)
      if(window.settings.show_decimals) {
        var value = parseFloat(event.target.value).toFixed(this.props.scale);
        value = isNaN(value) ? zero.toFixed(this.props.scale)  : value;
      } else {
          var value = parseFloat(event.target.value);
          value = isNaN(value) ? zero : value;
      }
      
      this.setState({
          value: value
      })
    }

    handleKeypress(evt) {
      return false;
    }

    handleOnFocus = () => {
      this.refs.input.select()
    }

    render() {
      // console.log(this.state.value )
      // var value = this.state.value ? parseFloat(this.state.value).toFixed(2) : 0;

      let value = this.state.value
      // value = window.settings.show_decimals=="1" ? parseFloat(value).toFixed(2) : value

      return (
          <input 
            ref="input"
            type={this.props.type} 
            name={this.props.name} 
            className={this.props.className}
            onBlur={this.handleBlur}  
            onChange={this.handleChange} 
            onFocus={this.handleOnFocus}
            value={value} 
            tabIndex={this.props.tabIndex} 
            min= {this.props.min}
            />
      );
    }
}
InputDecimal.propTypes = {
    
};

export default InputDecimal