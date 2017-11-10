import React from 'react'
import { Link } from 'react-router-dom'

import {APP_TITLE, APP_LOCATION_HREF_MDI_MATCH, APP_URL_ACCOUNTS, APP_URL_TEAMS, APP_URL_MATCHES, 
        APP_URL_MATCH_ENTRIES, APP_URL_JOURNAL_ENTRIES, APP_URL_REPORT_BSHEET, APP_URL_REPORT_JOURNAL_SUMMARY,
        APP_URL_REPORT_PL_MATCH_WISE, APP_URL_REPORT_PL_MATCH_ACCOUNTWISE, APP_URL_REPORT_CONNECT } from "../Constant"
        
class Header extends React.Component {
    constructor(props) {
        super(props);        
    }

    componentDidMount() {
        $("#jqxMenu").jqxMenu({ height: 30, showTopLevelArrows: true, keyboardNavigation: true });
    }

    showLastMatch = (e) => {
        e.preventDefault()
        // console.log(this.props)
        var matchId = localStorage.getItem('matchId')
        if(matchId) {
            window.location.href = APP_LOCATION_HREF_MDI_MATCH + matchId
        }
    }

    showServerStatuses = (e) => {
        e.preventDefault()
        console.log(window.global.nwUrl)
        // Load native UI library
        var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

        // Get the current window
        var win = gui.Window.get();

        var win1 = nw.Window.open("index.html", {}, function callback(nwWindow){
           console.log("OPENENENENENE")
           win.close()
        })
    }

    openAnydesk(e) {
        e.preventDefault()
        axios.get('/others/start_anydesk')
    }

    openAmmy(e) {
        e.preventDefault()
        axios.get('/others/start_ammy')
    }

    render() {
        return (
            <div className="row">
                <div id='jqxMenu' className="jqxMenu-topmenu">
                    <ul>
                        <li><Link to={'/'}><label className="text-danger font-weight-bold">{APP_TITLE}</label></Link></li>
                        <li><i className="fa fa-database"></i> Master
                            <ul>
                                <li><Link to={APP_URL_ACCOUNTS}>Parties (F1)</Link></li>
                                <li><Link to={APP_URL_TEAMS}>Teams (F2)</Link></li>
                            </ul>
                        </li>
                        <li><i className="fa fa-futbol-o"></i> Match
                            <ul>
                                <li><Link to={APP_URL_MATCHES}>Match Master (F3)</Link></li>
                                <li><Link to={APP_URL_MATCH_ENTRIES}>Match Entry (F4)</Link></li>
                                <li><a href="#" onClick={this.showLastMatch}>Last Match (F7)</a></li>
                            </ul>
                        </li>
                       <li><i className="fa fa-book"></i> Ledger
                            <ul>
                                <li><Link to={APP_URL_JOURNAL_ENTRIES}>Journal Entries (F8)</Link></li>
                            </ul>
                        </li>
                        <li><i className="fa fa-bar-chart"></i> Reports
                            <ul>
                                <li><Link to={APP_URL_REPORT_CONNECT}>Connect Report</Link></li>
                                <li><Link to={APP_URL_REPORT_PL_MATCH_WISE}>PL Match Wise</Link></li>
                                <li><Link to={APP_URL_REPORT_PL_MATCH_ACCOUNTWISE}>PL Match Account Wise</Link></li>
                              <li><Link to={APP_URL_REPORT_JOURNAL_SUMMARY}>Journal Summary (F6)</Link></li>
                              <li><Link to={APP_URL_REPORT_BSHEET}>Balance Sheet (F9)</Link></li>

                            </ul>
                        </li>
                        <li><i className="fa fa-gear"></i> Utilities
                            <ul>
                                <li><a href="#" onClick={this.showServerStatuses}>Server Status</a></li>
                                {/*<li><a href={'/others/db_backup'}>Backup DB</a></li>*/}
                                <li><Link to={'/backupdb'}>Backup DB</Link></li>
                                <li><Link to={'/others/db_remove_all_records'}>Remove All Records</Link></li>

                                <li><a href="#" onClick={this.openAnydesk}>Anydesk Online Support</a></li>
                                <li><a href="#" onClick={this.openAmmy}>Ammy Online Support</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Header;
