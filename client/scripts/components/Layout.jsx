import React, { Component } from "react";
import Header from './Header'

class Layout extends Component {
    componentWillMount() {
        if (!Auth.check()) {
            hashHistory.push('/')
        }
    }
    render() {  
        return (
                
            <div className="layout">
                <Header />
  
                <main>
                {this.props.children}
                </main>
            </div>
			
        );
    }
}

export default Layout;
