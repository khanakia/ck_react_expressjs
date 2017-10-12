import React, { Component } from "react";

import JqxDropDownList from '../jqwidgets-react/react_jqxdropdownlist.js';

import MatchEntryHelper from '../../helpers/MatchEntryHelper'


class MatchEntryBookDdl extends Component {
  constructor(props) {
    super(props);
    this.state = {
        matchId: this.props.matchId,
        count: 1,
        // scount: this.props.scount
    }
  }

    static defaultProps = {
        scount: 0,
        matchId: null,
    }

    componentDidMount() {
        this.sendAjax()
    }


    getSelectedValue() {
        var item = this.refs.dropdown.getSelectedItem();
        if(item) return item.value;
        return null;
    }

    sendAjax = () => {
        MatchEntryHelper.count_book(this.props.matchId).then((res) => {
            console.log(res)
            this.setState({
                count: res.data.count,
            })
        })
    }

    componentWillUpdate(nextProps, nextState) {
      // console.log('Component WILL UPDATE!');
      // console.log(this.props.scount, nextProps.scount);
      if(this.props.scount!==nextProps.scount) {
        this.sendAjax()
      }
    }
    render() {
        let source = []
        for (var i = 0; i < this.state.count; i++) {
            source.push(i+1)
        };
        // console.log("count" , this.state.count)
        return (
            <div>
                <table className="table table-striped table-sm">
                  <thead className="thead-inverse">
                    <tr>
                      <th>Book No</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <JqxDropDownList key={this.state.count} ref="dropdown"
                            width={"100%"} height={25} source={source} selectedIndex={0}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        );
    }
}

export default MatchEntryBookDdl;
