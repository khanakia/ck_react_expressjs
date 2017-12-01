import React, { Component } from "react";
import ReactDOM from 'react-dom';

import JqxWindow from '../jqwidgets-react/react_jqxwindow.js';
// import ComboBoxTeam from '../controls/ComboBoxTeam'
import ComboBoxLocal from '../controls/ComboBoxLocal'
import SessionHelper from '../../helpers/SessionHelper'
class SessionForm extends Component {

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
        teamsList: []
    }

	componentDidMount() {
		// $("#jqxwindow").jqxWindow("move", $(window).width() / 2 - $("#jqxwindow").jqxWindow("width") / 2, $(window).height() / 2 - $("#jqxwindow").jqxWindow("height") / 2);
		
		this.refs.jqxWindow.move($(window).width() / 2 - this.refs.jqxWindow.width() / 2, $(window).height() / 2 - this.refs.jqxWindow.height() / 2)

		this.refs.jqxWindow.on('close', (event) => { 			
			ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
		}); 


		if(this.props.id) {
			SessionHelper.show(this.props.id).then((res) => {
				this.setState({
					scount: this.state.scount+1,
					item: res.data
				})
				console.log(res)
			}).catch((error) => {
	          toastr.error("Validation Failed")
	        })
		}


        this.refs.session_name.focus()
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
        SessionHelper.save(dataJson, this.props.id).then((response) => {
            toastr.success("Successfully Saved.")
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
                    width={400} height={250} position={{ x: "50%", y: 175, left:"-250px" }}
                    minWidth={200} minHeight={200} maxWidth={700}
                    maxHeight={400} showCollapseButton={false}
                >
                	<div>
                        <span>
                            Session Form {this.state.item.session_name}
                        </span>
                    </div>
                    <div >
  
                		<form ref="form" onSubmit={(e) => this.formSubmit(e)} className="sessionForm">
                		    <input type="hidden" name="match_id" defaultValue={this.props.matchId} />
                            <div className="row11">
                                <div className="col-md-611">
                                    <div className="form-group">
                                        <label>Sesion Name</label>
            	                        <input  className="form-control form-control-sm" type="text" ref="session_name" name="session_name" defaultValue={this.state.item.session_name} key={this.state.scount} />
                                    </div>
                                    <div className="form-group">
                                       <label>Team</label>
                                       {/*<ComboBoxTeam width={"100%"} field_id="team_id" selectedValue={this.state.item.team_id} />*/}
                                       <ComboBoxLocal width={"100%"} field_id="team_id" valueMember='team_id'
                                        displayMember='team_name' data={this.props.teamsList}  selectedValue={this.state.item.team_id} />
                                    </div>
                                    <div className="text-right">
        	                           <button className="btn btn-primary btn-sm text-right" type="submit">Save Session</button>
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

export default SessionForm;
