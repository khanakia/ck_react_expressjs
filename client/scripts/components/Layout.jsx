import React, { Component } from "react";

import Header from './Header'

import {HotKeys} from 'react-hotkeys';

const keyMap = {
  'deleteNode': 'del',
  'moveUp': 'up'
};

const handlers = {
  'deleteNode': (event) => console.log('Delete node hotkey called!'),
  'moveUp': (event) => alert('Move up hotkey called!')
}

class Layout extends Component {
  
    render() {  
        return (
                <HotKeys attach={window} keyMap={keyMap} handlers={handlers}>
            <div className="App">
                <Header />
  
                <main>
                {this.props.children}
                </main>
            </div>
			</HotKeys>
        );
    }
}

export default Layout;
