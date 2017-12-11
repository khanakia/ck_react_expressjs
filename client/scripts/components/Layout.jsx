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

    componentDidMount() {
        this.init()
    }

    componentDidUpdate() {
        this.init()
    }

    init() {
        const { settings } = this.props.globalStore
        jQuery('body').addClass(settings.theme_name)
        $.jqx.theme = settings.grid_theme_name;
    }

    render() {  
        const { settings } = this.props.globalStore
        if(jQuery.isEmptyObject(settings)) return null

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
