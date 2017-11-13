import React from 'react'
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { render } from 'react-dom'
import createHistory from 'history/createHashHistory';
import { Provider } from 'mobx-react';

import {APP_URL_REPORT_CONNECT, APP_URL_REPORT_BSHEET, APP_URL_REPORT_JOURNAL_SUMMARY, APP_URL_REPORT_PL_MATCH_WISE, APP_URL_REPORT_PL_MATCH_ACCOUNTWISE } from "./Constant"


import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { GlobalStoreClass } from './stores/GlobalStoreClass';
import { MatchStoreClass } from './stores/MatchStoreClass';
import { MatchTeamStoreClass } from './stores/MatchTeamStoreClass';
import { MatchEntryStoreClass } from './stores/MatchEntryStoreClass';
import { JournalStoreClass } from './stores/JournalStoreClass';
import { JournalEntryStoreClass } from './stores/JournalEntryStoreClass';
import { SessionStoreClass } from './stores/SessionStoreClass';
import { SessionEntryStoreClass } from './stores/SessionEntryStoreClass';
import { AccountStoreClass } from './stores/AccountStoreClass';
import { ReportStoreClass } from './stores/ReportStoreClass';
import { BackupStoreClass } from './stores/BackupStoreClass';
import { ServerStatusStoreClass } from './stores/ServerStatusStoreClass';
import { UserStoreClass } from './stores/UserStoreClass';

const routingStore = new RouterStore();
const globalStore = new GlobalStoreClass();
const matchStore = new MatchStoreClass();
const matchTeamStore = new MatchTeamStoreClass();
const matchEntryStore = new MatchEntryStoreClass()
const journalStore = new JournalStoreClass()
const journalEntryStore = new JournalEntryStoreClass()
const sessionStore = new SessionStoreClass()
const sessionEntryStore = new SessionEntryStoreClass()
const accountStore = new AccountStoreClass()
const reportStore = new ReportStoreClass()
const backupStore = new BackupStoreClass()
const serverStatusStore = new ServerStatusStoreClass()
const userStore = new UserStoreClass()

const stores = {
  // Key can be whatever you want
  routing: routingStore,
  globalStore: globalStore,
  matchStore: matchStore,
  matchTeamStore: matchTeamStore,
  matchEntryStore : matchEntryStore,
  journalStore: journalStore,
  journalEntryStore : journalEntryStore,
  sessionStore : sessionStore,
  sessionEntryStore : sessionEntryStore,
  accountStore: accountStore,
  reportStore: reportStore,
  backupStore: backupStore,
  serverStatusStore: serverStatusStore,
  userStore: userStore
  // ...other stores
};

window.hashHistory = createHistory()
const history = syncHistoryWithStore(hashHistory, routingStore);

import Layout from './components/Layout.jsx'
import UserLogin from './components/UserLogin.jsx'
import UserChangePassword from './components/UserChangePassword.jsx'

import Home from './components/Home.jsx'
// import State from './components/State.jsx'
import Team from './components/Team.jsx'
import Account from './components/Account.jsx'
import JournalEntry from './components/JournalEntry.jsx'
import MatchType from './components/MatchType.jsx'
import Match from './components/Match.jsx'
import MatchEntries from './components/MatchEntries.jsx'
import MatchEntry from './components/MatchEntry.jsx'
import MdiMatch from './components/MdiMatch.jsx'
import Demo from './components/Demo.jsx'
import ReportBalanceSheet from './components/ReportBalanceSheet.jsx'
import ReportJournalSummary from './components/ReportJournalSummary.jsx'
import ReportPlMatchAccountWise from './components/ReportPlMatchAccountWise.jsx'
import ReportPlMatchWise from './components/ReportPlMatchWise.jsx'
import ReportConnect from './components/ReportConnect.jsx'
import BackupDb from './components/BackupDb.jsx'
import ServerStatus from './components/ServerStatus.jsx'
import User from './components/User.jsx'
import ActivityLog from './components/ActivityLog.jsx'




import Auth from './helpers/auth'
window.Auth = Auth;

window.sessionId = localStorage.getItem('sessionId', null);

const Root = () => (
   <Provider {...stores}>
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={UserLogin}/>
        <Layout>
    		    <Route exact path="/dashboard" component={Home}/>
            <Route exact path="/changepassword" component={UserChangePassword}/>
            <Route path="/demo" component={Demo}/>
            {/*<Route path="/states" component={State}/>*/}
            <Route path="/teams" component={Team}/>
            <Route exact path="/accounts" component={Account}/>
            <Route path="/accounts/:id" component={Account}/>
            <Route exact path="/match_types" component={MatchType}/>
            <Route exact path="/matches" component={Match}/>
            <Route path="/matches/:id" component={Match}/>
            <Route exact path="/journal_entries" component={JournalEntry}/>
            <Route path="/journal_entries/account/:account_id" component={JournalEntry}/>
            <Route exact path="/match_entries" component={MatchEntries}/>
            <Route path="/match_entries/match/:id" component={MatchEntry}/>
            <Route path="/mdimatch/:id" component={MdiMatch}/>
            <Route exact path={APP_URL_REPORT_JOURNAL_SUMMARY} component={ReportJournalSummary}/>
            <Route path={APP_URL_REPORT_CONNECT} component={ReportConnect}/>
            <Route path={APP_URL_REPORT_BSHEET} component={ReportBalanceSheet}/>
            <Route path={APP_URL_REPORT_PL_MATCH_WISE} component={ReportPlMatchWise}/>
            <Route path={APP_URL_REPORT_PL_MATCH_ACCOUNTWISE} component={ReportPlMatchAccountWise}/>

            <Route exact path="/activity_log" component={ActivityLog}/>
            <Route exact path="/users" component={User}/>
            <Route path="/users/:id" component={User}/>
            <Route path="/backupdb" component={BackupDb}/>
            <Route path="/server_status" component={ServerStatus}/>
	    </Layout>
      </Switch>
      
    </div>
  </Router>
    </Provider>
)



render(<Root/>, document.getElementById('root'))