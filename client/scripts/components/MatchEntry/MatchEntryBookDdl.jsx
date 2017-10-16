import React, { Component } from "react";

// import JqxDropDownList from '../jqwidgets-react/react_jqxdropdownlist.js';
import CSelect from '../controls/CSelect.jsx'
// import MatchEntryHelper from '../../helpers/MatchEntryHelper'


class MatchEntryBookDdl extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     matchId: this.props.matchId,
    //     count: 1,
    //     // scount: this.props.scount
    // }
  }

    static defaultProps = {
        // scount: 0,
        // matchId: null,
        bookNoList: [],
        onChange: function(id){}
    }

    componentDidMount() {
        // this.sendAjax()
    }


    getSelectedValue() {
        return this.refs.dropdown.getSelectedValue();
    }

    // sendAjax = () => {
    //     MatchEntryHelper.count_book(this.props.matchId).then((res) => {
    //         console.log(res)
    //         this.setState({
    //             count: res.data.count,
    //         })
    //     })
    // }

    componentWillUpdate(nextProps, nextState) {
      // console.log('Component WILL UPDATE!');
      // console.log(this.props.scount, nextProps.scount);
      // if(this.props.scount!==nextProps.scount) {
      //   this.sendAjax()
      // }
    }
    render() {
        let source = []
        for (var i = 0; i < this.props.bookNoList.length+1; i++) {
            source.push({
              id: i+1,
              text: i+1
            })
        };
        // console.log(source)
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
                         <CSelect ref="dropdown" className="form-control form-control-sm" items={source} onChange={this.props.onChange}> </CSelect>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        );
    }
}

export default MatchEntryBookDdl;
