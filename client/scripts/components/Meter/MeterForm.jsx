import React, { Component } from "react";
import ReactDOM from 'react-dom';

import JqxWindow from '../jqwidgets-react/react_jqxwindow.js';

import MeterHelper from '../../helpers/MeterHelper'
class MeterForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			scount: 0,
			item: {}
		}
	}
	static defaultProps = {
        matchId : null,
        onFormSubmitted: function() {},
        id: null,
    }

	componentDidMount() {
		this.refs.jqxWindow.move($(window).width() / 2 - this.refs.jqxWindow.width() / 2, $(window).height() / 2 - this.refs.jqxWindow.height() / 2)

		this.refs.jqxWindow.on('close', (event) => { 			
			ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
		}); 


		if(this.props.id) {
			MeterHelper.show(this.props.id).then((res) => {
				this.setState({
					scount: this.state.scount+1,
					item: res.data
				})
				console.log(res)
			}).catch((error) => {
	          toastr.error("Validation Failed")
	        })
		}


        this.refs.meter_name.focus()
	}

	componentWillMount() {

	}

    formSubmit = (e) => {
        e.preventDefault()
    
        if(!this.props.matchId) {
            toastr.error("Please Select Match First.")
        }

        let data = jQuery(e.target).serialize()
        const dataJson = URI.parseQuery(data)
        // console.log(dataJson)
        MeterHelper.save(dataJson, this.props.id).then((response) => {
        	this.refs.jqxWindow.close()
        	this.props.onFormSubmitted(response);
        }).catch((error) => {
            // console.log(error)
          toastr.error("Validation Failed")
        })
        return false;
    }

    render() {

        return (
            <div>

                <JqxWindow ref='jqxWindow' autoOpen={true}
                    width={200} height={150} position={{ x: "50%", y: 175, left:"-250px" }}
                    minWidth={100} minHeight={150} maxWidth={200}
                    maxHeight={150} showCollapseButton={false}
                >
                	<div>
                        <span>
                            Meter Form {this.state.item.meter_name}
                        </span>
                    </div>
                    <div >
  
                		<form ref="form" onSubmit={(e) => this.formSubmit(e)} className="sessionForm">
                		    <input type="hidden" name="match_id" defaultValue={this.props.matchId} />
                            <div className="row11">
                                <div className="col-md-611">
                                    <div className="form-group">
                                        <label>Meter Name</label>
            	                        <input  className="form-control form-control-sm" type="text" ref="meter_name" name="meter_name" defaultValue={this.state.item.meter_name} key={this.state.scount} />
                                    </div>
                                    <div className="text-right">
        	                           <button className="btn btn-primary btn-sm text-right" type="submit">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </JqxWindow>
            </div>
        );
    }
}

export default MeterForm;
