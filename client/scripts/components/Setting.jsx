import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import CSelect from './controls/CSelect'
import {LIST_YN_BOOLEAN, LIST_THEMES, LIST_GRID_THEMES} from '../Constant'
import OtherHelper from '../helpers/OtherHelper'

@inject('globalStore')
@observer
class Setting extends Component {

	componentDidMount() {
		this.props.globalStore.fetchSettings()
	}


	saveSettings = (e) => {
		 if(! $(this.refs.form).valid()) {
          return false;
        }

		let data = jQuery(this.refs.form).serialize()
		OtherHelper.saveSettings(data)
	    .then((res) => {
	    	toastr.success(res.data.message)
	    	this.props.globalStore.fetchSettings()
	    }).catch((err) => {
	    	toastr.error(err.response.data.message)
	    })
	}


    render() {

    	const { settings } = this.props.globalStore
    	console.log(settings)
        return (
            <div className="page mx-w-600px mx-2">
                <h6><i className="fa fa-gear"></i> Settings</h6>
     			<div className="row">
         			<div className="col-md-12">
         				<form ref="form">
						    <table className="table table-striped">
						      <thead>
						        <tr>
									<th scope="col">#</th>
									<th scope="col">Type</th>
									<th scope="col"></th>
						        </tr>
						      </thead>
						      <tbody>
						        <tr>
						        	<th scope="row">1</th>
						        	<td>
						        		Show Decimals
						        	</td>
						        	<td>
						        		<CSelect className="uk-select uk-form-small" name="show_decimals" value={settings.show_decimals} items={LIST_YN_BOOLEAN}>
	                                	</CSelect>
						        		
						        	</td>
						        </tr>

						        <tr>
						        	<th scope="row">2</th>
						        	<td>
						        		Company Name
						        	</td>
						        	<td>
						        		<input type="text" className="uk-select uk-form-small required error-hide" name="company_name" defaultValue={settings.company_name} key={Math.random()} />
						        		
						        	</td>
						        </tr>

						        <tr>
						        	<th scope="row">2</th>
						        	<td>
						        		Theme
						        	</td>
						        	<td>
						        		<CSelect className="uk-select uk-form-small" name="theme_name" value={settings.theme_name} items={LIST_THEMES}>
	                                	</CSelect>
						        		
						        	</td>
						        </tr>
						        <tr>
						        	<th scope="row">2</th>
						        	<td>
						        		Grid Theme
						        	</td>
						        	<td>
						        		<CSelect className="uk-select uk-form-small" name="grid_theme_name" value={settings.grid_theme_name} items={LIST_GRID_THEMES}>
	                                	</CSelect>
						        		
						        	</td>
						        </tr>
						      </tbody>
						    </table>
					    </form>
         			</div>
         			<div className="col-md-12 text-right">
         				<button className="btn btn-sm btn-primary" onClick={this.saveSettings}>Save</button>
         			</div>
     			</div>
            </div>
        );
    }
}

export default Setting;
