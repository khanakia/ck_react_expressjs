// import React from 'react';
// import ReactDOM from 'react-dom';

// import { LocaleProvider } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';
// import { DatePicker } from 'antd';


// function App() {
//   return (
//      <LocaleProvider locale={enUS}>
//         <div style={{ margin: 100 }}>
//           <h1>AntDesign Demo</h1>
//           <hr /><br />
//           <DatePicker />
//         </div>

//       </LocaleProvider>
//   );
// } 

// ReactDOM.render(<App />, document.getElementById('root'));
//  


import { render } from 'react-dom'
import Layout from './components/Layout.jsx'
import State from './components/State.jsx'
import Team from './components/Team.jsx'
import Member from './components/Member.jsx'
// import observableTodoStore from './components/Todo.jsx'



import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const Root = () => (
  <Router>
    <div>
      <Switch>
        <Layout>
		    <Route exact path="/" component={Home}/>
		    <Route path="/state" component={State}/>
        <Route path="/team" component={Team}/>
        <Route path="/member" component={Member}/>
	      </Layout>
      </Switch>
      
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

render(<Root/>, document.getElementById('root'))