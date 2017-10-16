import React from 'react'
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { render } from 'react-dom'

import createBrowserHistory from 'history/createHashHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { MatchStoreClass } from './stores/MatchStoreClass';
import { MatchEntryStoreClass } from './stores/MatchEntryStoreClass';
import { JournalEntryStoreClass } from './stores/JournalEntryStoreClass';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const matchStore = new MatchStoreClass();
const matchEntryStore = new MatchEntryStoreClass()
const journalEntryStore = new JournalEntryStoreClass()


const stores = {
  // Key can be whatever you want
  routing: routingStore,
  matchStore: matchStore,
  matchEntryStore : matchEntryStore,
  journalEntryStore : journalEntryStore
  // ...other stores
};

const history = syncHistoryWithStore(browserHistory, routingStore);


import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
// import State from './components/State.jsx'
import Team from './components/Team.jsx'
import Account from './components/Account.jsx'
import Journal from './components/Journal.jsx'
import MatchType from './components/MatchType.jsx'
import Match from './components/Match.jsx'
import MatchEntries from './components/MatchEntries.jsx'
import MatchEntry from './components/MatchEntry.jsx'
import MdiMatch from './components/MdiMatch.jsx'
import Demo from './components/Demo.jsx'
import ReportConnect from './components/ReportConnect.jsx'

// import observableTodoStore from './components/Todo.jsx'

// const Home = () => (
//   <div>
//     Home
//   </div>
// )

window.sessionId = localStorage.getItem('sessionId', null);

const Root = () => (
   <Provider {...stores}>
  <Router history={history}>
    <div>
      <Switch>
        <Layout>
    		    <Route exact path="/" component={Home}/>
            <Route path="/demo" component={Demo}/>
            {/*<Route path="/states" component={State}/>*/}
            <Route path="/teams" component={Team}/>
            <Route exact path="/accounts" component={Account}/>
            <Route path="/accounts/:id" component={Account}/>
            <Route exact path="/match_types" component={MatchType}/>
            <Route exact path="/matches" component={Match}/>
            <Route path="/matches/:id" component={Match}/>
            <Route exact path="/journals" component={Journal}/>
            <Route path="/journals/account/:account_id" component={Journal}/>
            <Route exact path="/match_entries" component={MatchEntries}/>
            <Route path="/match_entries/match/:id" component={MatchEntry}/>
            <Route path="/mdimatch/:id" component={MdiMatch}/>
            <Route path="/report_connect" component={ReportConnect}/>
	    </Layout>
      </Switch>
      
    </div>
  </Router>
    </Provider>
)



render(<Root/>, document.getElementById('root'))