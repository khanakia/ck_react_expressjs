import React, { Component } from "react";

import JqxDropDownList from '../jqwidgets-react/react_jqxdropdownlist.js';

import MatchEntryHelper from '../../helpers/MatchEntryHelper'


class MatchEntryBookDdl extends Component {
  constructor(props) {
    super(props);
    this.state = {
        matchId: this.props.matchId,
        matchTeams: [],
        count: 1,
        scount: 0
    }
  }

    static defaultProps = {
        matchId: null,
        matchTeams: []
    }

    componentDidMount() {
        MatchEntryHelper.count_book(this.props.matchId).then((res) => {
            console.log(res)
            this.setState({
                count: res.data.count,
                scount: this.state.scount+1
            })
        })
    }

    render() {
        let source = []
        for (var i = 1; i <= this.state.count; i++) {
            source.push(i)
        };
        console.log(source)
        return (
            <div>
                <JqxDropDownList key={this.state.scount}
                    width={200} height={25} source={source} selectedIndex={0}
                
                />
            </div>
        );
    }
}

export default MatchEntryBookDdl;
