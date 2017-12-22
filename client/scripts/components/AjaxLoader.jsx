import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

@inject('ajaxStore')
@observer
class AjaxLoader extends Component {


    render() {

    	const { ajaxRunningCount } = this.props.ajaxStore
    	// console.log(ajaxRunningCount)
    	if(ajaxRunningCount==0) return null
        return (
            <div className="progressBar">
         		Progressing..
            </div>
        );
    }
}

export default AjaxLoader;
