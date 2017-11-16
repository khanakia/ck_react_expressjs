import React, { Component } from "react";

import OtherHelper from '../helpers/OtherHelper'

class RemoveAllRecord extends Component {

	removeAllRecords = () => {
		var r = confirm("Are you sure!");
        if (r == true) {
			OtherHelper.removeAllRecords()
		    .then((res) => {
		    	toastr.success(res.data.message)
		    }).catch((err) => {
		    	toastr.error(err.response.data.message)
		    })
        }
	}

	removeLedgerRecords = () => {
		var r = confirm("Are you sure!");
        if (r == true) {
			OtherHelper.removeLedgerRecords()
		    .then((res) => {
		    	toastr.success(res.data.message)
		    })
		    .catch((err) => {
		    	toastr.error(err.response.data.message)
		    })
        }
	}

	removeEverything = () => {
		var r = confirm("Are you sure!");
        if (r == true) {
			OtherHelper.clearWholeDb()
		    .then((res) => {
		    	toastr.success(res.data.message)
		    })
		    .catch((err) => {
		    	toastr.error(err.response.data.message)
		    })
        }
	}

    render() {
        return (
            <div className="page mx-w-600px mx-2">
                <h6><i className="fa fa-trash"></i> Remove Data</h6>
     			<div className="row">
         			<div className="col-md-12">
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
					        	<th scope="row">2</th>
					        	<td>
					        		Remove All Records
					        		<h6><span className="badge badge-light">Note: Accounts, Team, Ledger entries will not be removed.</span></h6>
					        	</td>
					        	<td>
					        		<button className="btn btn-sm btn-primary" onClick={this.removeAllRecords}>Remove</button>
					        	</td>
					        </tr>
					        <tr>
					        	<th scope="row">1</th>
					        	<td>
					        		Remove Ledger Records
					        		<h6><span className="badge badge-light">Note: It will merge the Final Balance as Opening Balance.</span></h6>
					        	</td>
					        	<td>
					        		<button className="btn btn-sm btn-primary" onClick={this.removeLedgerRecords}>Remove</button>
					        	</td>
					        </tr>
					        <tr>
					        	<th scope="row">1</th>
					        	<td>
					        		Remove Everything
					        		<h6><span className="badge badge-light">Note: It will remove everything.</span></h6>
					        	</td>
					        	<td>
					        		<button className="btn btn-sm btn-primary" onClick={this.removeEverything}>Remove</button>
					        	</td>
					        </tr>
					      </tbody>
					    </table>
         			</div>
     			</div>
            </div>
        );
    }
}

export default RemoveAllRecord;
