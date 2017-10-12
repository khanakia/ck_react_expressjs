import React, { Component } from "react";
class InputBox extends Component {


    render() {

        return (
           <input type="text" name="session_name"  defaultValue={this.props.defaultValue} />
        );
    }
}

export default InputBox;
