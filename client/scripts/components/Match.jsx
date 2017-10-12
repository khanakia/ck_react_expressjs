import React, { Component } from "react";
import { render } from 'react-dom'
// import { Redirect } from 'react-router'

import MatchHelper from '../helpers/MatchHelper'
import MatchTeam from './MatchTeam'
import MatchForm from './Match/MatchForm'
import MatchGrid from './Match/MatchGrid'
import {APP_URL_MATCHES} from '../Constant'
class Match extends Component {
    constructor(props, context) {
        super(props)
        this.state = {
            scount: 0,
            item: {}
        }
    }

    // refreshComponent() {
    //     this.refs.jqxgrid.updatebounddata();
    // }

    componentWillUpdate(a, b) {
        // console.log(a, b)

    }

    componentUpdated(a, b) {
        // console.log(a, b)

    }

    componentDidMount(a, b) {
        console.log("DID MOUNT")
         if(this.props.match.params.id) {
              this.fetchMatch(this.props.match.params.id)
          }
    }

    componentWillMount(a, b) {
        // console.log(a,b,"WILL MOUNT")
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id, this.props.match.params.id)
          if(nextProps.match.params.id!==this.props.match.params.id) {
              this.fetchMatch(nextProps.match.params.id)
          }
    }

    // fetchMatchesList = () => {
    //     MatchHelper.index().then( (res) => {
    //         this.setState({
    //             scount: this.state.scount+1,
    //             matchList: res.data
    //         })
    //     }).catch(function(error) {
    //         console.log(error)
    //     });
    // }

    fetchMatch = (id) => {
         MatchHelper.show(id).then( (res) => {
            // console.log(res.data)
            this.setState({
                scount: this.state.scount+1,
                item: res.data
            })
        })
    }

    resetForm() {
        this.setState({
            scount: this.state.scount+1,
            item: {}
        })
    }

    onFormSubmit = () => {
        this.refs.grid.rebind()
        // this.resetForm()
        // this.fetchMatchesList()
    }

    editItem = (id) => {
        // this.fetchMatch(id)
        this.props.history.push(APP_URL_MATCHES + "/" + id)
    }

    cancelFormClick = () => {
        this.props.history.push(APP_URL_MATCHES)
        // this.setState({
        //     scount: this.state.scount+1,
        //     item: {}
        // }, function() {
        // })
    }

    render() {
        // console.log(this.props.match.params)
        return (
            <div>
                <h3>Match</h3>
                <div className="row">
                    <div className="col-md-4">
                        <MatchGrid ref="grid" key={this.state.scount} editItem={this.editItem} />
                    </div>
                    <div className="col-md-8" key={`item_${this.state.item._id}`}>
                        <MatchForm key={this.state.scount} ref="memberForm" 
                            item={this.state.item}
                            onSubmit={this.onFormSubmit} cancelFormClick={() => this.cancelFormClick()} />
                            <hr />
                        { this.state.item._id ?
                        <MatchTeam matchId={this.state.item._id} /> : '' }
                    </div>
                </div>
            </div>

        );
    }
}

export default Match;
