import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


import { render } from 'react-dom'
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
// import observableTodoStore from './components/Todo.jsx'

// const Home = () => (
//   <div>
//     Home
//   </div>
// )

window.sessionId = localStorage.getItem('sessionId', null);


const Root = () => (
  <Router>
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
            <Route path="/journals/:id" component={Journal}/>
            <Route exact path="/match_entries" component={MatchEntries}/>
            <Route path="/match_entries/match/:id" component={MatchEntry}/>
            <Route path="/mdimatch/:id" component={MdiMatch}/>
	    </Layout>
      </Switch>
      
    </div>
  </Router>
)



render(<Root/>, document.getElementById('root'))