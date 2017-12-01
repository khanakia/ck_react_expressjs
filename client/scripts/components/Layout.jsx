import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import Header from './Header'


@inject('globalStore')
@observer
class Layout extends Component {
    componentWillMount() {
        if (!Auth.check()) {
            hashHistory.push('/')
        }

        this.props.globalStore.fetchSettings()
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
