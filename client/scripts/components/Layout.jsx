import React, { Component } from "react";

import Header from './Header'


class Layout extends Component {
  
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
