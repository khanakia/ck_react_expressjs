import React, { Component } from "react";
import Auth from '../helpers/auth.js'

import Header from './Header'


class Layout extends Component {
    componentWillMount() {
        if (!Auth.check()) {
            hashHistory.push('/')
        }
    }
    render() {  
        return (
                
            <div className="App">
                <Header />
  
                <main>
                {this.props.children}
                </main>
            </div>
			
        );
    }
}

export default Layout;
