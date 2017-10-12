import React, { Component } from "react";
import { Link } from 'react-router-dom'

import {APP_TITLE, APP_URL_ACCOUNTS, APP_URL_TEAMS, APP_URL_MATCHES, APP_URL_JOURNALS } from "../Constant"
class Home extends Component {


    render() {

        return (
			<div className="pageHome">
			    <div className="flex-center position-ref full-height">
			        <div className="content">
			            <div className="title m-b-md">
			                {APP_TITLE}
			            </div>

			            <div className="links">
			            	<Link to={APP_URL_ACCOUNTS}>Parties</Link>
			                <Link to={APP_URL_TEAMS}>Teams</Link>
			                <Link to={APP_URL_MATCHES}>Match Master</Link>
			                <Link to={APP_URL_JOURNALS}>Journal</Link>
			            </div>
			        </div>
			    </div>
			</div>
        );
    }
}

export default Home;
