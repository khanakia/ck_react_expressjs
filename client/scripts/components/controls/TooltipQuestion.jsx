import React, { Component } from "react";

import JqxTooltip from '../jqwidgets-react/react_jqxtooltip.js';

class JournalEntry extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        content: null
    }

    render() {  
        let tooltipStyle = { float: 'left' };

        return (
            <span className="questionTooltip">
                   <JqxTooltip style={tooltipStyle}
                      position={'mouse'} name={'questionTooltip'}
                      theme = {'shinyblack'}
                      content={this.props.content}
                    >

                    <span className="tooltipIcon">
                    </span>
                     {/*   <span className="fa-stack fa-sm question-icon">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-question fa-stack-1x fa-inverse"></i>
                        </span>*/}
                    </JqxTooltip>

                
            </span>
        );
    }
}

export default JournalEntry;
