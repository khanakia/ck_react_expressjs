import React from 'react'
import { Link } from 'react-router-dom'

import {APP_URL_ACCOUNTS, APP_URL_TEAMS, APP_URL_MATCHES, APP_URL_MATCH_ENTRIES, APP_URL_JOURNALS, APP_URL_REPORT_CONNECT } from "../Constant"
class Header extends React.Component {
  componentDidMount() {
    $("#jqxMenu").jqxMenu({ height: 30, showTopLevelArrows: true, keyboardNavigation: true });
  }
  render() {
    return (
        <div className="row">
            <div id='jqxMenu' className="jqxMenu-topmenu">
                <ul>
                    <li><Link to={'/'}><label className="text-danger font-weight-bold">London Betfair</label></Link></li>
                    <li>Master
                        <ul>
                            <li><Link to={APP_URL_ACCOUNTS}>Parties (F1)</Link></li>
                            <li><Link to={APP_URL_TEAMS}>Teams (F2)</Link></li>
                        </ul>
                    </li>
                    <li>Match
                        <ul>
                            <li><Link to={APP_URL_MATCHES}>Match Master (F3)</Link></li>
                            <li><Link to={APP_URL_MATCH_ENTRIES}>Match Entry (F4)</Link></li>
                        </ul>
                    </li>
                   <li>Ledger
                        <ul>
                            <li><Link to={APP_URL_JOURNALS}>Journal</Link></li>
                        </ul>
                    </li>
                    <li>Reports
                        <ul>
                          <li><Link to={APP_URL_REPORT_CONNECT}>Connect Report (F6)</Link></li>
                        </ul>
                    </li>
                    <li>Utilities
                        <ul>
                            <li><a href={'/others/db_backup'}>Backup DB</a></li>
                            <li><Link to={'/others/db_remove_all_records'}>Remove All Records</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    );
  }
}

export default Header;
