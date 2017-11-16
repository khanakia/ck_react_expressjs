import React, { Component } from "react";

import CSelect from '../controls/CSelect.jsx'
class MatchEntryBookDdl extends Component {
  constructor(props) {
    super(props);

  }

    static defaultProps = {
        bookNoList: [],
        onChange: function(id){}
    }

    componentDidMount() {
    }


    getSelectedValue() {
        return this.refs.dropdown.getSelectedValue();
    }

    render() {
        let source = []
        for (var i = 0; i < this.props.bookNoList.length+1; i++) {
            source.push({
              id: i+1,
              text: i+1
            })
        };

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
