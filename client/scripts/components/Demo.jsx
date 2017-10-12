import React, { Component } from "react";

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';

import TeamHelper from 'helpers/TeamHelper.js'

import CSelect from './controls/CSelect'

class Demo extends Component {

    render() {

        let items = [
            {id:"L", text:"laga"},
            {id:"K", text:"khai"}
        ]


        return (
            <div>
            <h3>Demo</h3>
            <CSelect items={items} selectedValue="K" />
            </div>
        );
    }
}

export default Demo;